# Кирпичи и плитки
Элементы, скрывающие за собой абстракцию по конкретной тематике

> `UIBrick`, `UITile`

```javascript
import UIBrick from '@xaota/ui/brick.js';
import UITile  from '@xaota/ui/tile.js';
```

<ui-html>
  <ui-brick>Путешествия</ui-brick>
  <ui-tile>Путешествия</ui-tile>
</ui-html>

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
const brick = new UIBrick();
root.appendChild(brick);
```

## Обработка событий через JS

```javascript
brick.addEventListener('event', e => {
  const {detail} = e.detail;
  console.log(detail); // @example: detail-enum
});
```

## Store

## Примечания

### Смотрите также

