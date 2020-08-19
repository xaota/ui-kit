# Разделитель
Визуальное разделение групп элементов в списках и других блоках

> MaterialDivider

```javascript
import UIDivider from '@xaota/ui/divider.js';

// также на этой странице используются
import UIList     from '@xaota/ui/list.js';
import UIListItem from '@xaota/ui/list-item.js';
```

## Горизонтальное разделение
<ui-html>
  <ui-list>
    <ui-list-item>Элемент 1</ui-list-item>
    <ui-divider></ui-divider>
    <ui-list-item>Элемент 2</ui-list-item>
    <ui-divider></ui-divider>
    <ui-list-item>Элемент 3</ui-list-item>
    <ui-divider></ui-divider>
    <ui-list-item>Элемент 4</ui-list-item>
  </ui-list>
</ui-html>

### Кастоимизация горизонтального разделителя
<ui-html>
  <ui-list>
    <ui-list-item>Элемент 1</ui-list-item>
    <ui-divider middle></ui-divider>
    <ui-list-item>Элемент 2</ui-list-item>
    <ui-divider inset></ui-divider>
    <ui-list-item>Элемент 3</ui-list-item>
    <ui-divider middle inset></ui-divider>
    <ui-list-item>Элемент 4</ui-list-item>
  </ui-list>
</ui-html>

### Горизонтальный разделитель с заголовком
<ui-html>
  <ui-list>
    <ui-divider>заголовок 0</ui-divider>
    <ui-list-item>Элемент 1</ui-list-item>
    <ui-divider>заголовок 1</ui-divider>
    <ui-list-item>Элемент 2</ui-list-item>
    <ui-divider middle>заголовок 2</ui-divider>
    <ui-list-item>Элемент 3</ui-list-item>
    <ui-divider inset>заголовок 3</ui-divider>
    <ui-list-item>Элемент 4</ui-list-item>
    <ui-divider middle inset>заголовок 4</ui-divider>
    <ui-list-item>Элемент 5</ui-list-item>
  </ui-list>
</ui-html>

## Создание с помощью JavaScript
### Горизонтальный разделитель
```javascript
const divider = new MaterialDivider(options = {middle: false, inset: false});
```
