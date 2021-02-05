import Component, {html, css, $$} from '@xaota/ui';
import UICopyIcon from '@xaota/ui/copy-icon.js';

import UIMarkdown from './markdown.js';
import UIHTML     from './html.js';

import '../script/ui.js';
import '../script/web.js';

const style = css`
  :host {
    display: block;
    font-family: var(--font);
    padding: 0 1em;
  }
  slot {
    display: block;
  }
  ui-copy-icon {
    position: relative;
    bottom: 3.5em;
    right: 1.5em;
    float: right;
  }`;

const attributes = {
  href(root, value) { load(root, value) }
}
const properties = {}

/** {UIPage} @class
  * @description Отображение блока простого текста
  */
  export default class UIPage extends Component {
    static template = html`
      <template>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/styles/github.min.css" />
        <style>${style}</style>
        <ui-markdown></ui-markdown>
      </template>`;

  /** Создание компонента {UIPage} @constructor
    * @param {string?} href содержимое элемента
    */
    constructor(href) {
      super();
      if (href) this.href = href;
    }

  /** Создание элемента в DOM (DOM доступен) / mount @lifecycle
    * @param {ShadowRoot} node корневой узел элемента
    * @return {Component} @this {UIPage} текущий компонент
    */
    mount(node) {
      return super.mount(node, attributes, properties);
    }
  }

Component.init(UIPage, 'ui-page', {attributes, properties});

// #region [Private]
/** */
  async function load(root, page) {
    if (!page) return;

    const text = await fetch(`./pages/${page}.md`).then(r => r.text());
    const markdown = root.querySelector('ui-markdown');
    markdown.store({markdown: text});

    if (!window.hljs || !window.hljs.highlightBlock) return;
    $$('pre', markdown).forEach(view => {
      const text = view.innerText;
      console.log(text);
      setTimeout(() => {
        window.hljs.highlightBlock(view);
        const copy = new UICopyIcon();
        copy.innerText = text;
        markdown.insertBefore(copy, view.nextSibling);
      }, 0);
    });
  }
// #endregion
