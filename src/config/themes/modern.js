const baseColor = `#3f3f3f`

export default {
  BASE: {
    'text-align': `left`,
    'line-height': `1.75`,
  },
  block: {
    // 一级标题样式
    h1: {
      'font-size': `1.2em`,
      'text-align': `center`,
      'font-weight': `bold`,
      'display': `table`,
      'margin': `2em auto 1em`,
      'padding': `0 1em`,
      'color': `var(--el-text-color-regular)`,
    },

    // 二级标题样式
    h2: {
      'font-size': `1.2em`,
      'text-align': `center`,
      'font-weight': `bold`,
      'display': `table`,
      'margin': `4em auto 2em`,
      'padding': `0 0.2em`,
      'background': `rgba(0, 152, 116, 0.9)`,
      'color': `#fff`,
    },

    // 三级标题样式
    h3: {
      'font-weight': `bold`,
      'font-size': `1.1em`,
      'margin': `2em 8px 0.75em 0`,
      'line-height': `1.2`,
      'padding-left': `8px`,
      'border-left': `3px solid rgba(0, 152, 116, 0.9)`,
      'color': `var(--el-text-color-regular)`,
    },

    // 四级标题样式
    h4: {
      'font-weight': `bold`,
      'font-size': `1em`,
      'margin': `2em 8px 0.5em`,
      'color': `rgba(66, 185, 131, 0.9)`,
    },

    h5: {},

    h6: {},

    // 段落样式
    p: {
      'margin': `1.5em 8px`,
      'letter-spacing': `0.1em`,
      'color': `var(--el-text-color-regular)`,
      'text-align': `justify`,
    },

    // 引用样式
    blockquote: {
      'font-style': `normal`,
      'border-left': `none`,
      'padding': `1em`,
      'border-radius': `8px`,
      'color': `rgba(0,0,0,0.5)`,
      'background': `#f7f7f7`,
      'margin': `2em 8px`,
    },

    blockquote_p: {
      'letter-spacing': `0.1em`,
      'color': `rgb(80, 80, 80)`,
      'font-size': `1em`,
      'display': `block`,
    },
    code_pre: {
      'font-size': `14px`,
      'overflow-x': `auto`,
      'border-radius': `8px`,
      'padding': `1em`,
      'line-height': `1.5`,
      'margin': `10px 8px`,
    },
    code: {
      'margin': 0,
      'white-space': `nowrap`,
      'font-family': `Menlo, Operator Mono, Consolas, Monaco, monospace`,
    },

    image: {
      'border-radius': `4px`,
      'display': `block`,
      'margin': `0.1em auto 0.5em`,
      'width': `100% !important`,
    },

    ol: {
      'margin-left': `0`,
      'padding-left': `1em`,
      'color': `var(--el-text-color-regular)`,
    },

    ul: {
      'margin-left': `0`,
      'padding-left': `1em`,
      'list-style': `circle`,
      'color': `var(--el-text-color-regular)`,
    },

    footnotes: {
      'margin': `0.5em 8px`,
      'font-size': `80%`,
      'color': `var(--el-text-color-regular)`,
    },

    figure: {
      margin: `1.5em 8px`,
      color: `var(--el-text-color-regular)`,
    },
    hr: {
      'border-style': `solid`,
      'border-width': `1px 0 0`,
      'border-color': `rgba(0,0,0,0.1)`,
      '-webkit-transform-origin': `0 0`,
      '-webkit-transform': `scale(1, 0.5)`,
      'transform-origin': `0 0`,
      'transform': `scale(1, 0.5)`,
    },
  },
  inline: {
    listitem: {
      'text-indent': `-1em`,
      'display': `block`,
      'margin': `0.2em 8px`,
      'color': `var(--el-text-color-regular)`,
    },

    codespan: {
      'font-size': `90%`,
      'color': `#d14`,
      'background': `rgba(27,31,35,.05)`,
      'padding': `3px 5px`,
      'border-radius': `4px`,
      // 'word-break': 'break-all',
    },

    link: {
      color: `#576b95`,
    },

    wx_link: {
      'color': `#576b95`,
      'text-decoration': `none`,
    },

    // 字体加粗样式
    strong: {
      'color': `rgba(15, 76, 129, 0.9)`,
      'font-weight': `bold`,
    },

    table: {
      'border-collapse': `collapse`,
      'text-align': `center`,
      'margin': `1em 8px`,
      'color': `var(--el-text-color-regular)`,
    },

    thead: {
      'background': `rgba(0, 0, 0, 0.05)`,
      'font-weight': `bold`,
      'color': `var(--el-text-color-regular)`,
    },

    td: {
      border: `1px solid #dfdfdf`,
      padding: `0.25em 0.5em`,
      color: baseColor,
    },

    footnote: {
      'font-size': `12px`,
      'color': `var(--el-text-color-regular)`,
    },

    figcaption: {
      'text-align': `center`,
      'color': `#888`,
      'font-size': `0.8em`,
    },
  },
  custom(options) {
    console.log(this)
    console.log(options)
    if (options?.fontSize) {
      this.block.h1 = { ...this.block.h1, ...{ 'font-size': `${options.fontSize * 1.8}px` } }
      this.block.h2 = { ...this.block.h2, ...{ 'font-size': `${options.fontSize * 1.6}px` } }
      this.block.h3 = { ...this.block.h3, ...{ 'font-size': `${options.fontSize * 1.5}px` } }
      this.block.h4 = { ...this.block.h4, ...{ 'font-size': `${options.fontSize * 1.4}px` } }
      this.block.h5 = { ...this.block.h5, ...{ 'font-size': `${options.fontSize * 1.3}px` } }
      this.block.h6 = { ...this.block.h6, ...{ 'font-size': `${options.fontSize * 1.2}px` } }
    }
    console.log(`output`, this)
    return this
  },
}