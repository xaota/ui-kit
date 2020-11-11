# Подсказки
Компонент для показа подсказок к элементу

> UITooltip

```javascript
import UITooltip from '@xaota/ui/tooltip.js';

// также на этой странице использованы
import UIButton from '@xaota/ui/button.js';
import UIPaper  from '@xaota/ui/paper.js';
```

## Подсказка к элементу при наведении
### Подсказки снаружи
<ui-html>
  <ui-tooltip content="посдказка сверху">
    <ui-button>кнопка</ui-button>
  </ui-tooltip>
  <ui-tooltip content="посдказка снизу" y="bottom">
    <ui-button>кнопка</ui-button>
  </ui-tooltip>
  <ui-tooltip content="посдказка слева" x="left" y="center">
    <ui-button>кнопка</ui-button>
  </ui-tooltip>
  <ui-tooltip content="посдказка справа" x="right" y="center">
    <ui-button>кнопка</ui-button>
  </ui-tooltip>
  <ui-tooltip content="посдказка в центре" x="center" y="center">
    <ui-button>кнопка</ui-button>
  </ui-tooltip>
</ui-html>

<ui-html>
  <ui-tooltip content="посдказка слева снизу" x="left" y="bottom">
    <ui-button>кнопка</ui-button>
  </ui-tooltip>
  <ui-tooltip content="посдказка слева сверху" x="left" y="top">
    <ui-button>кнопка</ui-button>
  </ui-tooltip>
  <ui-tooltip content="посдказка справа сверху" x="right" y="top">
    <ui-button>кнопка</ui-button>
  </ui-tooltip>
  <ui-tooltip content="посдказка справа снизу" x="right" y="bottom">
    <ui-button>кнопка</ui-button>
  </ui-tooltip>
</ui-html>

### Подсказки внутри

<ui-html>
  <ui-tooltip content="посдказка сверху" inset>
    <ui-paper>
      <p>Строка 1</p>
      <p>Строка 2</p>
    </ui-paper>
  </ui-tooltip>
  <ui-tooltip content="посдказка снизу" y="bottom" inset>
    <ui-paper>
      <p>Строка 1</p>
      <p>Строка 2</p>
    </ui-paper>
  </ui-tooltip>
  <ui-tooltip content="посдказка<br/>слева" x="left" y="center" inset>
    <ui-paper>
      <p>Строка 1</p>
      <p>Строка 2</p>
    </ui-paper>
  </ui-tooltip>
  <ui-tooltip content="посдказка<br/>справа" x="right" y="center" inset>
    <ui-paper>
      <p>Строка 1</p>
      <p>Строка 2</p>
    </ui-paper>
  </ui-tooltip>
  <ui-tooltip content="посдказка<br/>в центре" x="center" y="center" inset>
    <ui-paper>
      <p>Строка 1</p>
      <p>Строка 2</p>
    </ui-paper>
  </ui-tooltip>
</ui-html>

<ui-html>
  <ui-tooltip content="посдказка<br/>слева<br/>снизу" x="left" y="bottom" inset>
    <ui-paper>
      <p>Строка 1</p>
      <p>Строка 2</p>
    </ui-paper>
  </ui-tooltip>
  <ui-tooltip content="посдказка<br/>слева<br/>сверху" x="left" y="top" inset>
    <ui-paper>
      <p>Строка 1</p>
      <p>Строка 2</p>
    </ui-paper>
  </ui-tooltip>
  <ui-tooltip content="посдказка<br/>справа<br/>сверху" x="right" y="top" inset>
    <ui-paper>
      <p>Строка 1</p>
      <p>Строка 2</p>
    </ui-paper>
  </ui-tooltip>
  <ui-tooltip content="посдказка<br/>справа<br/>снизу" x="right" y="bottom" inset>
    <ui-paper>
      <p>Строка 1</p>
      <p>Строка 2</p>
    </ui-paper>
  </ui-tooltip>
</ui-html>
