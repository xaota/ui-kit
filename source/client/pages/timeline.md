# Таймлайн
Отображение списка событий

> `UITimeline`

```javascript
import UITimeline from '@xaota/ui/timeline.js';
```

<ui-html>
  <ui-timeline></ui-timeline>
</ui-html>

## Потомки


## Атрибуты

> `horisontal` - `boolean?=false` - отображение событий на горизонтальной шкале

## События

> __`event`__ - event-description

### Параметры:

> `detail` - `detail-type` - значения: `detail-enum` - detail-description

## Стилизация

### Встроенное оформление

### CSS-переменные

## Создание через JS

```javascript
const timeline = new UITimeline();
root.appendChild(timeline);
```

## Обработка событий через JS

```javascript
timeline.addEventListener('event', e => {
  const {detail} = e.detail;
  console.log(detail); // @example: detail-enum
});
```

## Store

## Примечания

### Смотрите также
