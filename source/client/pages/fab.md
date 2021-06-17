# Floating Action Button
Конопка для совершения целевого действия на экране

> `UIFAB`

```javascript
import UIFAB        from '@xaota/ui/fab.js';
import UIFABTooltip from '@xaota/ui/fab-ttoltip';
```

<ui-html>
  <ui-fab>create</ui-fab>
  <ui-fab>person_add</ui-fab>
  <ui-fab>arrow-up</ui-fab>
  <ui-fab>play</ui-fab>
  <ui-fab>navigation</ui-fab>
  <ui-fab>send</ui-fab>
  <ui-fab>add_comment</ui-fab>
  <ui-fab>more_vert</ui-fab>
</ui-html>

<ui-html>
  <ui-fab-tooltip content="создать">create</ui-fab-tooltip>
  <ui-fab-tooltip content="добавить человека">person_add</ui-fab-tooltip>
  <ui-fab-tooltip content="вверх">arrow-up</ui-fab-tooltip>
</ui-html>

```css
ui-fab, ui-fab-tooltip {
  display: inline-block;
}
```

## Применение
* Используется в `ui-panel[slot="action"]`

## Слоты
* `default` -


## Потомки


## Атрибуты

* `attribute` - `type?=default` - attribute-description

## События

* __`event`__ - event-description

### Параметры:

* `detail` - `detail-type` - значения: `detail-enum` - detail-description

## Стилизация

### Встроенное оформление

### CSS-переменные

## Создание через JS

```javascript
const fab = new UIFAB();
root.appendChild(fab);
```

## Обработка событий через JS

```javascript
fab.addEventListener('event', e => {
  const {detail} = e.detail;
  console.log(detail); // @example: detail-enum
});
```

## Store

## Примечания

### Смотрите также

