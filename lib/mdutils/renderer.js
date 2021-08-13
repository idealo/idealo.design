var Renderer        = require('markdown-it/lib/renderer');

var assign          = require('markdown-it/lib/common/utils').assign;
var unescapeAll     = require('markdown-it/lib/common/utils').unescapeAll;
var escapeHtml      = require('markdown-it/lib/common/utils').escapeHtml;

const renderer = new Renderer();


// This is a custom code generator taking care for exporting code sections in a more
// processable way while gracefully falling back to <code> digestible by any browser

renderer.rules.fence = function (tokens, idx, options, env, slf) {
  var token = tokens[idx],
      info = token.info ? unescapeAll(token.info).trim() : '',
      langName = '',
      highlighted, i, tmpAttrs, tmpToken;

  if (info) {
    langName = info.split(/\s+/g)[0];
  }

  if (options.highlight) {
    highlighted = options.highlight(token.content, langName) || escapeHtml(token.content);
  } else {
    highlighted = escapeHtml(token.content);
  }

  if (highlighted.indexOf('<pre') === 0) {
    return highlighted + '\n';
  }

  // If language exists, inject class gently, without modifying original token.
  // May be, one day we will add .clone() for token and simplify this part, but
  // now we prefer to keep things local.
  if (info) {
    i        = token.attrIndex('class');
    tmpAttrs = token.attrs ? token.attrs.slice() : [];

    if (i < 0) {
      tmpAttrs.push([ 'class', options.langPrefix + langName ]);
    } else {
      tmpAttrs[i][1] += ' ' + options.langPrefix + langName;
    }

    // Fake token just to render attributes
    tmpToken = {
      attrs: tmpAttrs
    };

      // return  `<code lang="${langName}">` + highlighted + '</code>\n';
      return  highlighted;
  }


  // return  `<code lang="${langName}">` + highlighted + '</code>\n';
    return  highlighted;
};

module.exports = renderer;
