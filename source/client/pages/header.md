# Шапка страницы и заголовок
Компонент для создания шапки страницы и заголовка

> `UIHeader`

```javascript
import UIHeader     from '@xaota/ui/header.js';
// также на этой странице используются
import UICaption    from '@xaota/ui/caption.js';
import UINavigation from '@xaota/ui/navigation.js';
import UILink       from '@xaota/ui/link.js';
```

<ui-html>
  <ui-header>
    <ui-caption>Заголовок страницы</ui-caption>
    <ui-navigation slot="navigation">
      <ui-link href="//yandex.ru" blank>яндекс</ui-link>
      <ui-link href="//google.com" blank>google</ui-link>
      <ui-link href="//apple.com" blank selected>apple</ui-link>
      <ui-link href="//microsoft.com" blank>microsoft</ui-link>
      <ui-link href="//amazon.com" blank disabled>amazon</ui-link>
    </ui-navigation>
  </ui-header>
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
