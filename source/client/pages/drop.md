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
      <ui-list-item>Элемент 4</ui-list-item>
      <ui-list-item>Элемент 5</ui-list-item>
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
      <ui-list-item>Элемент 4</ui-list-item>
      <ui-list-item>Элемент 5</ui-list-item>
    </ui-list>
  </ui-drop>
</ui-html>
