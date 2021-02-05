# Шапка страницы и заголовок
Компонент для создания шапки страницы и заголовка

> `UIHeader`

```javascript
import UIHeader from '@xaota/ui/header.js';
```

<ui-html>
  <ui-header></ui-header>
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
const header = new UIHeader();
root.appendChild(header);
```

## Обработка событий через JS

```javascript
header.addEventListener('event', e => {
  const {detail} = e.detail;
  console.log(detail); // @example: detail-enum
});
```

## Store

## Примечания

### Смотрите также
