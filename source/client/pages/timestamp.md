# Дата и время
Компонент показывающий дату и время с форматированием

> `UITimestamp`

```javascript
import UITimestamp from '@xaota/ui/timestamp.js';
```

<ui-html>
  <ui-timestamp></ui-timestamp>
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
const timestamp = new UITimestamp();
root.appendChild(timestamp);
```

## Обработка событий через JS

```javascript
timestamp.addEventListener('event', e => {
  const {detail} = e.detail;
  console.log(detail); // @example: detail-enum
});
```

## Store

## Примечания

### Смотрите также
