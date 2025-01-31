import { markRaw, onMounted, ref } from 'vue'
import { createPinia, defineStore } from 'pinia'
import { marked } from 'marked'
import CodeMirror from 'codemirror'
import { useDark, useStorage, useToggle } from '@vueuse/core'
import { ElMessage, ElMessageBox } from 'element-plus'

import { altKey, codeBlockThemeOptions, colorOptions, fontFamilyOptions, fontSizeOptions, legendOptions, shiftKey, themeMap, themeOptions } from '@/config'
import WxRenderer from '@/utils/wx-renderer'
import DEFAULT_CONTENT from '@/assets/example/markdown.md?raw'
import DEFAULT_CSS_CONTENT from '@/assets/example/theme-css.txt?raw'
import { addPrefix, css2json, customCssWithTemplate, downloadMD, exportHTML, formatCss, formatDoc, setColorWithCustomTemplate, setFontSizeWithTemplate, setTheme } from '@/utils'

export const useStore = defineStore(`store`, () => {
  // 是否开启深色模式
  const isDark = useDark()
  const toggleDark = useToggle(isDark)

  // 是否开启 Mac 代码块
  const isMacCodeBlock = useStorage(`isMacCodeBlock`, true)
  const toggleMacCodeBlock = useToggle(isMacCodeBlock)

  // 是否在左侧编辑
  const isEditOnLeft = useStorage(`isEditOnLeft`, true)
  const toggleEditOnLeft = useToggle(isEditOnLeft)

  // 是否开启微信外链接底部引用
  const isCiteStatus = useStorage(`isCiteStatus`, false)
  const toggleCiteStatus = useToggle(isCiteStatus)

  const output = ref(``)

  // 文本字体
  const theme = useStorage(addPrefix(`theme`), themeOptions[0].value)
  // 文本字体
  const fontFamily = useStorage(`fonts`, fontFamilyOptions[0].value)
  // 文本大小
  const fontSize = useStorage(`size`, fontSizeOptions[2].value)
  // 文本颜色
  const fontColor = useStorage(`color`, colorOptions[0].value)
  // 代码块主题
  const codeBlockTheme = useStorage(`codeBlockTheme`, codeBlockThemeOptions[2].value)
  // 图注格式
  const legend = useStorage(`legend`, legendOptions[3].value)

  const fontSizeNumber = fontSize.value.replace(`px`, ``)

  const wxRenderer = new WxRenderer({
    theme: setTheme(themeMap[theme.value], fontSizeNumber, fontColor.value, theme.value === `default`),
    fonts: fontFamily.value,
    size: fontSize.value,
  })

  // 内容编辑器编辑器
  const editor = ref(null)
  // 编辑区域内容
  const editorContent = useStorage(`__editor_content`, formatDoc(DEFAULT_CONTENT))

  const initEditorContent = () => {
    ElMessageBox.confirm(
      `此操作将会把文档内容还原成初始文档，是否继续操作？`,
      `提示`,
      {
        confirmButtonText: `确定`,
        cancelButtonText: `取消`,
        type: `warning`,
        center: true,
      },
    )
      .then(() => {
        editorContent.value = DEFAULT_CONTENT
        editor.value.setValue(DEFAULT_CONTENT)
        ElMessage({
          type: `success`,
          message: `文档重置成功~`,
        })
      })
      .catch(() => {
        editor.value.focus()
      })
  }

  // 格式化文档
  const formatContent = () => {
    const doc = formatDoc(editor.value.getValue())
    editorContent.value = doc
    editor.value.setValue(doc)
  }

  // 切换 highlight.js 代码主题
  const codeThemeChange = () => {
    const cssUrl = codeBlockTheme.value
    const el = document.querySelector(`#hljs`)
    if (el) {
      el.setAttribute(`href`, cssUrl)
    }
    else {
      const link = document.createElement(`link`)
      link.setAttribute(`type`, `text/css`)
      link.setAttribute(`rel`, `stylesheet`)
      link.setAttribute(`href`, cssUrl)
      link.setAttribute(`id`, `hljs`)
      document.head.appendChild(link)
    }
  }

  // 更新编辑器
  const editorRefresh = () => {
    codeThemeChange()
    const renderer = wxRenderer
    renderer.reset()
    renderer.setOptions({ status: isCiteStatus.value, legend: legend.value })
    marked.setOptions({ renderer })
    // console.log(editor.value.getValue(0))
    // console.log(marked.parse(`  - list1`))
    let outputTemp = marked.parse(editor.value.getValue(0))
    // console.log('outputTemp', outputTemp)

    // 去除第一行的 margin-top
    outputTemp = outputTemp.replace(/(style=".*?)"/, `$1;margin-top: 0"`)
    if (isCiteStatus.value) {
      // 引用脚注
      outputTemp += wxRenderer.buildFootnotes()
      // 附加的一些 style
      outputTemp += wxRenderer.buildAddition()
    }

    if (isMacCodeBlock.value) {
      outputTemp += `
        <style>
          .hljs.code__pre::before {
            position: initial;
            padding: initial;
            content: '';
            display: block;
            height: 25px;
            background-color: transparent;
            background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDUwcHgiIGhlaWdodD0iMTMwcHgiPgogIDxlbGxpcHNlIGN4PSI2NSIgY3k9IjY1IiByeD0iNTAiIHJ5PSI1MiIgc3Ryb2tlPSJyZ2IoMjIwLDYwLDU0KSIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJyZ2IoMjM3LDEwOCw5NikiLz4KICA8ZWxsaXBzZSBjeD0iMjI1IiBjeT0iNjUiIHJ4PSI1MCIgcnk9IjUyIiAgc3Ryb2tlPSJyZ2IoMjE4LDE1MSwzMykiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0icmdiKDI0NywxOTMsODEpIi8+CiAgPGVsbGlwc2UgY3g9IjM4NSIgY3k9IjY1IiByeD0iNTAiIHJ5PSI1MiIgIHN0cm9rZT0icmdiKDI3LDE2MSwzNykiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0icmdiKDEwMCwyMDAsODYpIi8+Cjwvc3ZnPg==');
            background-position: 12px 6px !important;
            background-repeat: no-repeat;
            background-size: 40px !important;
          }

          .hljs.code__pre {
            padding: 0 !important;
          }

          .hljs.code__pre code {
            display: -webkit-box;
            padding: 0.5em 1em 1em;
            overflow-x: auto;
            text-indent: 0;
          }
        </style>
      `
    }

    output.value = outputTemp
  }

  // 自义定 CSS 编辑器
  const cssEditor = ref(null)
  const setCssEditorValue = (content) => {
    cssEditor.value.setValue(content)
  }
  // 自定义 CSS 内容
  const cssContent = useStorage(`__css_content`, DEFAULT_CSS_CONTENT)
  const cssContentConfig = useStorage(addPrefix(`css_content_config`), {
    active: `方案 1`,
    tabs: [
      {
        title: `方案 1`,
        name: `方案 1`,
        // 兼容之前的方案
        content: cssContent.value || DEFAULT_CSS_CONTENT,
      },
    ],
  })

  onMounted(() => {
    // 清空过往历史记录
    cssContent.value = ``
  })

  const getCurrentTab = () => cssContentConfig.value.tabs.find((tab) => {
    return tab.name === cssContentConfig.value.active
  })
  const tabChanged = (name) => {
    cssContentConfig.value.active = name
    const content = cssContentConfig.value.tabs.find((tab) => {
      return tab.name === name
    }).content
    setCssEditorValue(content)
  }

  // 重命名 css 方案
  const renameTab = (name) => {
    const tab = getCurrentTab()
    tab.title = name
    tab.name = name
    cssContentConfig.value.active = name
  }

  const addCssContentTab = (name) => {
    cssContentConfig.value.tabs.push({
      name,
      title: name,
      content: DEFAULT_CSS_CONTENT,
    })
    cssContentConfig.value.active = name
    setCssEditorValue(DEFAULT_CSS_CONTENT)
  }
  const validatorTabName = (val) => {
    return cssContentConfig.value.tabs.every(({ name }) => name !== val)
  }
  // 更新 CSS
  const updateCss = () => {
    const json = css2json(cssEditor.value.getValue())
    let t = setTheme(themeMap[theme.value], fontSizeNumber, fontColor.value, theme.value === `default`)

    t = customCssWithTemplate(json, fontColor.value, t)
    wxRenderer.setOptions({
      theme: t,
    })
    editorRefresh()
  }
  // 初始化 CSS 编辑器
  onMounted(() => {
    const cssEditorDom = document.querySelector(`#cssEditor`)
    cssEditorDom.value = getCurrentTab().content

    cssEditor.value = markRaw(
      CodeMirror.fromTextArea(cssEditorDom, {
        mode: `css`,
        theme: `style-mirror`,
        lineNumbers: false,
        lineWrapping: true,
        matchBrackets: true,
        autofocus: true,
        extraKeys: {
          [`${shiftKey}-${altKey}-F`]: function autoFormat(editor) {
            const doc = formatCss(editor.getValue())
            getCurrentTab().content = doc
            editor.setValue(doc)
          },
        },
      }),
    )

    // 自动提示
    cssEditor.value.on(`keyup`, (cm, e) => {
      if ((e.keyCode >= 65 && e.keyCode <= 90) || e.keyCode === 189) {
        cm.showHint(e)
      }
    })

    // 实时保存
    cssEditor.value.on(`update`, () => {
      updateCss()
      getCurrentTab().content = cssEditor.value.getValue()
    })
  })

  // 重置样式
  const resetStyle = () => {
    isCiteStatus.value = false
    isMacCodeBlock.value = true

    theme.value = themeOptions[0].value
    fontFamily.value = fontFamilyOptions[0].value
    fontFamily.value = fontFamilyOptions[0].value
    fontSize.value = fontSizeOptions[2].value
    fontColor.value = colorOptions[0].value
    codeBlockTheme.value = codeBlockThemeOptions[2].value
    legend.value = legendOptions[3].value

    cssContentConfig.value = {
      active: `方案 1`,
      tabs: [
        {
          title: `方案 1`,
          name: `方案 1`,
          // 兼容之前的方案
          content: cssContent.value || DEFAULT_CSS_CONTENT,
        },
      ],
    }

    cssEditor.value.setValue(DEFAULT_CSS_CONTENT)

    updateCss()
    editorRefresh()
  }

  // 为函数添加刷新编辑器的功能
  const withAfterRefresh = fn => (...rest) => {
    fn(...rest)
    editorRefresh()
  }

  const getTheme = (size, color) => {
    const t = setFontSizeWithTemplate(themeMap[theme.value])(size.replace(`px`, ``), theme.value === `default`)
    // console.log('getTheme', t, color, theme.value, themeMap[theme.value])
    if (typeof themeMap[theme.value]?.custom === `function`) {
      return themeMap[theme.value].custom.call(t, { color })
    }
    return setColorWithCustomTemplate(t, color, theme.value === `default`)
  }

  const themeChanged = withAfterRefresh((newTheme) => {
    wxRenderer.setOptions({
      theme: setTheme(themeMap[newTheme], fontSizeNumber, fontColor.value, newTheme === `default`),
    })

    theme.value = newTheme
  })

  const fontChanged = withAfterRefresh((fonts) => {
    wxRenderer.setOptions({
      fonts,
    })

    fontFamily.value = fonts
  })

  const sizeChanged = withAfterRefresh((size) => {
    const theme = getTheme(size, fontColor.value)
    wxRenderer.setOptions({
      size,
      theme,
    })

    fontSize.value = size
  })

  const colorChanged = withAfterRefresh((newColor) => {
    const theme = getTheme(fontSize.value, newColor)
    wxRenderer.setOptions({
      theme,
    })

    fontColor.value = newColor
  })

  const codeBlockThemeChanged = withAfterRefresh((newTheme) => {
    codeBlockTheme.value = newTheme
  })

  const legendChanged = withAfterRefresh((newVal) => {
    legend.value = newVal
  })

  const macCodeBlockChanged = withAfterRefresh(() => {
    toggleMacCodeBlock()
  })

  const citeStatusChanged = withAfterRefresh(() => {
    toggleCiteStatus()
  })

  // 导出编辑器内容为 HTML，并且下载到本地
  const exportEditorContent2HTML = () => {
    exportHTML()
    document.querySelector(`#output`).innerHTML = output.value
  }

  // 导出编辑器内容到本地
  const exportEditorContent2MD = () => {
    downloadMD(editor.value.getValue())
  }

  // 导入 Markdown 文档
  const importMarkdownContent = () => {
    const body = document.body
    const input = document.createElement(`input`)
    input.type = `file`
    input.name = `filename`
    input.accept = `.md`
    input.onchange = () => {
      const file = input.files[0]
      if (!file) {
        return
      }

      const reader = new FileReader()
      reader.readAsText(file)
      reader.onload = (event) => {
        editor.value.setValue(formatDoc(event.target.result))
        ElMessage.success(`文档导入成功`)
      }
    }

    body.appendChild(input)
    input.click()
    body.removeChild(input)
  }

  // 重置样式
  const resetStyleConfirm = () => {
    ElMessageBox.confirm(
      `此操作将丢失本地自定义样式，是否继续？`,
      `提示`,
      {
        confirmButtonText: `确定`,
        cancelButtonText: `取消`,
        type: `warning`,
        center: true,
      },
    )
      .then(() => {
        resetStyle()
        ElMessage({
          type: `success`,
          message: `样式重置成功~`,
        })
      })
      .catch(() => {
        editor.value.focus()
      })
  }

  const isShowCssEditor = ref(false)
  const toggleShowCssEditor = useToggle(isShowCssEditor)

  const isShowInsertFormDialog = ref(false)
  const toggleShowInsertFormDialog = useToggle(isShowInsertFormDialog)

  const isShowUploadImgDialog = ref(false)
  const toggleShowUploadImgDialog = useToggle(isShowUploadImgDialog)

  return {
    isShowCssEditor,
    toggleShowCssEditor,
    isShowInsertFormDialog,
    toggleShowInsertFormDialog,
    isShowUploadImgDialog,
    toggleShowUploadImgDialog,

    isDark,
    toggleDark,

    isEditOnLeft,
    toggleEditOnLeft,

    isMacCodeBlock,
    isCiteStatus,
    citeStatusChanged,

    output,
    editor,
    cssEditor,
    theme,
    fontFamily,
    fontSize,
    fontColor,
    codeBlockTheme,
    legend,

    editorRefresh,

    themeChanged,
    fontChanged,
    sizeChanged,
    colorChanged,
    codeBlockThemeChanged,
    legendChanged,
    macCodeBlockChanged,

    formatContent,
    exportEditorContent2HTML,
    exportEditorContent2MD,

    importMarkdownContent,

    resetStyleConfirm,
    editorContent,
    initEditorContent,

    cssContentConfig,
    addCssContentTab,
    validatorTabName,
    setCssEditorValue,
    tabChanged,
    renameTab,
  }
})

export default createPinia()
