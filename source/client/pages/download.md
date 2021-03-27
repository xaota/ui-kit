# Download
Компонент для отображения ссылки на загружаемый документ

> `UIDownload`

```javascript
import UIDownload from '@xaota/ui/download.js';
```

<ui-html>
  <ui-download>name-of-file.pdf</ui-download>
</ui-html>

## Потомки


## Атрибуты

> `href` - `string?=undefined` - Ссылка на скачиваемый файл (GET)

## События

> __`click`__ - нажатие на элемент

### Параметры:

> `detail` - `detail-type` - значения: `detail-enum` - detail-description

## Стилизация

### Встроенное оформление

### CSS-переменные

## Создание через JS

```javascript
const download = new UIDownload();
root.appendChild(download);
```

## Обработка событий через JS

```javascript
download.addEventListener('click', e => {
  const {detail} = e.detail;
  console.log(detail); // @example: detail-enum
});
```

## Store

## Примечания

### Смотрите также
