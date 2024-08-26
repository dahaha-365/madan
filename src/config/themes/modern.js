import { svg2png } from 'svg-png-converter'
import color from 'color'
import { useStore } from '@/stores'

const h1BorderImageSrc = `<svg width="34" height="34" xmlns="http://www.w3.org/2000/svg" t="1724511602865" class="icon" version="1.1" p-id="1413">
 <g id="Layer_1">
  <title>Layer 1</title>
  <g id="svg_3">
   <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_1" y2="8.5" x2="17" y1="8.5" x1="0" stroke="#000" fill="none"/>
   <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_2" y2="17" x2="8.5" y1="0" x1="8.5" stroke="#000" fill="none"/>
  </g>
  <g id="svg_6">
   <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_4" y2="25.5" x2="34" y1="25.5" x1="17" stroke="#000" fill="none"/>
   <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_5" y2="34" x2="25.5" y1="17" x1="25.5" stroke="#000" fill="none"/>
  </g>
 </g>

</svg>`

const quoteImageSrc = `<svg width="47.99999999999999" height="47.99999999999999" xmlns="http://www.w3.org/2000/svg" version="1.1">

 <g>
  <title>Layer 1</title>
  <g id="surface1">
   <path id="svg_1" fill="#000" fill-rule="nonzero" d="m13.52344,13.00391c0,-7.66407 6.38672,-12.1875 10.47656,-13.00391l0,4.52344c-2.23437,0.6914 -4.91797,4.21094 -5.04687,8.04297l5.04687,0l0,4.76562c0,3.6836 -2.98437,6.66797 -6.66797,6.66797l-3.80859,0l0,-10.99609zm-13.52344,0c0,-7.66407 6.38672,-12.1875 10.47656,-13.00391l0,4.52344c-2.23437,0.6914 -4.91797,4.21094 -5.04687,8.04297l4.98437,0l0,4.76562c0,3.6836 -2.98437,6.66797 -6.66797,6.66797l-3.74609,0l0,-10.99609zm0,0"/>
  </g>
  <g transform="rotate(180 36 36)" id="svg_3">
   <path id="svg_2" fill="#000" fill-rule="nonzero" d="m37.52344,37.00391c0,-7.66407 6.38673,-12.1875 10.47656,-13.00391l0,4.52344c-2.23437,0.6914 -4.91797,4.21094 -5.04687,8.04297l5.04687,0l0,4.76562c0,3.6836 -2.98437,6.66797 -6.66797,6.66797l-3.80859,0l0,-10.99609zm-13.52344,0c0,-7.66407 6.38672,-12.1875 10.47656,-13.00391l0,4.52344c-2.23437,0.6914 -4.91797,4.21094 -5.04687,8.04297l4.98437,0l0,4.76562c0,3.6836 -2.98437,6.66797 -6.66797,6.66797l-3.74609,0l0,-10.99609zm0,0"/>
  </g>
 </g>
</svg>`

const h1BorderImage = await svg2png({
  input: h1BorderImageSrc.trim(),
  encoding: `dataURL`,
  format: `png`,
  width: 34,
  height: 34,
  multiplier: 1,
  quality: 1,
})

const quoteImage = await svg2png({
  input: quoteImageSrc.trim(),
  encoding: `dataURL`,
  format: `png`,
  width: 48,
  height: 48,
  multiplier: 1,
  quality: 1,
})

const baseColor = `#3f3f3f`

export default {
  BASE: {
    'text-align': `left`,
    'line-height': `1.75`,
  },
  block: {
    // 一级标题样式
    h1: {
      'text-align': `center`,
      'font-weight': `bold`,
      'display': `table`,
      'margin': `2em auto`,
      'padding': `.3em 1em`,
      'color': `var(--el-text-color-regular)`,
      'border-image-slice': `9 9 9 9`,
      'border-image-width': `9px 9px 9px 9px`,
      'border-image-outset': `0px 0px 0px 0px`,
      'border-image-repeat': `stretch stretch`,
      'border-image-source': `url(${h1BorderImage})`,
      'border-style': `solid`,
    },

    // 二级标题样式
    h2: {
      'text-align': `center`,
      'font-weight': `bold`,
      'display': `table`,
      'margin': `1em auto`,
      'padding': `.3em 1em`,
      'color': `var(--el-text-color-regular)`,
      'border-image-slice': `17 17 17 17`,
      'border-image-width': `17px 17px 17px 17px`,
      'border-image-outset': `0px 0px 0px 0px`,
      'border-image-repeat': `stretch stretch`,
      'border-image-source': `url(${h1BorderImage})`,
      'border-style': `solid`,
    },

    // 三级标题样式
    h3: {
      'font-weight': `bold`,
      'display': `table`,
      'margin': `.7em auto`,
      'padding': `.2em 1em`,
      'color': `var(--el-text-color-regular)`,
      'border-image-slice': `9 8 9 8`,
      'border-image-width': `9px 9px 9px 9px`,
      'border-image-outset': `0px 0px 0px 0px`,
      'border-image-repeat': `stretch stretch`,
      'border-image-source': `url(${h1BorderImage})`,
      'border-style': `solid`,
    },

    // 四级标题样式
    h4: {
      'font-weight': `bold`,
      'display': `table`,
      'margin': `.5em auto`,
      'padding': `.1em 1em`,
      'color': `var(--el-text-color-regular)`,
      'border-image-slice': `8 8 8 8`,
      'border-image-width': `7px 7px 7px 7px`,
      'border-image-outset': `0px 0px 0px 0px`,
      'border-image-repeat': `stretch stretch`,
      'border-image-source': `url(${h1BorderImage})`,
      'border-style': `solid`,
    },

    h5: {
      'font-weight': `bold`,
      'margin': `.4em auto`,
      'color': `var(--el-text-color-regular)`,
    },

    h6: {
      'margin': `.3em auto`,
      'color': `var(--el-text-color-regular)`,
    },

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
      // 'color': `#a0a0a0`,
      // 'mix-blend-mode': `darken`,
      'color': `var(--el-text-color-regular)`,
      'background': `#f7f7f7`,
      'margin': `2em 8px`,
      'border-image-slice': `24 24 24 24`,
      'border-image-width': `24px 24px 24px 24px`,
      'border-image-outset': `12px 12px 12px 12px`,
      'border-image-repeat': `stretch stretch`,
      'border-image-source': `url(${quoteImage})`,
    },

    blockquote_p: {
      'letter-spacing': `0.1em`,
      // 'color': `rgb(80, 80, 80)`,
      'color': `var(--el-text-color-regular)`,
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
      'margin': `1.2em auto`,
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
      'color': `var(--el-text-color-regular)`,
      'background': `#e0e0e0`,
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

    th: {
      border: `1px solid #dfdfdf`,
      padding: `0.25em 0.5em`,
      color: `var(--el-text-color-regular)`,
    },

    td: {
      border: `1px solid #dfdfdf`,
      padding: `0.25em 0.5em`,
      color: `var(--el-text-color-regular)`,
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
    const stander = color(options?.color).rgb()
    const lighten1 = color(options?.color).lighten(1).rgb()
    const alpha5 = color(options?.color).alpha(.5).rgb()
    const alpha2 = color(options?.color).alpha(.2).rgb()
    const alpha1 = color(options?.color).alpha(.1).rgb()
    const h1BorderImage = svg2png({
      input: h1BorderImageSrc.trim().replaceAll(`#000`, `${stander.hex()}`),
      encoding: `dataURL`,
      format: `png`,
      width: 34,
      height: 34,
      multiplier: 1,
      quality: 1,
    })
    const quoteImage = svg2png({
      input: quoteImageSrc.trim().replaceAll(`#000`, `${alpha1.hex()}`),
      encoding: `dataURL`,
      format: `png`,
      width: 48,
      height: 48,
      multiplier: 1,
      quality: 1,
    })
    Promise.all([h1BorderImage, quoteImage]).then(([h1BorderImage, quoteImage]) => {
      const store = useStore()
      const {
        editorRefresh,
      } = store

      if (options?.fontSize) {
        this.block.h1 = { ...this.block.h1, ...{ 'font-size': `${options.fontSize * 1.8}px` } }
        this.block.h2 = { ...this.block.h2, ...{ 'font-size': `${options.fontSize * 1.6}px` } }
        this.block.h3 = { ...this.block.h3, ...{ 'font-size': `${options.fontSize * 1.5}px` } }
        this.block.h4 = { ...this.block.h4, ...{ 'font-size': `${options.fontSize * 1.4}px` } }
        this.block.h5 = { ...this.block.h5, ...{ 'font-size': `${options.fontSize * 1.3}px` } }
        this.block.h6 = { ...this.block.h6, ...{ 'font-size': `${options.fontSize * 1.2}px` } }
      }
      if (options?.color) {
        this.block.h1 = { ...this.block.h1, ...{ 'border-image-source': `url(${h1BorderImage})` } }
        this.block.h2 = { ...this.block.h2, ...{ 'border-image-source': `url(${h1BorderImage})` } }
        this.block.h3 = { ...this.block.h3, ...{ 'border-image-source': `url(${h1BorderImage})` } }
        this.block.h4 = { ...this.block.h4, ...{ 'border-image-source': `url(${h1BorderImage})` } }
        this.block.h5 = { ...this.block.h5, ...{ 'color': `${stander}` } }
        this.block.h6 = { ...this.block.h6, ...{ 'color': `${stander}` } }
        this.block.hr = { ...this.block.hr, ...{ 'border-color': `${alpha5}` } }
        this.block.blockquote = { ...this.block.blockquote, ...{ 'background': `${alpha1}`, 'border-image-source': `url(${quoteImage})` } }
        this.block.code_pre = { ...this.block.code_pre, ...{ 'background': `${alpha1}` } }
        this.block.code = { ...this.block.code, ...{ 'background': `${alpha1}` } }

        this.inline.strong = { ...this.inline.strong, ...{ 'color': `${stander}` } }
        this.inline.thead = { ...this.inline.thead, ...{ 'background': `${alpha1}` } }
        this.inline.td = { ...this.inline.td, ...{ 'border-color': `${lighten1}` } }
        this.inline.codespan = { ...this.inline.codespan, ...{ 'background': `${alpha2}` } }
      }
      editorRefresh()
    })
    return this
  },
}
