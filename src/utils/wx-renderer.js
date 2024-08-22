import { Renderer, marked } from 'marked'
import hljs from 'highlight.js'
import markedKatex from 'marked-katex-extension'

marked.use(markedKatex({
  throwOnError: false,
  output: `html`,
  nonStandard: true,
}))

/*
const descriptionList = {
  name: 'descriptionList',
  level: 'block',                                     // Is this a block-level or inline-level tokenizer?
  start(src) { return src.match(/:[^:\n]/)?.index; }, // Hint to Marked.js to stop and check for a match
  tokenizer(src, tokens) {
    const rule = /^(?::[^:\n]+:[^:\n]*(?:\n|$))+/;    // Regex for the complete token, anchor to string start
    const match = rule.exec(src);
    if (match) {
      const token = {                                 // Token to generate
        type: 'descriptionList',                      // Should match "name" above
        raw: match[0],                                // Text to consume from the source
        text: match[0].trim(),                        // Additional custom properties
        tokens: []                                    // Array where child inline tokens will be generated
      };
      this.lexer.inline(token.text, token.tokens);    // Queue this data to be processed for inline tokens
      return token;
    }
  },
  renderer(token) {
    return `<dl>${this.parser.parseInline(token.tokens)}\n</dl>`; // parseInline to turn child tokens into HTML
  }
};

const description = {
  name: 'description',
  level: 'inline',                                 // Is this a block-level or inline-level tokenizer?
  start(src) { return src.match(/:/)?.index; },    // Hint to Marked.js to stop and check for a match
  tokenizer(src, tokens) {
    const rule = /^:([^:\n]+):([^:\n]*)(?:\n|$)/;  // Regex for the complete token, anchor to string start
    const match = rule.exec(src);
    if (match) {
      return {                                         // Token to generate
        type: 'description',                           // Should match "name" above
        raw: match[0],                                 // Text to consume from the source
        dt: this.lexer.inlineTokens(match[1].trim()),  // Additional custom properties, including
        dd: this.lexer.inlineTokens(match[2].trim())   //   any further-nested inline tokens
      };
    }
  },
  renderer(token) {
    return `\n<dt>${this.parser.parseInline(token.dt)}</dt><dd>${this.parser.parseInline(token.dd)}</dd>`;
  },
  childTokens: ['dt', 'dd'],                 // Any child tokens to be visited by walkTokens
};

function walkTokens(token) {                        // Post-processing on the completed token tree
  if (token.type === 'strong') {
    token.text += ' walked';
    token.tokens = this.Lexer.lexInline(token.text)
  }
}
*/
// marked.use({ extensions: [descriptionList, description], walkTokens });

console.log(marked.parse(`A Description List:\n`
+ `:   Topic 1   :  Description 1\n`
+ `: **Topic 2** : *Description 2*`))

class WxRenderer {
  constructor(opts) {
    this.opts = opts
    let footnotes = []
    let footnoteIndex = 0
    let styleMapping = new Map()

    const merge = (base, extend) => Object.assign({}, base, extend)

    this.buildTheme = (themeTpl) => {
      const mapping = {}
      const base = merge(themeTpl.BASE, {
        'font-family': this.opts.fonts,
        'font-size': this.opts.size,
      })
      for (const ele in themeTpl.inline) {
        if (Object.prototype.hasOwnProperty.call(themeTpl.inline, ele)) {
          const style = themeTpl.inline[ele]
          mapping[ele] = merge(themeTpl.BASE, style)
        }
      }

      const base_block = merge(base, {})
      for (const ele in themeTpl.block) {
        if (Object.prototype.hasOwnProperty.call(themeTpl.block, ele)) {
          const style = themeTpl.block[ele]
          mapping[ele] = merge(base_block, style)
        }
      }
      return mapping
    }

    const getStyles = (tokenName, addition) => {
      const arr = []
      const dict = styleMapping[tokenName]
      if (!dict)
        return ``
      for (const key in dict) {
        arr.push(`${key}:${dict[key]}`)
      }
      return `style="${arr.join(`;`) + (addition || ``)}"`
    }

    const addFootnote = (title, link) => {
      footnotes.push([++footnoteIndex, title, link])
      return footnoteIndex
    }

    this.buildFootnotes = () => {
      const footnoteArray = footnotes.map((x) => {
        if (x[1] === x[2]) {
          return `<code style="font-size: 90%; opacity: 0.6;">[${x[0]}]</code>: <i>${x[1]}</i><br/>`
        }
        return `<code style="font-size: 90%; opacity: 0.6;">[${x[0]}]</code> ${x[1]}: <i>${x[2]}</i><br/>`
      })
      if (!footnoteArray.length) {
        return ``
      }
      return `<h4 ${getStyles(`h4`)}>引用链接</h4><p ${getStyles(
        `footnotes`,
      )}>${footnoteArray.join(`\n`)}</p>`
    }

    this.buildAddition = () => {
      return `
            <style>
            .preview-wrapper pre::before {
                position: absolute;
                top: 0;
                right: 0;
                color: #ccc;
                text-align: center;
                font-size: 0.8em;
                padding: 5px 10px 0;
                line-height: 15px;
                height: 15px;
                font-weight: 600;
            }
            </style>
        `
    }

    this.setOptions = (newOpts) => {
      this.opts = merge(this.opts, newOpts)
    }

    this.hasFootnotes = () => footnotes.length !== 0

    this.getRenderer = (status) => {
      footnotes = []
      footnoteIndex = 0

      styleMapping = this.buildTheme(this.opts.theme)
      const renderer = new Renderer()

      renderer.heading = (text, level) => {
        switch (level) {
          case 1:
            return `<h1 ${getStyles(`h1`)}>${text}</h1>`
          case 2:
            return `<h2 ${getStyles(`h2`)}>${text}</h2>`
          case 3:
            return `<h3 ${getStyles(`h3`)}>${text}</h3>`
          default:
            return `<h4 ${getStyles(`h4`)}>${text}</h4>`
        }
      }
      renderer.paragraph = (text) => {
        if (text.includes(`<figure`) && text.includes(`<img`)) {
          return text
        }
        return text.replace(/ /g, ``) === ``
          ? ``
          : `<p ${getStyles(`p`)}>${text}</p>`
      }

      renderer.blockquote = (text) => {
        text = text.replace(/<p.*?>/g, `<p ${getStyles(`blockquote_p`)}>`)
        return `<blockquote ${getStyles(`blockquote`)}>${text}</blockquote>`
      }
      renderer.code = (text, lang = ``) => {
        if (lang.startsWith(`mermaid`)) {
          setTimeout(() => {
            window.mermaid?.run()
          }, 0)
          return `<center><pre class="mermaid">${text}</pre></center>`
        }
        lang = lang.split(` `)[0]
        lang = hljs.getLanguage(lang) ? lang : `plaintext`
        text = hljs.highlight(text, { language: lang }).value
        text = text
          .replace(/\r\n/g, `<br/>`)
          .replace(/\n/g, `<br/>`)
          .replace(/(>[^<]+)|(^[^<]+)/g, (str) => {
            return str.replace(/\s/g, `&nbsp;`)
          })

        return `<pre class="hljs code__pre" ${getStyles(
          `code_pre`,
        )}><code class="language-${lang}" ${getStyles(
          `code`,
        )}>${text}</code></pre>`
      }
      renderer.codespan = (text, _) =>
        `<code ${getStyles(`codespan`)}>${text}</code>`
      renderer.listitem = text =>
        `<li ${getStyles(`listitem`)}><span><%s/></span>${text}</li>`

      renderer.list = (text, ordered, _) => {
        text = text.replace(/<\/*p .*?>/g, ``).replace(/<\/*p>/g, ``)
        const segments = text.split(`<%s/>`)
        if (!ordered) {
          text = segments.join(`• `)
          return `<ul ${getStyles(`ul`)}>${text}</ul>`
        }
        text = segments[0]
        for (let i = 1; i < segments.length; i++) {
          text = `${text + i}. ${segments[i]}`
        }
        return `<ol ${getStyles(`ol`)}>${text}</ol>`
      }
      renderer.image = (href, title, text) => {
        const createSubText = (s) => {
          if (!s) {
            return ``
          }

          return `<figcaption ${getStyles(`figcaption`)}>${s}</figcaption>`
        }
        const transform = (title, alt) => {
          const legend = localStorage.getItem(`legend`)
          switch (legend) {
            case `alt`:
              return alt
            case `title`:
              return title
            case `alt-title`:
              return alt || title
            case `title-alt`:
              return title || alt
            default:
              return ``
          }
        }
        const subText = createSubText(transform(title, text))
        const figureStyles = getStyles(`figure`)
        const imgStyles = getStyles(`image`)
        return `<figure ${figureStyles}><img ${imgStyles} src="${href}" title="${title}" alt="${text}"/>${subText}</figure>`
      }
      renderer.link = (href, title, text) => {
        if (href.startsWith(`https://mp.weixin.qq.com`)) {
          return `<a href="${href}" title="${title || text}" ${getStyles(
            `wx_link`,
          )}>${text}</a>`
        }
        if (href === text) {
          return text
        }
        if (status) {
          const ref = addFootnote(title || text, href)
          return `<span ${getStyles(`link`)}>${text}<sup>[${ref}]</sup></span>`
        }
        return `<span ${getStyles(`link`)}>${text}</span>`
      }
      renderer.strong = text =>
        `<strong ${getStyles(`strong`)}>${text}</strong>`
      renderer.em = text =>
        `<span style="font-style: italic;">${text}</span>`
      renderer.table = (header, body) =>
        `<section style="padding:0 8px;"><table class="preview-table"><thead ${getStyles(
          `thead`,
        )}>${header}</thead><tbody>${body}</tbody></table></section>`
      renderer.tablecell = (text, _) =>
        `<td ${getStyles(`td`)}>${text}</td>`
      renderer.hr = () => `<hr ${getStyles(`hr`)}>`
      return renderer
    }
  }
}

export default WxRenderer
