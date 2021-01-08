# Стрелка
Компонент для указания простых переходов между блоками

> `UIArrow`

```javascript
import UIArrow from '@xaota/ui/arrow.js';
```

<ui-html>
  <ui-arrow></ui-arrow>
  <ui-arrow angle="-90deg" length="100px"></ui-arrow>
  <ui-arrow angle="90deg"></ui-arrow>
  <ui-arrow angle="60deg" size="20px"></ui-arrow>
  <ui-arrow angle="30deg" width="3px"></ui-arrow>
  <ui-arrow angle="-90deg" direction="backward"></ui-arrow>
  <ui-arrow angle="-90deg" direction="forward"></ui-arrow>
  <ui-arrow angle="-90deg" direction="both"></ui-arrow>
  <ui-arrow angle="-90deg" direction="none"></ui-arrow>
  <ui-arrow length="120px" angle="280deg">название</ui-arrow>
</ui-html>

## Потомки
Если в компонент будет вложен элемент, он будет показан над стрелкой

## Атрибуты

> `length` - `css[size]?=80px` - Длина стрелки (в пикселях)

> `angle` - `css[angle]?=0` - Угол наклона стрелки

> `direction` - `string?="forward"` - направление стрелки `backward, forward, both, none`

> `width` - `css[size]?=1px` - Толщина стрелки

> `size` - `css[size]?=16px` - Размер указателя стрелки

## События

## Стилизация
Элемент блочный

### Встроенное оформление
Цвет стрелки по-умолчанию `--color-primary`

### CSS-переменные
`--color` - изменяет цвет стрелки

## Создание через JS

```javascript
const arrow = new UIArrow();
root.appendChild(arrow);
```

## Обработка событий через JS

## Store

## Примечания

### Смотрите также
[Кирпич](#brick), [Следы](#breadcrumbs)
