# Списки
Представление группы элементов вертикальным списком.

> UIList, UIListItem

```javascript
import UIList     from '@xaota/ui/list.js';
import UIListItem from '@xaota/ui/list-item.js';
```

## Список элементов

<ui-html>
  <ui-list>
    <ui-list-item>Элемент 1</ui-list-item>
    <ui-list-item>Элемент 2</ui-list-item>
    <ui-list-item>Элемент 3</ui-list-item>
    <ui-list-item>Элемент 4</ui-list-item>
    <ui-list-item>Элемент 5</ui-list-item>
  </ui-list>
</ui-html>

## Создание с помощью JavaScript

```javascript
const list   = new UIList();
const array  = ['элемент 1', 'элемент 2', 'элемент 3', 'элемент 4', 'элемент 5'];
array.forEach((item, index) => list.appendChild(new UIListItem(index, item)));
```

<!-- <a href="#dividers">Разделители</a> -->
