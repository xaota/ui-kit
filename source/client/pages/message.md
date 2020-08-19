# Сообщения
Отображение сообщений в быстрой переписке

> MaterialMessage

```javascript
import UIMessage from 'javascript-material/message.js';

// также в примерах на этой странице используются
import UIAvatar   from 'javascript-material/avatar.js';
import UIKeyboard from 'javascript-material/keyboard.js'; // клавиатура
import UIButton   from 'javascript-material/button.js';   // содержимое клавиатуры
```

### Сообщения с аватарами
<ui-html>
  <ui-message left>
    <ui-avatar slot="avatar" src="./content/avatar/avatar-6.jpg"></ui-avatar>
    Текст сообщения
  </ui-message>
  <ui-message>
    <ui-avatar slot="avatar" src="./content/avatar/avatar-6.jpg"></ui-avatar>
    Текст сообщения
  </ui-message>
  <ui-message right>
    <ui-avatar slot="avatar" src="./content/avatar/avatar-7.jpg"></ui-avatar>
    Текст сообщения
  </ui-message>
</ui-html>

### Простые сообщения
<ui-html>
  <ui-message left>Текст сообщения</ui-message>
  <ui-message>Текст сообщения</ui-message>
  <ui-message right>Текст сообщения</ui-message>
</ui-html>

## Сообщения с клавиатурой
<ui-html>
  <ui-message left>
    <ui-avatar slot="avatar" src="./content/avatar/avatar-6.jpg"></ui-avatar>
    Текст сообщения
    <ui-keyboard slot="markup">
      <ui-button>1</ui-button>
      <ui-button>2</ui-button>
      <ui-button>3</ui-button>
    </ui-keyboard>
    <ui-keyboard slot="markup">
      <ui-button>4</ui-button>
      <ui-button>5</ui-button>
    </ui-keyboard>
    <ui-keyboard slot="markup">
      <ui-button>6</ui-button>
    </ui-keyboard>
  </ui-message>
  <ui-message right>
    <ui-avatar slot="avatar" src="./content/avatar/avatar-6.jpg"></ui-avatar>
    Текст сообщения
    <ui-keyboard slot="markup">
      <ui-button>1</ui-button>
      <ui-button>2</ui-button>
      <ui-button>3</ui-button>
    </ui-keyboard>
    <ui-keyboard slot="markup">
      <ui-button>4</ui-button>
      <ui-button>5</ui-button>
    </ui-keyboard>
    <ui-keyboard slot="markup">
      <ui-button>6</ui-button>
    </ui-keyboard>
  </ui-message>
</ui-html>
