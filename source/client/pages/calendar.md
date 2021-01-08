# Календарь
Отображение календаря

> `UICalendar`

```javascript
import UICalendar from '@xaota/ui/calendar.js';
```

<ui-html>
  <ui-calendar></ui-calendar>
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
const calendar = new UICalendar();
root.appendChild(calendar);
```

## Обработка событий через JS

```javascript
calendar.addEventListener('event', e => {
  const {detail} = e.detail;
  console.log(detail); // @example: detail-enum
});
```

## Store

## Примечания

### Смотрите также
