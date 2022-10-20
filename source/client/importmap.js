(function() {
  const json = {
    imports: {
      '@xaota/ui': '/@xaota/ui/index.js',
      '@xaota/ui/': '/@xaota/ui/components/',

      '@xaota/web': '/@xaota/web/index.js',
      '@xaota/web/': '/@xaota/web/components/',

      'javascript-std-lib'  : '/javascript-std-lib/index.js',
      'javascript-std-lib/' : '/javascript-std-lib/',
      'javascript-algebra'  : '/javascript-algebra/index.js',
      'javascript-algebra/' : '/javascript-algebra/',
      'javascript-toolbox'  : '/javascript-toolbox/index.js',
      'javascript-toolbox/' : '/javascript-toolbox/',
      'javascript-color'    : '/javascript-color/index.js',
      'javascript-color/'   : '/javascript-color/',
      'javascript-canvas'   : '/javascript-canvas/index.js',
      'javascript-canvas/'  : '/javascript-canvas/',
      'javascript-markdown' : '/javascript-markdown/index.js',
      'javascript-markdown/': '/javascript-markdown/',

      'javascript-event-channel': '/javascript-event-channel/library/Browser.js'
    }
  }

  const importmap = document.createElement('script');
  importmap.type = 'importmap';
  importmap.textContent = JSON.stringify(json);
  document.currentScript.after(importmap);
})();
