import type { IConfigOption } from '@/types'

export const fontFamilyOptions: IConfigOption[] = [
  {
    label: `无衬线`,
    value: `-apple-system-font,BlinkMacSystemFont, Helvetica Neue, PingFang SC, Hiragino Sans GB , Microsoft YaHei UI , Microsoft YaHei ,Arial,sans-serif`,
    desc: `字体123Abc`,
  },
  {
    label: `衬线`,
    value: `Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif`,
    desc: `字体123Abc`,
  },
  {
    label: `等宽`,
    value: `Menlo, Monaco, 'Courier New', monospace`,
    desc: `字体123Abc`,
  },
]

export const fontSizeOptions: IConfigOption[] = [
  {
    label: `12px`,
    value: `12px`,
    desc: `更小`,
  },
  {
    label: `13px`,
    value: `13px`,
    desc: `稍小`,
  },
  {
    label: `14px`,
    value: `14px`,
    desc: `推荐`,
  },
  {
    label: `15px`,
    value: `15px`,
    desc: `稍大`,
  },
  {
    label: `16px`,
    value: `16px`,
    desc: `更大`,
  },
]

export const colorOptions: IConfigOption[] = [
  {
    label: `经典蓝`,
    value: `rgba(15, 76, 129, 1)`,
    desc: `最新流行`,
  },
  {
    label: `翡翠绿`,
    value: `rgba(0, 152, 116, 1)`,
    desc: `优雅清新`,
  },
  {
    label: `活力橘`,
    value: `rgba(250, 81, 81, 1)`,
    desc: `热情活泼`,
  },
  {
    label: `微信绿`,
    value: `rgb(26, 173, 25, 1)`,
    desc: `经典微信绿`,
  },
  {
    label: `达瓦黑`,
    value: `rgb(0, 0, 0, 1)`,
    desc: `达瓦品牌色`,
  },
  {
    label: `禧玛诺蓝`,
    value: `rgb(0, 160, 233, 1)`,
    desc: `禧玛诺品牌色`,
  },
  {
    label: `阿布红`,
    value: `rgb(223, 50, 50, 1)`,
    desc: `Abu品牌色`,
  },
  {
    label: `EG金`,
    value: `rgb(224, 175, 117, 1)`,
    desc: `EveryGreen`,
  },
  {
    label: `Saltiga蓝`,
    value: `rgb(1, 33, 68, 1)`,
    desc: `Saltiga`,
  },
  {
    label: `镜牙紫`,
    value: `rgb(123, 58, 144, 1)`,
    desc: `镜牙kyohga`,
  },
  {
    label: `红牙粉`,
    value: `rgb(220, 0, 124, 1)`,
    desc: `红牙kohga`,
  },
  {
    label: `EME绿`,
    value: `rgb(46, 154, 165, 1)`,
    desc: `祖母绿`,
  },
  {
    label: `Megabass红`,
    value: `rgb(230, 0, 18, 1)`,
    desc: `Megabass`,
  },
]

const codeBlockUrlPrefix = `https://cdn.bootcdn.net/ajax/libs/highlight.js/11.10.0/styles/`
const codeBlockThemeList = [
  `1c-light.min.css`,
  `a11y-dark.min.css`,
  `a11y-light.min.css`,
  `agate.min.css`,
  `an-old-hope.min.css`,
  `androidstudio.min.css`,
  `arduino-light.min.css`,
  `arta.min.css`,
  `ascetic.min.css`,
  `atom-one-dark-reasonable.min.css`,
  `atom-one-dark.min.css`,
  `atom-one-light.min.css`,
  `brown-paper.min.css`,
  `codepen-embed.min.css`,
  `color-brewer.min.css`,
  `dark.min.css`,
  `default.min.css`,
  `devibeans.min.css`,
  `docco.min.css`,
  `far.min.css`,
  `felipec.min.css`,
  `foundation.min.css`,
  `github-dark-dimmed.min.css`,
  `github-dark.min.css`,
  `github.min.css`,
  `gml.min.css`,
  `googlecode.min.css`,
  `gradient-dark.min.css`,
  `gradient-light.min.css`,
  `grayscale.min.css`,
  `hybrid.min.css`,
  `idea.min.css`,
  `intellij-light.min.css`,
  `ir-black.min.css`,
  `isbl-editor-dark.min.css`,
  `isbl-editor-light.min.css`,
  `kimbie-dark.min.css`,
  `kimbie-light.min.css`,
  `lightfair.min.css`,
  `lioshi.min.css`,
  `magula.min.css`,
  `mono-blue.min.css`,
  `monokai-sublime.min.css`,
  `monokai.min.css`,
  `night-owl.min.css`,
  `nnfx-dark.min.css`,
  `nnfx-light.min.css`,
  `nord.min.css`,
  `obsidian.min.css`,
  `panda-syntax-dark.min.css`,
  `panda-syntax-light.min.css`,
  `paraiso-dark.min.css`,
  `paraiso-light.min.css`,
  `pojoaque.min.css`,
  `purebasic.min.css`,
  `qtcreator-dark.min.css`,
  `qtcreator-light.min.css`,
  `rainbow.min.css`,
  `routeros.min.css`,
  `school-book.min.css`,
  `shades-of-purple.min.css`,
  `srcery.min.css`,
  `stackoverflow-dark.min.css`,
  `stackoverflow-light.min.css`,
  `sunburst.min.css`,
  `tokyo-night-dark.min.css`,
  `tokyo-night-light.min.css`,
  `tomorrow-night-blue.min.css`,
  `tomorrow-night-bright.min.css`,
  `vs.min.css`,
  `vs2015.min.css`,
  `xcode.min.css`,
  `xt256.min.css`,
].sort()

export const codeBlockThemeOptions: IConfigOption[] = codeBlockThemeList.map((codeBlockTheme) => {
  const label = codeBlockTheme.replace(`.min.css`, ``)
  const value = `${codeBlockUrlPrefix}${codeBlockTheme}`
  return {
    label,
    value,
    desc: ``,
  }
})

export const legendOptions = [
  {
    label: `title 优先`,
    value: `title-alt`,
    desc: ``,
  },
  {
    label: `alt 优先`,
    value: `alt-title`,
    desc: ``,
  },
  {
    label: `只显示 title`,
    value: `title`,
    desc: ``,
  },
  {
    label: `只显示 alt`,
    value: `alt`,
    desc: ``,
  },
  {
    label: `不显示`,
    value: `none`,
    desc: ``,
  },
]
