# Слой
Слой контента

> `UILayer`

```javascript
import UILayer from '@xaota/ui/layer.js';
```

<ui-html>
  <ui-layer></ui-layer>
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
const layer = new UILayer();
root.appendChild(layer);
```

## Обработка событий через JS

```javascript
layer.addEventListener('event', e => {
  const {detail} = e.detail;
  console.log(detail); // @example: detail-enum
});
```

## Store

## Примечания

### Смотрите также
