import Component, {html, css} from '@xaota/ui';

const style = css`
  :host {
    display: block;
    font-family: var(--font);
  }
  slot {
    display: block;
  }
  pre {
    display: block;
    overflow-x: auto;
    padding: 1.2em .5em !important;
    background: #f8f8f8 !important;
  }
  @media screen and (prefers-color-scheme: dark) {
    .hljs {
      position: relative;
    }

    .hljs:after {
      position:absolute;
      content: '';
      display: block;
      top:0;
      bottom:0;
      left: 0;
      right: 0;
      background: #ddd;
      mix-blend-mode: difference;
    }
  }`;

const attributes = {}
const properties = {}

/** {UIHTML} @class
  * @description Отображение блока простого текста
  */
  export default class UIHTML extends Component {
    static template = html`
      <template>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/styles/default.min.css" />
        <style>${style}</style>
        <slot></slot>
        <pre lang="html"></pre>
      </template>`;

  /** Создание компонента {UIHTML} @constructor
    * @param {string?} html содержимое элемента
    */
    constructor(html) {
      super();
      if (html) this.innerHTML = html;
    }

  /** Создание элемента в DOM (DOM доступен) / mount @lifecycle
    * @param {ShadowRoot} node корневой узел элемента
    * @return {Component} @this {UIHTML} текущий компонент
    */
    mount(node) {
      super.mount(node, attributes, properties);

      const slot = node.querySelector('slot');
      slot.addEventListener('slotchange', () => {
        const text = this.innerHTML.replace(/^.*\n?/, '');
        const output = node.querySelector('pre');
        output.innerText = text;
        // @ts-ignore
        if (window.hljs && window.hljs.highlightBlock) setTimeout(() => window.hljs.highlightBlock(output), 0);
      });

      return this;
    }
  }

Component.init(UIHTML, 'ui-html', {attributes, properties});
