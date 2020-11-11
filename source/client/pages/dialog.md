# Диалоговые и Модальные окна
Отображение всплывающих окон

> UIDialog

```javascript
import UIDialog from '@xaota/ui/dialog.js';

// также на этой странице используются
import UIText    from '@xaota/ui/text.js';
import UIButton  from '@xaota/ui/button.js';
```

## Модальное окно
### Внешний вид
<ui-html>
  <ui-dialog caption="Заголовок">
    <ui-text>
      Простой текст для описания основного содержимого внутри popup-окна.
      Впрочем, тут может быть абсолютно любой блок.
    </ui-text>
    <ui-button slot="action" mode="primary" text>понятно</ui-button>
    <ui-button slot="action" mode="primary" text>отмена</ui-button>
  </ui-dialog>
</ui-html>

```css
ui-dialog {
max-width: 600px;
}
```

### Отображение с помощью JavaScript
```javascript
const button = root.querySelector('ui-button');
button.addEventListener('click', showDialog);

async function showDialog() {
  const dialog = new UIDialog("Заголовок")
    .content(new UIText('какой-то текст'))
    .action('Закрыть', UIDialog.resolve('готово'))
    .action('Отмена',  UIDialog.reject('отмена'))
    .options({scroll: false});
  try {
    const resolve = await dialog.open();
    button.innerHTML = 'результат: ' + resolve;
  } catch (error) {
    button.innerHTML = 'результат: ' + error;
  } finally {
    dialog.close();
  }
}

// также, извне можно завершить модальное окно с помощью методов:
dialog.resolve('успешное завершение');
dialog.reject('неуспешное завершение');
```
