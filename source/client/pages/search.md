# Поисковая строка
Отображение поисковой строки

> UISearch

```javascript
import UISearch from '@xaota/ui/search.js';
```

## Поисковая панель
<ui-html>
  <ui-search>поиск</ui-search>
  <ui-search right>поиск</ui-search>
</ui-html>

### Динамическая поисковая панель
<ui-html>
  <ui-search fold>поиск</ui-search>
  <ui-search fold right>поиск</ui-search>
</ui-html>

## Поисковые посдсказки / результаты
> UISearchDrop

```javascript
import UISearchDrop from '@xaota/ui/search-drop.js';

// также используется
import UIListItem from '@xaota/ui/list-item.js';
```

<ui-html>
  <ui-search-drop label="поиск">
    <ui-list-item>Элемент 1</ui-list-item>
    <ui-list-item>Элемент 2</ui-list-item>
    <ui-list-item>Элемент 3</ui-list-item>
    <ui-list-item>Элемент 4</ui-list-item>
    <ui-list-item>Элемент 5</ui-list-item>
  </ui-search-drop>
</ui-html>

<ui-html>
  <ui-search-drop label="поиск" right>
    <ui-list-item>Элемент 1</ui-list-item>
    <ui-list-item>Элемент 2</ui-list-item>
    <ui-list-item>Элемент 3</ui-list-item>
    <ui-list-item>Элемент 4</ui-list-item>
    <ui-list-item>Элемент 5</ui-list-item>
  </ui-search-drop>
</ui-html>

<ui-html>
  <ui-search-drop label="поиск" fold>
    <ui-list-item>Элемент 1</ui-list-item>
    <ui-list-item>Элемент 2</ui-list-item>
    <ui-list-item>Элемент 3</ui-list-item>
    <ui-list-item>Элемент 4</ui-list-item>
    <ui-list-item>Элемент 5</ui-list-item>
  </ui-search-drop>
</ui-html>

<ui-html>
  <ui-search-drop label="поиск" fold right>
    <ui-list-item>Элемент 1</ui-list-item>
    <ui-list-item>Элемент 2</ui-list-item>
    <ui-list-item>Элемент 3</ui-list-item>
    <ui-list-item>Элемент 4</ui-list-item>
    <ui-list-item>Элемент 5</ui-list-item>
  </ui-search-drop>
</ui-html>
