# Обложка
Компонент для оформления изображения в формате обложки

> `UICover`

```javascript
import UICover from '@xaota/ui/cover.js';
```

<ui-html>
  <ui-cover favorite playable icon="like" >
    https://upload.wikimedia.org/wikipedia/commons/f/f0/Kino1986leningrad.jpg
    <span slot="caption">Звезда по имени Солнце</span>
    <span slot="author">Виктор Цой и группа "Кино"</span>
  </ui-cover>
  <ui-cover favorite playable icon="like" view="compact">
    https://upload.wikimedia.org/wikipedia/commons/f/f0/Kino1986leningrad.jpg
    <span slot="caption">Звезда по имени Солнце</span>
    <span slot="author">Виктор Цой и группа "Кино"</span>
  </ui-cover>
  <ui-cover favorite playable icon="like" view="empty">
    https://upload.wikimedia.org/wikipedia/commons/f/f0/Kino1986leningrad.jpg
    <span slot="caption">Звезда по имени Солнце</span>
    <span slot="author">Виктор Цой и группа "Кино"</span>
  </ui-cover>
</ui-html>
<ui-html>
  <ui-cover favorite playable icon="like" view="list">
    https://upload.wikimedia.org/wikipedia/commons/f/f0/Kino1986leningrad.jpg
    <span slot="caption">Звезда по имени Солнце</span>
    <span slot="author">Виктор Цой и группа "Кино"</span>
  </ui-cover>
  <ui-cover favorite playable icon="like" view="text">
    https://upload.wikimedia.org/wikipedia/commons/f/f0/Kino1986leningrad.jpg
    <span slot="caption">Звезда по имени Солнце</span>
    <span slot="author">Виктор Цой и группа "Кино"</span>
  </ui-cover>
</ui-html>

## Слоты

* `default` - строка - url обложки
* `caption` Название
* `description` Описание
* `author` Автор
* `keywords` Теги
* `actions` Меню действий
* `timestamp` - продолжительность, год выпуска, дата создания и т.д

## Потомки
* `TextNode` - строка - url обложки (default slot)

## Атрибуты

* `type` - `string?` - Вид обложки, например "Альбом" или "Плейлист"
* `playable` - `boolean | string` - Если установлен, будет кнопка для воспроизведения и возможным обработка события её нажатия
* `favorite` - `boolean?`
* `rating` - `number?`
* `icon` - `string?=UIIcon`
* `view` - `string?="empty | compact | list | text"` Разные виды обложки
* `editable` - `Array<favorite | rating>`
* `aspect` - `string?="1:1"` - `width:height`
* `explicit` - `boolean`

## События

* __`click`__ -
* __`click-play`__ -
* __`change-rating`__
* __`change-favorite`__

### Параметры:

<!-- * `detail` - `detail-type` - значения: `detail-enum` - detail-description -->

## Стилизация

### Встроенное оформление

### CSS-переменные
* `--thumbnail` строка-url, на случай если нет обложки
* `--cover-width` ширина обложки

## Создание через JS

```javascript
const cover = new UICover();
root.appendChild(cover);
```

## Обработка событий через JS

```javascript
cover.addEventListener('event', e => {
  const {detail} = e.detail;
  console.log(detail); // @example: detail-enum
});
```

## Store

## Примечания

### Смотрите также
