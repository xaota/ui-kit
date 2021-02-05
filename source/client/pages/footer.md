# Подвал страницы
Подвал страницы

> `UIFooter`

```javascript
import UIFooter from '@xaota/ui/footer.js';
```

<ui-html>
  <ui-footer></ui-footer>
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
const footer = new UIFooter();
root.appendChild(footer);
```

## Обработка событий через JS

```javascript
footer.addEventListener('event', e => {
  const {detail} = e.detail;
  console.log(detail); // @example: detail-enum
});
```

## Store

## Примечания

### Смотрите также
