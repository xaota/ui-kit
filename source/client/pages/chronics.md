# Хроника
Отображение ленты событий в виде карточек

> `UIChronics`

```javascript
import UIChronics from '@xaota/ui/chronics.js';
import UIChronicsItem from '@xaota/ui/chronics-item.js';
```

<ui-html>
  <ui-chronics>
    <ui-chronics-item>1</ui-chronics-item>
    <ui-chronics-item>2</ui-chronics-item>
    <ui-chronics-item>3</ui-chronics-item>
    <ui-chronics-item>4</ui-chronics-item>
    <ui-chronics-item>5</ui-chronics-item>
  </ui-chronics>
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
const chronics = new UIChronics();
root.appendChild(chronics);
```

## Обработка событий через JS

```javascript
chronics.addEventListener('event', e => {
  const {detail} = e.detail;
  console.log(detail); // @example: detail-enum
});
```

## Store

## Примечания

### Смотрите также
