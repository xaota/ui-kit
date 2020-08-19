# Карточка
Отображение информации и действий о конкретном объекте

> MaterialCard

```javascript
import UICard    from 'javascript-material/card.js';

// также на этой странице использованы
import UIFigure  from 'javascript-material/figure.js';
import UIButton  from 'javascript-material/button.js';
import UICaption from 'javascript-material/caption.js';
import UIText    from 'javascript-material/text.js';
import UIIcon    from 'javascript-material/icon.js';
```

<ui-html>
  <ui-card>
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
    <ui-button slot="action" mode="lighten">
      <ui-icon>share</ui-icon>
    </ui-button>
    <ui-button slot="action" mode="lighten">подробнее</ui-button>
  </ui-card>
</ui-html>

```css
ui-card {
  display: inline-block;
  width: 345px;
}
```
