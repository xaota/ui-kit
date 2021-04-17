(function() {
  const json = {
    imports: {
      '@xaota/ui': '/@xaota/ui/index.js',
      '@xaota/ui/': '/@xaota/ui/components/',

      '@xaota/web': '/@xaota/web/index.js',
      '@xaota/web/': '/@xaota/web/components/',

      'javascript-std-lib': '/javascript-std-lib/index.js',
      'javascript-std-lib/': '/javascript-std-lib/library/',

      'javascript-algebra': '/javascript-algebra/index.js',
      'javascript-algebra/': '/javascript-algebra/library/',

      'javascript-color': '/javascript-color/index.js',
      'javascript-color/': '/javascript-color/library/',

      'javascript-canvas': '/javascript-canvas/index.js',
      'javascript-canvas/': '/javascript-canvas/library/',

      'javascript-markdown': '/javascript-markdown/index.js'
    }
  }

  const importmap = document.createElement('script');
  importmap.type = 'importmap';
  importmap.textContent = JSON.stringify(json);
  document.currentScript.after(importmap);
})();
