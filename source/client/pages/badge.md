# Метка
Счетчик уведомлений на элементе

> MaterialBadge

```javascript
import UIBadge from 'javascript-material/badge.js';

// также на этой странице используются
import UIIcon from 'javascript-material/icon.js';
```

## Простая метка
<ui-html>
  <ui-badge count="5">
    <ui-icon>folder_open</ui-icon>
  </ui-badge>
  <ui-badge count="5" dot>
    <ui-icon>folder_open</ui-icon>
  </ui-badge>
</ui-html>

### Максимальное значение
<ui-html>
  <ui-badge count="15" max="9">
    <ui-icon>mail</ui-icon>
  </ui-badge>
  <ui-badge count="15" max="99">
    <ui-icon>mail</ui-icon>
  </ui-badge>
  <ui-badge count="150" max="99">
    <ui-icon>mail</ui-icon>
  </ui-badge>
</ui-html>

### Отображение наличия
<ui-html>
  <ui-badge count="0" dot>
    <ui-icon>folder_open</ui-icon>
  </ui-badge>
  <ui-badge count="5" dot>
    <ui-icon>folder_open</ui-icon>
  </ui-badge>
</ui-html>

### Скрытие и показ значений
<ui-html id="demo">
  <ui-badge count="0">
    <ui-icon>mail</ui-icon>
  </ui-badge>
  <ui-badge count="0" zero>
    <ui-icon>mail</ui-icon>
  </ui-badge>
  <ui-badge count="5" hidden>
    <ui-icon>mail</ui-icon>
  </ui-badge>
  <br />
  <ui-button-icon id="dec" text="outline">remove</ui-button-icon>
  <ui-button-icon id="inc" text="outline">add</ui-button-icon>
</ui-html>

```javascript
const badge = root.querySelector('ui-badge'); // первый
const inc = root.querySelector('#inc');
const dec = root.querySelector('#dec');

inc.addEventListener('click', () => badge.count = parseInt(badge.count || 0) + 1);
dec.addEventListener('click', () => badge.count = parseInt(badge.count || 0) - 1);
```

### Положение метки
<ui-html>
  <ui-badge count="5">
    <ui-icon>mail</ui-icon>
  </ui-badge>
  <ui-badge count="5" x="left">
    <ui-icon>mail</ui-icon>
  </ui-badge>
  <ui-badge count="5" y="bottom">
    <ui-icon>mail</ui-icon>
  </ui-badge>
  <ui-badge count="5" x="left" y="bottom">
    <ui-icon>mail</ui-icon>
  </ui-badge>
</ui-html>
