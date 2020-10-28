module.exports = (options, ctx) => ({
  name: 'vuepress-plugin-meting',
  extendMarkdown: md => {
    md.use(require('markdown-it-container'), 'meting', {
      validate: function(params) {
        return params.trim().match(/^meting\s+(.*)$/);
      },
      render: function (tokens, idx) {
        var m = tokens[idx].info.trim().match(/^meting\s+(.*)$/);
        if (tokens[idx].nesting === 1) {
          // opening tag
          return '<meting-js auto="' + md.utils.escapeHtml(m[1]) + '">';
        } else {
          return '</meting-js>\n';
        }
      }
    });
  },
});
