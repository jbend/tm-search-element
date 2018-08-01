const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/tm-search-element/runtime.js',
    './dist/tm-search-element/polyfills.js',
    './dist/tm-search-element/scripts.js',
    './dist/tm-search-element/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/tm-search-element.js');
  await fs.copyFile(
    './dist/tm-search-element/styles.css',
    'elements/styles.css'
  );
})();
