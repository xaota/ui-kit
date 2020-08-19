# Фишки и Теги
Отображение нформации о введенных данных, параметре или действии

```javascript
import UIChip from '@xaota/ui/chip.js';
```
## Фишки
> MaterialChip

### Заливка
<ui-html>
  <ui-chip>chip 1</ui-chip>
  <ui-chip action="clear">chip 2</ui-chip>
  <ui-chip action="create">chip 3</ui-chip>
</ui-html>

### Обводка
<ui-html>
  <ui-chip outline>chip 1</ui-chip>
  <ui-chip outline action="clear">chip 2</ui-chip>
  <ui-chip outline action="create">chip 3</ui-chip>
</ui-html>

## Фишки с подсказкой
> MaterialChipTooltip

```javascript
import UIChipTooltip from '@xaota/ui/chip-tooltip.js';
```

### Заливка цветом
<ui-html>
  <ui-chip-tooltip content="подсказка">chip 1</ui-chip-tooltip>
  <ui-chip-tooltip action="clear" content="подсказка" action="clear">chip 2</ui-chip-tooltip>
  <ui-chip-tooltip action="create" content="подсказка" action="create">chip 3</ui-chip-tooltip>
</ui-html>

### Обводка
<ui-html>
  <ui-chip-tooltip outline content="подсказка">chip 1</ui-chip-tooltip>
  <ui-chip-tooltip outline action="clear" content="подсказка" action="clear">chip 2</ui-chip-tooltip>
  <ui-chip-tooltip outline action="create" content="подсказка" action="create">chip 3</ui-chip-tooltip>
</ui-html>

## Фишки с аватаром

```javascript
import UIAvatar from '@xaota/ui/avatar.js';

import UIChip   from '@xaota/ui/chip.js';
// либо
import UIChipTooltip from '@xaota/ui/chip-tooltip.js';
```

<ui-html>
  <ui-chip>chip 1</ui-chip>
  <ui-chip action="clear">
    <ui-avatar src="./content/avatar/avatar-10.jpg" slot="avatar"></ui-avatar>
    chip 2
  </ui-chip>
  <ui-chip outline>
    <ui-avatar src="./content/avatar/avatar-11.jpg" slot="avatar"></ui-avatar>
    chip 1
  </ui-chip>
  <ui-chip outline action="clear">
    <ui-avatar src="./content/avatar/avatar-12.jpg" slot="avatar"></ui-avatar>
    chip 2
  </ui-chip>
</ui-html>

<ui-html>
  <ui-chip-tooltip content="подсказка">chip 1</ui-chip-tooltip>
  <ui-chip-tooltip content="подсказка" action="clear">
    <ui-avatar src="./content/avatar/avatar-14.jpg" slot="avatar"></ui-avatar>
    chip 2
  </ui-chip-tooltip>
  <ui-chip-tooltip content="подсказка" outline>
    <ui-avatar src="./content/avatar/avatar-15.jpg" slot="avatar"></ui-avatar>
    chip 1
  </ui-chip-tooltip>
  <ui-chip-tooltip content="подсказка" outline action="clear">
    <ui-avatar src="./content/avatar/avatar-16.jpg" slot="avatar"></ui-avatar>
    chip 2
  </ui-chip-tooltip>
</ui-html>
