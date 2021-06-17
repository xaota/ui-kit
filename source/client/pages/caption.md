# Название
Компонент для отображения названия чего-либо

> `UICaption`

```javascript
import UICaption from '@xaota/ui/caption.js';
```

<ui-html>
  <ui-caption size="large">Заголовок</ui-caption>
  <ui-caption>Заголовок</ui-caption>
  <ui-caption size="small">Заголовок</ui-caption>
  <ui-caption size="large" no-wrap>Очень длинный заголовок но переноситься он не будет</ui-caption>
  <ui-caption right>Заголовок справа</ui-caption>
  <ui-caption left>Заголовок слева</ui-caption>
  <ui-caption center>Заголовок в центре</ui-caption>
</ui-html>

## Слоты
* `default` - Текст заголовка

## Потомки
* `TextNode`

## Атрибуты

* `size` - `string?` - размер заголовка (`"", "small", "large"`)
* `no-wrap` - `boolean?=false` - если установлен, запрещает перенос строки

## События

* __`event`__ - event-description

### Параметры:

* `detail` - `detail-type` - значения: `detail-enum` - detail-description

## Стилизация

### Встроенное оформление

### CSS-переменные

## Создание через JS

```javascript
const caption = new UICaption();
root.appendChild(caption);
```

## Обработка событий через JS

```javascript
caption.addEventListener('event', e => {
  const {detail} = e.detail;
  console.log(detail); // @example: detail-enum
});
```

## Store

## Примечания

### Смотрите также
