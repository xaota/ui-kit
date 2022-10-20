# Витрина
Элемент для отображения коллекций

> `UIShowcase`

```javascript
import UIShowcase     from '@xaota/ui/showcase.js';
import UIShowcaseItem from '@xaota/ui/showcase-item.js';
```

<ui-html>
  <ui-showcase>
    <ui-showcase-item>
      1
    </ui-showcase-item>
    <ui-showcase-item>
      2
    </ui-showcase-item>
    <ui-showcase-item>
      3
    </ui-showcase-item>
    <ui-showcase-item icon="add"></ui-showcase-item>
  </ui-showcase>
</ui-html>

<ui-html>
  <ui-showcase align="left">
    <ui-showcase-item>
      1
    </ui-showcase-item>
    <ui-showcase-item>
      2
    </ui-showcase-item>
    <ui-showcase-item>
      3
    </ui-showcase-item>
    <ui-showcase-item icon="add"></ui-showcase-item>
  </ui-showcase>
</ui-html>

## Слоты
* `default` -


## Потомки


## Атрибуты
* `nowrap` - `boolean` - не включать перенос строк
* `align` - `string?=justify` - выравнивание элементов

## События

* __`event`__ - event-description

### Параметры:

* `detail` - `detail-type` - значения: `detail-enum` - detail-description

## Стилизация

### Встроенное оформление

### CSS-переменные
#### Переменные `ui-showcase-item`
* `--showcase-item-width` - `css width`

## Создание через JS

```javascript
const showcase = new UIShowcase();
root.appendChild(showcase);
```

## Обработка событий через JS

```javascript
showcase.addEventListener('event', e => {
  const {detail} = e.detail;
  console.log(detail); // @example: detail-enum
});
```

## Store

## Примечания

### Смотрите также

