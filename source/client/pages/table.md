# Таблица
Отображение табличных данных

> `UITable`

```javascript
import UITable from '@xaota/ui/table.js';
```

<ui-html>
  <ui-table></ui-table>
</ui-html>

## Потомки


## Атрибуты

> `attribute` - `type?=default` - attribute-description

## События

> __`event`__ - event-description

### Параметры:

> `detail` - `detail-type` - значения: `detail-enum` - detail-description

## Стилизация

### Встроенное оформление

### CSS-переменные

## Создание через JS

```javascript
const table = new UITable();
root.appendChild(table);
```

## Обработка событий через JS

```javascript
table.addEventListener('event', e => {
  const {detail} = e.detail;
  console.log(detail); // @example: detail-enum
});
```

## Store

## Примечания

### Смотрите также
