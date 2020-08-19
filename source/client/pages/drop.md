# Выпадающие блоки
Элемент, позволяющий мнгновенно выбрать значение из небольшого числа вариантов.

> MaterialDrop

```javascript
import UIDropRoot from 'javascript-material/drop-root.js';
import UIDrop     from 'javascript-material/drop.js';

// также на этой странице использованы
import UIButton   from 'javascript-material/button.js';
import UIList     from 'javascript-material/list.js';
import UIListItem from 'javascript-material/list-item.js';
```

<ui-html>
  <ui-drop-root y="bottom">
    <ui-button>кнопка</ui-button>
    <ui-list slot="drop">
      <ui-list-item>Элемент 1</ui-list-item>
      <ui-list-item>Элемент 2</ui-list-item>
      <ui-list-item>Элемент 3</ui-list-item>
      <ui-list-item>Элемент 4</ui-list-item>
      <ui-list-item>Элемент 5</ui-list-item>
    </ui-list>
  </ui-drop-root>
</ui-html>

<ui-html>
  <ui-drop-root>
    <ui-button>кнопка</ui-button>
    <ui-list slot="drop">
      <ui-list-item>Элемент 1</ui-list-item>
      <ui-list-item>Элемент 2</ui-list-item>
      <ui-list-item>Элемент 3</ui-list-item>
      <ui-list-item>Элемент 4</ui-list-item>
      <ui-list-item>Элемент 5</ui-list-item>
    </ui-list>
  </ui-drop-root>
</ui-html>
