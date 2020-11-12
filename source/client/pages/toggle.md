# Переключатели
Элементы, с помощью которых пользователь может выбрать среди предложенных значений.

## Выключатели
> UIToggle, UISwitch

```javascript
import UIToggle from '@xaota/ui/toggle.js';
import UISwitch from '@xaota/ui/switch.js';
```

<ui-html>
  <ui-toggle></ui-toggle>
  <ui-toggle checked></ui-toggle>
</ui-html>

<ui-html>
  <ui-switch value="negative"></ui-switch>
  <ui-switch></ui-switch>
  <ui-switch value="positive"></ui-switch>
</ui-html>

<ui-html>
  <ui-switch
    negative="disabled"
    neutral="default"
    positive="enabled"
    right
    style="--width: 100px"
  >
    название
  </ui-switch>
</ui-html>

### Заблокированные выключатели

<ui-html>
  <ui-toggle disabled></ui-toggle>
  <ui-toggle checked disabled></ui-toggle>
  <ui-switch disabled value="negative"></ui-switch>
  <ui-switch disabled></ui-switch>
  <ui-switch disabled value="positive"></ui-switch>
</ui-html>

## Флажки
> UICheckbox

```javascript
import UICheckbox from '@xaota/ui/checkbox.js';
```

<ui-html>
  <ui-checkbox></ui-checkbox>
  <ui-checkbox checked></ui-checkbox>
</ui-html>

### Флажки с текстом
<ui-html>
  <ui-checkbox right>описание слева</ui-checkbox>
  <ui-checkbox>описание справа</ui-checkbox>
</ui-html>

### Заблокированные флажки
<ui-html>
  <ui-checkbox disabled></ui-checkbox>
  <ui-checkbox disabled checked></ui-checkbox>
  <ui-checkbox disabled right>описание слева</ui-checkbox>
  <ui-checkbox disabled>описание справа</ui-checkbox>
  <ui-checkbox disabled checked right>описание слева</ui-checkbox>
  <ui-checkbox disabled checked>описание справа</ui-checkbox>
</ui-html>

## Переключатели
> UIRadio

```javascript
import UIRadio from '@xaota/ui/radio.js';
```
<ui-html>
  <ui-radio value="a" checked></ui-radio>
  <ui-radio value="b"></ui-radio>
  <ui-radio value="c" disabled checked></ui-radio>
  <ui-radio value="d" disabled></ui-radio>
  <ui-radio value="e" right>Описание слева</ui-radio>
  <ui-radio value="e" checked>Описание справа</ui-radio>
</ui-html>

### Группа переключателей
```javascript
import UIRadioGroup from '@xaota/ui/radio-group.js';
import UIRadio      from '@xaota/ui/radio.js';
```

<ui-html>
  <ui-radio-group name="group-1">
    <ui-radio value="a"></ui-radio>
    <ui-radio value="b" checked></ui-radio>
    <ui-radio value="c"></ui-radio>
    <ui-radio value="d" disabled></ui-radio>
  </ui-radio-group>
</ui-html>

<ui-html>
  <ui-radio-group name="group-2" vertical>
    <ui-radio value="a"></ui-radio>
    <ui-radio value="b"></ui-radio>
    <ui-radio value="c" disabled></ui-radio>
  </ui-radio-group>
</ui-html>

<ui-html>
  <ui-radio-group name="group-3" vertical>
    <ui-radio right value="a">вариант a</ui-radio>
    <ui-radio right value="b" disabled>вариант b</ui-radio>
    <ui-radio right value="c" checked>вариант c</ui-radio>
  </ui-radio-group>
</ui-html>
