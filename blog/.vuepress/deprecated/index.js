// document.addEventListener("DOMContentLoaded", function(event) {
//   document.body.innerHTML += modalHtml;
//   MicroModal.init();
//   MicroModal.show('modal-1');
// });
const { path } = require('@vuepress/shared-utils');

module.exports = (options, ctx) => ({
  name: 'rc-outdated',
  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceAppFile.js')
  ],
  globalUIComponents: 'Modal'
});
