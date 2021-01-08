import Component, {html, css} from '@xaota/ui';
import marked                 from 'javascript-markdown';

const style = css`
  :host {
    display: block;
    font-family: var(--font);
  }
  slot {
    display: block;
  }
  ::slotted(pre) {
    padding: 1.2em 1em !important;
  }
  ::slotted(blockquote) {
    position: relative;
    margin-bottom: 2em;
    border-left: 1.2em solid #f8f8f8;
    padding-left: .5em;
  }
  ::slotted(blockquote):before {
    position: absolute;
    left: -0.9em;
    content: '#';
    font-weight: normal;
  }
  @media screen and (prefers-color-scheme: dark) {
    ::slotted(.hljs) {
      position: relative;
    }

    ::slotted(.hljs):after {
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

/** {UIMarkdown} @class
  * @description Отображение блока простого текста
  */
  export default class UIMarkdown extends Component {
    static template = html`
      <template>
        <style>${style}</style>
        <slot></slot>
      </template>`;

  /** Создание компонента {UIMarkdown} @constructor
    * @param {string?} markdown содержимое элемента
    */
    constructor(markdown) {
      super();
      if (markdown) this.store({markdown});
    }

  /** */
    render(node) {
      const {markdown} = this.store();
      const html = marked(markdown);
      this.innerHTML = html;
      return this;
    }

  /** Создание элемента в DOM (DOM доступен) / mount @lifecycle
    * @param {ShadowRoot} node корневой узел элемента
    * @return {Component} @this {UIMarkdown} текущий компонент
    */
    mount(node) {
      return super.mount(node, attributes, properties);
    }
  }

Component.init(UIMarkdown, 'ui-markdown', {attributes, properties});
