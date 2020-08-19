import Component, {html, css} from '@xaota/ui';
import marked                 from 'javascript-markdown';

const style = css`
  :host {
    display: block;
    font-family: var(--font);
  }
  slot {
    display: block;
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
