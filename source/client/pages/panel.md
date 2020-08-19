# Панель
Блок с возможностью вертикального размещения элементов

> MaterialPanel

```javascript
import UIPanel from 'javascript-material/panel.js';
```

<ui-html>
  <ui-panel>
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
</ui-html>

```css
ui-panel {
  width: 160px;
  height: 400px;
  display: inline-block;
  vertical-align: top;
}
```
