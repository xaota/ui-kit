# Поля ввода
Элемент, с помощью которого пользователь может вводить и редактировать текст и другие данные

## Однострочные поля ввода

> UIInput

```javascript
import UIInput from '@xaota/ui/input.js';
```

### Текстовое поле
<ui-html>
  <ui-input>Текстовое поле</ui-input>
</ui-html>

### Текстовое поле с иконкой
<ui-html>
  <ui-input icon="create">Текстовое поле</ui-input>
  <ui-input icon="create" right>Текстовое поле</ui-input>
  <ui-input icon="create" fold>Текстовое поле</ui-input>
  <ui-input icon="create" fold right>Текстовое поле</ui-input>
</ui-html>

## Многострочное поле ввода

> UITextarea

```javascript
import UITextarea from '@xaota/ui/textarea.js';
```

<ui-html>
  <ui-textarea>комментарий</ui-textarea>
  <ui-textarea icon="create">сообщение</ui-textarea>
  <ui-textarea icon="create" right>ответ</ui-textarea>
</ui-html>

## Слайдер

> UIInputSlider

```javascript
import UIInputSlider from '@xaota/ui/input-slider.js';
```
### Обычный слайдер

<ui-html>
  <ui-input-slider min="0" max="100" value="30" step="1"></ui-input-slider>
  <ui-input-slider min="0" max="100" value="30" step="1">название</ui-input-slider>
</ui-html>

## Поле выбора цвета

> UIInputColor

```javascript
import UIInputColor from '@xaota/ui/input-color.js';
```

<ui-html>
  <ui-input-color>цвет</ui-input-color>
  <ui-input-color right>цвет</ui-input-color>
  <ui-input-color fold>цвет</ui-input-color>
  <ui-input-color fold right>цвет</ui-input-color>
</ui-html>

## Поле ввода количества

> UIInputCount

```javascript
import UIInputCount from '@xaota/ui/input-count.js';
```

<ui-html>
  <ui-input-count min="0" max="10" step="1">количество</ui-input-count>
  <ui-input-count min="0" max="10" step="1" text="outline">количество</ui-input-count>
  <ui-input-count min="0" max="10" step="1" mode="process">количество</ui-input-count>
  <ui-input-count min="0" max="10" step="1" mode="error" text>количество</ui-input-count>
</ui-html>

## Поле ввода списка тегов

> UIInputChips

```javascript
import UIInputChips from '@xaota/ui/input-chips.js';
import UIChip       from '@xaota/ui/chip.js';

// альтернативный вариант
// import UIChipTooltip from '@xaota/ui/chip-tooltip.js';
```

<ui-html>
  <ui-input-chips label="укажите дни недели">
    <ui-chip action="clear">понедельник</ui-chip>
    <ui-chip action="clear">вторник</ui-chip>
    <ui-chip action="clear">среда</ui-chip>
  </ui-input-chips>
  <ui-input-chips label="укажите дни недели" placeholder="четверг">
    <ui-chip action="clear">понедельник</ui-chip>
    <ui-chip action="clear">вторник</ui-chip>
    <ui-chip action="clear">среда</ui-chip>
  </ui-input-chips>
</ui-html>

```css
ui-input-chips { width: 100%; }
```
