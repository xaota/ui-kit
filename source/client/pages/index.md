# Material UI Design
WebComponents Library

## Оформление
Для оформления компонент используются CSS-переменные

```css
:root {
  /* color-palette */
    /* Основные */
    --background-light: #fff;
    --background: #eee;
    --background-dark: #ddd;

    --foreground-light: #222;
    --foreground: #111;
    --foreground-dark: #000;

    /* Цвета темы */
    /* Default - d5d5d5 */
    --color-default-light:   #f5f5f5;
    --color-default:         #d5d5d5;
    --color-default-dark:    #bdbdbd;

    /* Primary */
    --color-primary-light:   #c5cae9;
    --color-primary:         #3f51b5;
    --color-primary-dark:    #303f9f;

    /* Secondary */
    --color-secondary-light: #b3e5fc;
    --color-secondary:       #03a9f4;
    --color-secondary-dark:  #0288d1;

    /* Lighten */
    --color-lighten-light:   #eceff1;
    --color-lighten:         #cfd8dc;
    --color-lighten-dark:    #b0bec5;

    /* Darken */
    --color-darken-light:    #90a4ae;
    --color-darken:          #607d8b;
    --color-darken-dark:     #455a64;

    /* Действия */
    /* Success */
    --color-success-light:   #c8e6c9;
    --color-success:         #4caf50;
    --color-success-dark:    #388e3c;

    /* Process */
    --color-process-light:   #b2ebf2;
    --color-process:         #00bcd4;
    --color-process-dark:    #0097a7;

    /* Warning */
    --color-warning-light:   #fff9c4;
    --color-warning:         #ffeb3b;
    --color-warning-dark:    #fbc02d;

    /* Failure */
    --color-failure-light:   #ffccbc;
    --color-failure:         #ff5722;
    --color-failure-dark:    #e64a19;

    /* Информационные */
    /* Info */
    --color-info-light:      #bbdefb;
    --color-info:            #2196f3;
    --color-info-dark:       #1976d2;

    /* Details */
    --color-details-light:   #b2dfdb;
    --color-details:         #009688;
    --color-details-dark:    #00796b;

    /* Accent */
    --color-accent-light:    #e1bee7;
    --color-accent:          #9c27b0;
    --color-accent-dark:     #7b1fa2;

    /* Alert */
    --color-alert-light:     #ffecb3;
    --color-alert:           #ffc107;
    --color-alert-dark:      #ffa000;

    /* Error */
    --color-error-light:     #ffcdd2;
    --color-error:           #f44336;
    --color-error-dark:      #d32f2f;

    /* Границы */
    --color-text-darken:     #212121;
    --color-text-lighten:    #fafafa;
    --color-text-addition:   #757575;
    --color-divider:         var(--color-default-dark);
  }
```

### Другие настройки
```css
:root {
  --font: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Ubuntu", "Helvetica Neue", sans-serif;

  --indent: 1em;
  --padding: var(--indent) calc(var(--indent) / 2);
  --height: 100vh;
}
```

## Создание компонент для своих проектов
> Все компоненты наследуются напрямую от класса `Component` (класс `Material` тоже)

```javascript
import Component from '/material/script/Component.js';
// ...

const component = Component.meta(import.meta.url, 'component-name'); // название тега
const updateAttribute = {
  disabled(root, value) {
    // обработка изменения атрибута `disabled`
    // есть полезные статические методы в классе `Component`
    // .updateChildrenAttribute, .updateChildrenProperty, .updateChildrenHTML и т.д.
  }
};

export default class ComponentName extends Component {
  constructor(data) {
    super(component);
    this.store({data}); // можно что-то положить в стор компонента
  }

  mount(node) { // создание элемента
    super.mount(node, updateAttribute);
    const {data} = this.store(); // данные из стора компонента

    // ...
    return this;
  }

  // всякие другие методы тоже есть
  // наверн надо сделать реактивный метод `render`.

/** Отслеживаемые атрибуты элемента / observedAttributes @readonly
  * @return {array} список изменяемых атрибутов компонента
  */
  static get observedAttributes() {
    return [...Object.keys(updateAttribute)]; // список атрибутов для отслеживания
  }

/** Изменение отслеживаемого атрибута / attributeChangedCallback @lifecycle
  * @param {string} name название изменяемого атрибута
  * @param {string} previous предыдущее значение ?null
  * @param {string} current устанавливаемое значение
  */
  attributeChangedCallback(name, previous, current) {
    const root = this.shadowRoot;
    if (current !== previous && name in updateAttribute) updateAttribute[name].call(this, root, current);
  }

/** Является ли узел элементом {ComponentName} @static - весьма удобный метод (не обязательно)
  * @param {HTMLElement} node проверяемый узел
  * @return {boolean} node instanceof {ComponentName}
  */
  static is(node) {
    return Component.is(node, ComponentName);
  }
}

Component.properties(ComponentName, 'disabled', ...); // какие-нибудь свойства (атрибуты без значений)
Component.attributes(ComponentName, 'value', ...); // какие-нибудь аттрибуты
Component.define(component, ComponentName);
```
