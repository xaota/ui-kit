# Группа
Группировка компонент, преимущественно контролов и полей ввода

> UIFieldset

```javascript
import UIFieldset from '@xaota/ui/fieldset.js';
// также на этой странице используются
import UIButton   from '@xaota/ui/button.js';
import UIInput    from '@xaota/ui/input.js';
```

<ui-html>
  <ui-fieldset caption="авторизация">
    <ui-input>логин</ui-input>
    <ui-input>пароль</ui-input>
    <ui-button mode="details">войти</ui-button>
  </ui-fieldset>
  <ui-fieldset caption="авторизация" fold>
    <ui-input>логин</ui-input>
    <ui-input>пароль</ui-input>
    <ui-button mode="details">войти</ui-button>
  </ui-fieldset>
</ui-html>

```css
ui-fieldset {
  width: 300px;
  display: inline-block;
  vertical-align: top;
  margin-right: 1em;
}

ui-input, ui-button {
  display: block;
  width: 94%;
  margin: 0 auto;
}

ui-button {
  margin-top: 1em;
}
```
