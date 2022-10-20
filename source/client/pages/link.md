# Ссылки
Компонент для оформления ссылок

> `UILink`

```javascript
import UILink from '@xaota/ui/link.js';
```

<ui-html>
  <ui-link href="//yandex.ru" blank>яндекс</ui-link>
</ui-html>

## Слоты
* `default` - название ссылки

## Потомки
`TextNode`

## Атрибуты

* `href` - `string?=""` - Адрес перехода
* `icon` - название иконки
* `blank` - открыть в новой вкладке
* `selected`
* `disabled`

## События

* __`click`__ - клик по ссылке

### Параметры:

* `detail` - `detail-type` - значения: `detail-enum` - detail-description

## Стилизация

### Встроенное оформление

### CSS-переменные

## Создание через JS

```javascript
const link = new UILink();
root.appendChild(link);
```

## Обработка событий через JS

```javascript
link.addEventListener('click', e => {
  const {detail} = e.detail;
  console.log(detail); // @example: detail-enum
});
```

## Store

## Примечания

### Смотрите также
