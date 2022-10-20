# Панель навигации
Блок для отображения группы ссылок

> `UINavigation`

```javascript
import UINavigation from '@xaota/ui/navigation.js';
import UILink       from '@xaota/ui/link.js';
```

<ui-html>
  <ui-navigation>
    <ui-link href="//yandex.ru" blank>яндекс</ui-link>
    <ui-link href="//google.com" blank>google</ui-link>
    <ui-link href="//apple.com" blank selected>apple</ui-link>
    <ui-link href="//microsoft.com" blank>microsoft</ui-link>
    <ui-link href="//amazon.com" blank disabled>amazon</ui-link>
  </ui-navigation>
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
const navigation = new UINavigation();
root.appendChild(navigation);
```

## Обработка событий через JS

```javascript
navigation.addEventListener('event', e => {
  const {detail} = e.detail;
  console.log(detail); // @example: detail-enum
});
```

## Store

## Примечания

### Смотрите также
