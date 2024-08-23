import defaultStyle from './themes/default.js'
import graceStyle from './themes/grace.js'
import modernStyle from './themes/modern.js'
import colorSets from './colors.js'

export const prefix = `MD`

export const fontFamilyOptions = [
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

export const fontSizeOptions = [
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

export const colorOptions = colorSets

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
]

export const codeBlockThemeOptions = [
  ...codeBlockThemeList.map((codeBlockTheme) => {
    const url = `${codeBlockUrlPrefix}${codeBlockTheme}`
    const label = codeBlockTheme.replace(`.min.css`, ``)
    return {
      label,
      value: url,
    }
  }),
]

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

export const githubConfig = {
  username: `filess`,
  repoList: Array.from(
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    e => `img${e}`,
  ),
  branch: `main`,
  accessTokenList: [
    `7715d7ca67b5d3837cfdoocsmde8c38421815aa423510af`,
    `c411415bf95dbe39625doocsmd5047ba9b7a2a6c9642abe`,
    `2821cd8819fa345c053doocsmdca86ac653f8bc20db1f1b`,
    `445f0dae46ef1f2a4d6doocsmdc797301e94797b4750a4c`,
    `cc1d0c1426d0fd0902bdoocsmdd2d7184b14da61b86ec46`,
    `b67e9d15cb6f910492fdoocsmdac6b44d379c953bb19eff`,
    `618c4dc2244ccbbc088doocsmd125d17fd31b7d06a50cf3`,
    `a4b581732e1c1507458doocsmdc5b223b27dae5e2e16a55`,
    `77904db41aee57ad79bdoocsmd760f848201dac9c96fd5e`,
    `02f251cb14ac62ab100doocsmdddbfc8527d773f1f04ce1`,
    `eb321079a95ba7028d9doocsmde2e84c502dac70de7cf08`,
    `22f74fcfb071a961fa2doocsmde28dabc746f0503a15e5d`,
    `85124c2bfe7abba0938doocsmd0af7f67918b99d085a5fd`,
    `0a561b4d4bbecb2de7edoocsmdd9ba3833d11dbc5e430f5`,
    `e8a01491188d8d5a097doocsmd03ede0aad1fe9e3af24e9`,
    `36e1f420d7e5bdebd67doocsmd65463562f5f25b20b8377`,
  ],
}

export const giteeConfig = {
  username: `filesss`,
  repoList: Array.from(
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    e => `img${e}`,
  ),
  branch: `main`,
  accessTokenList: [
    `ed5fc9866bd6c2fdoocsmddd433f806fd2f399c`,
    `5448ffebbbf1151doocsmdc4e337cf814fc8a62`,
    `25b05efd2557ca2doocsmd75b5c0835e3395911`,
    `11628c7a5aef015doocsmd2eeff9fb9566f0458`,
    `cb2f5145ed938dedoocsmdbd063b4ed244eecf8`,
    `d8c0b57500672c1doocsmd55f48b866b5ebcd98`,
    `78c56eadb88e453doocsmd43ddd95753351771a`,
    `03e1a688003948fdoocsmda16fcf41e6f03f1f0`,
    `c49121cf4d191fbdoocsmdd6a7877ed537e474a`,
    `adfeb2fadcdc4aadoocsmdfe1ee869ac9c968ff`,
    `116c94549ca4a0ddoocsmd192653af5c0694616`,
    `ecf30ed7f2eb184doocsmd51ea4ec8300371d9e`,
    `5837cf2bd5afd93doocsmd73904bed31934949e`,
    `b5b7e1c7d57e01fdoocsmd5266f552574297d78`,
    `684d55564ffbd0bdoocsmd7d747e5cc23aed6d6`,
    `3fc04a9d272ab71doocsmd010c56cb57d88d2ba`,
  ],
}

export const defaultTheme = defaultStyle

export const graceTheme = graceStyle

export const modernTheme = modernStyle

export const themeOptions = [
  {
    label: `经典`,
    value: `default`,
    desc: ``,
  },
  {
    label: `优雅`,
    value: `grace`,
    desc: ``,
  },
  {
    label: `现代`,
    value: `modern`,
    desc: `自定义的主题`,
  },
]

export const themeMap = {
  default: defaultTheme,
  grace: graceTheme,
  modern: modernTheme,
}
