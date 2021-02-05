# Копирование текста
Компоненты для возможности скопировать какой-либо текст в буфер обмена "по клику"

> `UICopy`

```javascript
import UICopy     from '@xaota/ui/copy.js';
import UICopyIcon from '@xaota/ui/copy-icon.js';
```

<ui-html>
  <ui-copy value="копирование 1">Элемент 1</ui-copy>
  <p>
    Элемент 2
    <ui-copy-icon>копирование 2</ui-copy-icon>
  </p>
</ui-html>

## Потомки
`ui-copy` - любые элементы

`ui-copy-icon` - текстовое содержимое

## Атрибуты

> `ui-copy[value]` - `string?=undefined` - Копируемый текст

## События

> __`copy`__ - Произошло копирование

### Параметры:

> `value` - `string` - Скопированное значение

## Стилизация

### Встроенное оформление
`display: inline-block`

### CSS-переменные

## Создание через JS

```javascript
const copy = new UICopy(value?);
root.appendChild(copy);
```

## Обработка событий через JS

```javascript
copy.addEventListener('copy', e => {
  const {value} = e.detail;
  console.log(value); // Скопированный текст
});
```

## Store

## Примечания
Для работы требуется HTTPS

### Смотрите также
