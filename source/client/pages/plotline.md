# Сюжет
Компонент для отображения канвы сюжета и сюжетных линий

> `UIPlotline`

```javascript
import UIPlotline from '@xaota/ui/plotline.js';
import UIBrick    from '@xaota/ui/brick.js';
```

<ui-html>
  <ui-plotline pipeline="2" stage="5">
    <ui-brick pipeline="1" stage="1">scene 1.1</ui-brick>
    <ui-brick pipeline="1" stage="2">scene 2.1</ui-brick>
    <ui-brick pipeline="1" stage="2">scene 2.2</ui-brick>
    <ui-brick pipeline="1" stage="3">scene 3.1</ui-brick>
    <ui-brick pipeline="1" stage="4">scene 4.1</ui-brick>
    <ui-brick pipeline="2" stage="1">scene 1.1</ui-brick>
    <ui-brick pipeline="2" stage="4">scene 4.1</ui-brick>
    <ui-brick pipeline="2" stage="4">scene 4.2</ui-brick>
    <ui-brick pipeline="2" stage="5">scene 5.1</ui-brick>
    <ui-brick pipeline="2" stage="5">scene 5.2</ui-brick>
  </ui-plotline>
</ui-html>

## Потомки
> `<ui-brick>` - блоки
у потомков должны быть установлены атрибуты `timeline` и `stage`

## Атрибуты

> `direction` - `string?=horisontal` - направление рисования контента - `vertical | horisontal`

> `pipeline` - `number` - количество сюжетных линий

> `stage` - `number` - количество сцен

> `editable` - `boolean?=false` - включает возможность редактирования

## События

> __`change`__ - event-description

### Параметры:

> `detail` - `detail-type` - значения: `detail-enum` - detail-description

## Стилизация

### Встроенное оформление

### CSS-переменные

## Создание через JS

```javascript
const plotline = new UIPlotline();
root.appendChild(plotline);
```

## Обработка событий через JS

```javascript
plotline.addEventListener('change', e => {
  const {detail} = e.detail;
  console.log(detail); // @example: detail-enum
});
```

## Store

## Примечания

### Смотрите также
