# Баннеры
Отображает заметное сообщение и относящиеся к нему действия

> MaterialBanner

```javascript
import UIBanner from 'javascript-material/banner.js';

// также на этой странице используются
import UIAvatar from 'javascript-material/avatar.js';
import UIButton from 'javascript-material/button.js';
import UIIcon   from 'javascript-material/icon.js';
```

<ui-html>
  <ui-banner>
    <ui-avatar src="./content/avatar/avatar-8.jpg" slot="avatar"></ui-avatar>
    <p>Соединение с интернетом потеряно.</p>
    <p>Приложение работает в автономном режиме.</p>
    <ui-button slot="action">
      <ui-icon>wifi</ui-icon>
      <span>включить wi-fi</span>
    </ui-button>
  </ui-banner>
</ui-html>
