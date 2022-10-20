# Панель
Блок с вертикальным размещением элементов

> `UIPanel`

```javascript
import UIPanel from '@xaota/ui/panel.js';
```
<ui-html>
  <div style="display: grid; gap: 8px; grid-auto-columns: 1fr; grid-auto-flow: column">
    <ui-panel>
      <a href="/" slot="top">ссылка 1</a>
      <a href="/" slot="top">ссылка 2</a>
      <a href="/" slot="top">ссылка 3</a>
    </ui-panel>
    <ui-panel outline="text">
      <a href="/" slot="top">ссылка 1</a>
      <a href="/" slot="top">ссылка 2</a>
      <a href="/" slot="top">ссылка 3</a>
    </ui-panel>
    <ui-panel>
      <a href="/" slot="top">ссылка 1</a>
      <a href="/" slot="top">ссылка 2</a>
      <a href="/" slot="top">ссылка 3</a>
      <a href="/">ссылка 4</a>
      <a href="/">ссылка 5</a>
    </ui-panel>
    <ui-panel>
      <a href="/">ссылка 1</a>
      <a href="/">ссылка 2</a>
      <a href="/">ссылка 3</a>
    </ui-panel>
    <ui-panel>
      <a href="/">ссылка 1</a>
      <a href="/">ссылка 2</a>
      <a href="/">ссылка 3</a>
      <a href="/" slot="bottom">ссылка 4</a>
      <a href="/" slot="bottom">ссылка 5</a>
    </ui-panel>
    <ui-panel>
      <a href="/" slot="top">ссылка 1</a>
      <a href="/" slot="top">ссылка 2</a>
      <a href="/" slot="top">ссылка 3</a>
      <a href="/" slot="bottom">ссылка 4</a>
      <a href="/" slot="bottom">ссылка 5</a>
    </ui-panel>
    <ui-panel>
      <a href="/" slot="top">ссылка 1</a>
      <a href="/" slot="top">ссылка 2</a>
      <a href="/" slot="top">ссылка 3</a>
      <a href="/">ссылка 4</a>
      <a href="/">ссылка 5</a>
      <a href="/" slot="bottom">ссылка 6</a>
      <a href="/" slot="bottom">ссылка 7</a>
    </ui-panel>
  </div>
</ui-html>

```css
ui-panel {
  width: 160px;
  height: 400px;
  display: inline-block;
  vertical-align: top;
}
```

## Слоты
* `default` -


## Потомки


## Атрибуты

* `outline` - `string?="text"` - смена оформления панели

## События

* __`event`__ - event-description

### Параметры:

* `detail` - `detail-type` - значения: `detail-enum` - detail-description

## Стилизация

### Встроенное оформление

### CSS-переменные

## Создание через JS

```javascript
const panel = new UIPanel();
root.appendChild(panel);
```

## Обработка событий через JS

```javascript
panel.addEventListener('event', e => {
  const {detail} = e.detail;
  console.log(detail); // @example: detail-enum
});
```

## Store

## Примечания

### Смотрите также
