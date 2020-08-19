# Аватар
Отображение аватарки

> MaterialAvatar

```javascript
import UIAvatar from '@xaota/ui/avatar.js';
```

<view-source>
  <ui-avatar mode="primary">Метка</ui-avatar>
  <ui-avatar mode="secondary" icon="cloud_queue">Метка Широкая</ui-avatar>
  <ui-avatar mode="warning">Текстовая Метка</ui-avatar>
  <ui-avatar>Длинная Текстовая Метка</ui-avatar>
  <ui-avatar mode="primary" src="./content/avatar/avatar-1.jpg">метка</ui-avatar>
  <ui-avatar mode="primary" src="./content/avatar/avatar-6.jpg" icon="cloud_queue">метка</ui-avatar>
  <ui-avatar mode="primary" src="./content/avatar/avatar-2.jpg" size="64px"></ui-avatar>
  <ui-avatar mode="primary" src="./content/avatar/avatar-3.jpg" aria-label="avatar-test"></ui-avatar>
  <ui-avatar mode="primary" src="./content/avatar/avatar-4.jpg" style="--size:96px;"></ui-avatar>
</view-source>

```css
ui-avatar[aria-label="avatar-test"] {
  --size: 72px;
}
```
