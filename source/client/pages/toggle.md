# Переключатели
Элементы, с помощью которых пользователь может выбрать среди предложенных значений.

## Выключатели
> UISwitch

```javascript
import UISwitch from '@xaota/ui/switch.js';
```

<ui-html>
  <ui-switch></ui-switch>
  <ui-switch checked></ui-switch>
  <ui-switch disabled></ui-switch>
  <ui-switch checked disabled></ui-switch>
</ui-html>

## Флажки
> UICheckbox

```javascript
import UICheckbox from '@xaota/ui/checkbox.js';
```

<ui-html>
  <ui-checkbox></ui-checkbox>
  <ui-checkbox checked></ui-checkbox>
  <ui-checkbox right>описание слева</ui-checkbox>
  <ui-checkbox>описание справа</ui-checkbox>
  <ui-checkbox disabled></ui-checkbox>
  <ui-checkbox disabled checked></ui-checkbox>
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
</ui-html>

### Группа переключателей
```javascript
import UIRadioGroup from '@xaota/ui/radio-group.js';
import UIRadio      from '@xaota/ui/radio.js';
```

<ui-html>
  <ui-radio-group name="group">
    <ui-radio value="a"></ui-radio>
    <ui-radio value="b" checked></ui-radio>
    <ui-radio value="c"></ui-radio>
    <ui-radio value="d"></ui-radio>
  </ui-radio-group>
</ui-html>
