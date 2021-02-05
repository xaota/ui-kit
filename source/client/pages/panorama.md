# Панорама
Компонент, который позволяет просматривать 360 градусные изображения

> `UIPanorama`

```javascript
import UIPanorama from '@xaota/ui/panorama.js';
```

<ui-html>
  <ui-panorama></ui-panorama>
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
const panorama = new UIPanorama();
root.appendChild(panorama);
```

## Обработка событий через JS

```javascript
panorama.addEventListener('event', e => {
  const {detail} = e.detail;
  console.log(detail); // @example: detail-enum
});
```

## Store

## Примечания

### Смотрите также
