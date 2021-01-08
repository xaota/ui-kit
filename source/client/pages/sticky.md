# Липучка

> UISticky

```javascript
import UISticky from '@xaota/ui/sticky.js';
```

<ui-html>
  <ui-panel>
    <ui-sticky>
      прилипающий текст или другие элементы
    </ui-sticky>
    <ui-paper>
      контент
      <br/>
      контент
    </ui-paper>
  </ui-panel>
</ui-html>

## Атрибуты

> `top` - `number?=0` - уровень прилипания при прокрутке родителя вверх

> `bottom` - `number?=0` - уровень прилипания при прокрутке родителя вниз

> `left` - `number?=0` - уровень прилипания при прокрутке родителя влево

> `right` - `number?=0` - уровень прилипания при прокрутке родителя вправо

по умолчанию считается что установлен атрибут `top="0"`

## События

> __`stuck`__ - прилипание или отлипание элемента

параметры:

> `side` - сторона прилипания, `string` - значения: `'top', 'bottom', 'left', 'right'`

> `stuck` - прилипание / отлипание, `boolean`

> `value` - значение положения элемента относительно стороны родителя, в пикселях (на всякий случай)

## Стилизация
При прилипании элемента устанавливается аттрибут `[stuck="${side}"]`, например `[stuck="top"]`

## Создание через JS

```javascript
const sticky = new UISticky();
root.appendChild(sticky);
```

## Обработка событий через JS

```javascript
sticky.addEventListener('stuck', e => {
  const {side, stuck, value} = e.detail;
  console.log(side, stuck, value); // @example: "top", true, 0
});
```

### Примечания

> Основано на CSS свойстве `position: sticky` с кастомным событием `stuck`
