# Уведомления
Компоненты для показа уведомлений

> `UISnackbar`

```javascript
import UISnackbar from '@xaota/ui/snackbar.js';
```

<ui-html>
  <ui-snackbar></ui-snackbar>
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
const snackbar = new UISnackbar();
root.appendChild(snackbar);
```

## Обработка событий через JS

```javascript
snackbar.addEventListener('event', e => {
  const {detail} = e.detail;
  console.log(detail); // @example: detail-enum
});
```

## Store

---

> `UINotify`

```javascript
import UINotify from '@xaota/ui/notify.js';
```

<ui-html>
  <ui-notify></ui-notify>
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
const notify = new UINotify();
root.appendChild(notify);
```

## Обработка событий через JS

```javascript
notify.addEventListener('event', e => {
  const {detail} = e.detail;
  console.log(detail); // @example: detail-enum
});
```

## Store

## Примечания

### Смотрите также
