# Раскладка (Grid)
Располагает блоки в сетке

> `UIGrid`

```javascript
import UIGrid from '@xaota/ui/grid.js';
```

<ui-html>
  <ui-grid columns="1-2">
    <div style="border: 1px solid red">1</div>
    <div style="border: 1px solid yellow">2</div>
  </ui-grid>
</ui-html>

## Потомки


## Атрибуты

> `columns` - `string?="1"` - отношения в размерах столбцов через тире

## События

> __`event`__ - event-description

### Параметры:

> `detail` - `detail-type` - значения: `detail-enum` - detail-description

## Стилизация

### Встроенное оформление

### CSS-переменные

## Создание через JS

```javascript
const grid = new UIGrid();
root.appendChild(grid);
```

## Обработка событий через JS

```javascript
grid.addEventListener('event', e => {
  const {detail} = e.detail;
  console.log(detail); // @example: detail-enum
});
```

## Store

## Примечания

### Смотрите также
