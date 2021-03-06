var blessed = require('blessed'),
    config = require('../config'),
    styles  = require('./style/editor')(config);

var layout   = null,
    textarea = null,
    menubar  = null;

var init = function (screen) {
  styles.layout.parent = screen;

  layout = blessed.layout(styles.layout);

  styles.textarea.parent = layout;
  styles.menubar.parent  = layout;

  textarea = blessed.textarea(styles.textarea);
  menubar  = blessed.listbar(styles.menubar);

  return {
    layout  : layout,
    textarea: textarea,
    menubar : menubar
  };
};

module.exports = init;
