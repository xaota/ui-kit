# Пайплайн
Отображение списка действий в каком-либо процессе

> `UIPipeline`

```javascript
import UIPipeline from '@xaota/ui/pipeline.js';
```

<ui-html>
  <ui-pipeline>

  </ui-pipeline>
</ui-html>

## Потомки


## Атрибуты

> `vertical` - `boolean?=false` - отобразить процесс вертикально

## События

> __`event`__ - event-description

### Параметры:

> `detail` - `detail-type` - значения: `detail-enum` - detail-description

## Стилизация

### Встроенное оформление

### CSS-переменные

## Создание через JS

```javascript
const pipeline = new UIPipeline();
root.appendChild(pipeline);
```

## Обработка событий через JS

```javascript
pipeline.addEventListener('event', e => {
  const {detail} = e.detail;
  console.log(detail); // @example: detail-enum
});
```

## Store

## Примечания

### Смотрите также
