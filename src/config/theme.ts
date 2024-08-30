import defaultTheme from './themes/default.ts'
import graceTheme from './themes/grace.ts'
import modernTheme from './themes/modern.ts'

interface Theme {
  BASE: Record<string, string | number>
  block: Record<string, Record<string, string | number>>
  inline: Record<string, Record<string, string | number>>
  custom?: (Record<string, string | number>)
}

// eslint-disable-next-line unused-imports/no-unused-vars
const baseColor = `#3f3f3f`
// eslint-disable-next-line unused-imports/no-unused-vars
const baseBorderColor = `rgba(215, 16, 166, 0.8)`

// eslint-disable-next-line unused-imports/no-unused-vars
function mergeTheme(defaultTheme: Theme, newTheme: Theme) {
  const res: Theme = {
    BASE: {
      ...defaultTheme.BASE,
      ...newTheme.BASE,
    },
    block: {},
    inline: {},
  }
  for (const el in defaultTheme.block) {
    res.block[el] = {
      ...defaultTheme.block[el],
      ...newTheme.block[el],
    }
  }
  for (const el in defaultTheme.inline) {
    res.inline[el] = {
      ...defaultTheme.inline[el],
      ...newTheme.inline[el],
    }
  }
  return res
}

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
    desc: ``,
  },
]

export const themeMap = {
  default: defaultTheme,
  grace: graceTheme,
  modern: modernTheme,
}
