# Рамка
Отображение медиаконтента и подпись.

> MaterialFigure

```javascript
import UIFigure  from 'javascript-material/figure.js';

// также на этой странице использованы
import UICaption from 'javascript-material/caption.js';
import UIText    from 'javascript-material/text.js';
```

<ui-html>
  <ui-figure>
    <img src="content/images/contemplative-reptile.jpg" alt="lizard" />
    <ui-caption slot="description">Ящерицы</ui-caption>
    <ui-text slot="description">
      Широко распространенная группа рептилий,
      насчитывающая более 6000 видов,
      расположенных на всех континентах,
      за исключением Антарктики
    </ui-text>
  </ui-figure>
</ui-html>

```css
ui-figure {
  width: 450px;
  border: 1px solid #ccc;
}
```
