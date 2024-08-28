export function scanThemes() {
  if (import.meta.env.SSR) {
    const fs = require(`fs`)
    const dirs = fs.readdirSync(`@/themes`)
    console.log(dirs)
  }
  else {
    console.log(`Here is browser.`)
  }
}
