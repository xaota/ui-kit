# Split
Разделенные блоки

> `UISplit`

```javascript
import UISplit   from '@xaota/ui/split.js';
// также на этой странице используются
import UICaption from '@xaota/ui/caption.js';
import UIText    from '@xaota/ui/text.js';
import UICard    from '@xaota/ui/card.js';
import UIFigure  from '@xaota/ui/figure.js';
import UIButton  from '@xaota/ui/button.js';
import UIIcon    from '@xaota/ui/icon.js';
import UIPanel   from '@xaota/ui/panel.js';
```

<ui-html>
  <ui-split>
    <ui-card slot="left">
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
      <ui-button slot="action" mode="lighten"><ui-icon>share</ui-icon></ui-button>
      <ui-button slot="action" mode="lighten">подробнее</ui-button>
    </ui-card>
    <ui-card slot="right">
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
      <ui-button slot="action" mode="lighten"><ui-icon>share</ui-icon></ui-button>
      <ui-button slot="action" mode="lighten">подробнее</ui-button>
    </ui-card>
  </ui-split>
</ui-html>

<ui-html>
  <ui-split>
    <ui-caption size="large" slot="header">Сравнение элементов</ui-caption>
    <ui-card slot="left">
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
      <ui-button slot="action" mode="lighten"><ui-icon>share</ui-icon></ui-button>
      <ui-button slot="action" mode="lighten">подробнее</ui-button>
    </ui-card>
    <ui-icon slot="actions">arrow-left</ui-icon>
    <ui-icon slot="actions">arrow-right</ui-icon>
    <ui-card slot="right">
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
      <ui-button slot="action" mode="lighten"><ui-icon>share</ui-icon></ui-button>
      <ui-button slot="action" mode="lighten">подробнее</ui-button>
    </ui-card>
    <ui-text slot="footer">Легенда</ui-text>
  </ui-split>
</ui-html>

## Слоты
* `header?` - Заголовок
* `left` - левая часть
* `right` - правая часть
* `actions?` - действия (между левым и правым блоками)
* `footer?` - Легенда

## Потомки


## Атрибуты

* `attribute` - `type?=default` - attribute-description

## События

* __`event`__ - event-description

### Параметры:

* `detail` - `detail-type` - значения: `detail-enum` - detail-description

## Стилизация

### Встроенное оформление

### CSS-переменные

## Создание через JS

```javascript
const split = new UISplit();
root.appendChild(split);
```

## Обработка событий через JS

```javascript
split.addEventListener('event', e => {
  const {detail} = e.detail;
  console.log(detail); // @example: detail-enum
});
```

## Store

## Примечания

### Смотрите также
