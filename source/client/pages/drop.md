# Выпадающие блоки
Элемент, позволяющий мнгновенно выбрать значение из небольшого числа вариантов.

> UIDrop

```javascript
import UIDrop from '@xaota/ui/drop.js';

// также на этой странице использованы
import UIButton   from '@xaota/ui/button.js';
import UIList     from '@xaota/ui/list.js';
import UIListItem from '@xaota/ui/list-item.js';
```

<ui-html>
  <ui-drop y="bottom">
    <ui-button>кнопка</ui-button>
    <ui-list slot="drop">
      <ui-list-item>Элемент 1</ui-list-item>
      <ui-list-item>Элемент 2</ui-list-item>
      <ui-list-item>Элемент 3</ui-list-item>
    </ui-list>
  </ui-drop>
</ui-html>

<ui-html>
  <ui-drop>
    <ui-button>кнопка</ui-button>
    <ui-list slot="drop">
      <ui-list-item>Элемент 1</ui-list-item>
      <ui-list-item>Элемент 2</ui-list-item>
      <ui-list-item>Элемент 3</ui-list-item>
    </ui-list>
  </ui-drop>
</ui-html>

### Свойства
> `disabled` - запрещает пользовательское управление выпадающим блоком
>
> `visible` - показ выпадающего блока по-умолчанию

<ui-html>
  <ui-drop visible disabled>
    <ui-button>кнопка</ui-button>
    <ui-list slot="drop">
      <ui-list-item>Элемент 1</ui-list-item>
    </ui-list>
  </ui-drop>
</ui-html>

> `action` - для закрытия выпавшего блока требуется вызвать функицю `.close()`

> `outside`

> `inline`

### Атрибуты
> `x`
>
> `y`

### Создание через JavaScript
```javascript
/**
  * @typedef {Object} UIDropProps
  * @property {boolean} [visible]  показ выпадающего блока
  * @property {boolean} [disabled] отмена пользовательского управления
  * @property {boolean} [action]   отмена закрытия при потере фокуса
  * @property {boolean} [outside]  выпадающий блок не перекрывает элемент
  * @property {boolean} [inline]   для использования в строчных элементах
  * @property {number}  [x]        положение выпадающего блока по горизонтали
  * @property {number}  [y]        положение выпадающего блока по вертикали
  */

  const drop = new UIDrop(props?: UIDropProps);
```

### Управление через JavaScript
> `.open()`
```javascript
  drop.show();
```

> `.close()`
```javascript
  drop.hide();
```

> `.toggle()`
```javascript
  drop.toggle();
```

### События
> `change`

```javascript
  drop.addEventListener('change', e => console.log(e.detail.visible));
```
