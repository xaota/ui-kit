# Пайплайн
Отображение списка действий в каком-либо процессе

> `UIPipeline`

```javascript
import UIPipeline from '@xaota/ui/pipeline.js';
import UIBrick    from '@xaota/ui/brick.js';
```

<ui-html>
  <ui-pipeline stage="6">
    <ui-brick stage="1">scene 1.1</ui-brick>
    <ui-brick stage="2">scene 2.1</ui-brick>
    <ui-brick stage="2">scene 2.2</ui-brick>
    <ui-brick stage="3">scene 3.1</ui-brick>
    <ui-brick stage="3">scene 3.2</ui-brick>
    <ui-brick stage="3">scene 3.3</ui-brick>
    <ui-brick stage="4">scene 4.1</ui-brick>
    <ui-brick stage="5">scene 5.1</ui-brick>
    <ui-brick stage="6">scene 6.1</ui-brick>
    <ui-brick stage="6">scene 6.2</ui-brick>
    <ui-brick stage="6">scene 6.3</ui-brick>
  </ui-pipeline>
</ui-html>

## Потомки
> `<ui-brick>` - блоки
у потомков должны быть установлен атрибут `stage`

## Атрибуты

> `vertical` - `boolean?=false` - отобразить процесс вертикально

## События

> __`change`__ - event-description

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
pipeline.addEventListener('change', e => {
  const {detail} = e.detail;
  console.log(detail); // @example: detail-enum
});
```

## Store

## Примечания

### Смотрите также
