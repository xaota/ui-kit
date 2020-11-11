# Разворачиваемые блоки
Элемент позволяющий упросить восприятие контента, скрыв менее важную информацию.

```javascript
import UIExpand from '@xaota/ui/expand.js';
```

## Разворачиваемая панель
> UIExpand

<ui-html>
  <ui-expand summary="Название разворачиваемой панели, содержимое внутри">
    Скрытое содержимое
  </ui-expand>
  <ui-expand summary="Разворачиваемая панель" description="Дополнительная информация">
    Скрытое содержимое
  </ui-expand>
</ui-html>

## Работа через JavaScript
```javascript
const expand = root.querySelector('ui-expand');

/* содержимое */
expand.summary     = 'Заголовок';
expand.description = 'Дополнительная информация';
expand.appendChild(content); // содержимое

/* события */
// при сворачивании/разворачивании блока
expand.addEventListener('expand', e => console.log(e.detail.expanded));

// при сворачивании блока
expand.addEventListener('fold',   e => console.log('блок свёрнут'));

// при разворачивании блока
expand.addEventListener('unfold', e => console.log('блок развёрнут'));
```

## Аккордеон
