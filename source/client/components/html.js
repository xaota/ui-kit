import Component, { html, css, $ } from '@xaota/ui';
import UICopyIcon from '@xaota/ui/copy-icon.js';

const style = css`
  :host {
    display: block;
    font-family: var(--font);
    position: relative;
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
  ui-copy-icon {
    position: absolute;
    bottom: 1em;
    right: 1em;
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
        <ui-copy-icon></ui-copy-icon>
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

      const slot = $('slot', node);
      slot.addEventListener('slotchange', () => {
        const text = this.innerHTML.replace(/^.*\n?/, '');
        const output = $('pre', node);
        output.innerText = text;
        const copy = $('ui-copy-icon', node);
        copy.innerText = text;
        // @ts-ignore
        if (window.hljs && window.hljs.highlightBlock) setTimeout(() => window.hljs.highlightBlock(output), 0);
      });

      return this;
    }
  }

Component.init(UIHTML, 'ui-html', { attributes, properties });
