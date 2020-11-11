# Кнопки
> Button
Элемент, с помощью которого пользователь может совершить действие.

```javascript
import UIButton from `@xaota/ui/button.js`;
```

## Виды кнопок
### Основные
<ui-html>
  <ui-button>Default</ui-button>
  <ui-button mode="primary">Primary</ui-button>
  <ui-button mode="secondary">Secondary</ui-button>
  <ui-button mode="darken">Darken</ui-button>
  <ui-button mode="lighten">Lighten</ui-button>
</ui-html>

### Действия
<ui-html>
  <ui-button mode="success">Success</ui-button>
  <ui-button mode="process">Process</ui-button>
  <ui-button mode="warning">Warning</ui-button>
  <ui-button mode="failure">Failure</ui-button>
</ui-html>

### Информационные
<ui-html>
  <ui-button mode="info">Info</ui-button>
  <ui-button mode="details">Details</ui-button>
  <ui-button mode="accent">Accent</ui-button>
  <ui-button mode="alert">Alert</ui-button>
  <ui-button mode="error">Error</ui-button>
</ui-html>

## Создание с помощью JavaScript
```javascript
const buttonA = new UIButton();
const buttonB = new UIButton('текст на кнопке');
const buttonC = new UIButton({label: 'текст', mode: 'primary', text: 'outline'});
```

### Кнопки с обводкой
<ui-html>
  <ui-button text="outline">кнопка</ui-button>
  <ui-button mode="primary"   text="outline">кнопка</ui-button>
  <ui-button mode="secondary" text="outline">кнопка</ui-button>
  <ui-button mode="success"   text="outline">кнопка</ui-button>
  <ui-button mode="failure"   text="outline">кнопка</ui-button>
</ui-html>

### Текстовые кнопки
<ui-html>
  <ui-button text>кнопка</ui-button>
  <ui-button mode="primary"   text>кнопка</ui-button>
  <ui-button mode="secondary" text>кнопка</ui-button>
  <ui-button mode="success"   text>кнопка</ui-button>
  <ui-button mode="failure"   text>кнопка</ui-button>
</ui-html>


## Кнопки с иконками
<ui-html>
  <ui-button>
    <ui-icon>keyboard_voice</ui-icon>
  </ui-button>
  <ui-button>
    <ui-icon>attach_file</ui-icon>
    <span>Вложение</span>
  </ui-button>
  <ui-button>
    <span>Выключить микрофон</span>
    <ui-icon>mic_off</ui-icon>
  </ui-button>
</ui-html>

<ui-html>
  <ui-button text="outline">
    <ui-icon>keyboard_voice</ui-icon>
  </ui-button>
  <ui-button text="outline">
    <ui-icon>attach_file</ui-icon>
    <span>Вложение</span>
  </ui-button>
  <ui-button text="outline">
    <span>Выключить микрофон</span>
    <ui-icon>mic_off</ui-icon>
  </ui-button>
</ui-html>

<ui-html>
  <ui-button text>
    <ui-icon>keyboard_voice</ui-icon>
  </ui-button>
  <ui-button text>
    <ui-icon>attach_file</ui-icon>
    <span>Вложение</span>
  </ui-button>
  <ui-button text>
    <span>Выключить микрофон</span>
    <ui-icon>mic_off</ui-icon>
  </ui-button>
</ui-html>

---
```javascript
import UIButtonIcon from '@xaota/ui/button-icon.js';
```

> UIButtonIcon

<ui-html>
  <ui-button-icon>attach_file</ui-button-icon>
  <ui-button-icon>add</ui-button-icon>
  <ui-button-icon>keyboard_voice</ui-button-icon>
  <br/>
  <ui-button-icon text="outline">attach_file</ui-button-icon>
  <ui-button-icon text="outline">add</ui-button-icon>
  <ui-button-icon text="outline">keyboard_voice</ui-button-icon>
  <br/>
  <ui-button-icon text>attach_file</ui-button-icon>
  <ui-button-icon text>add</ui-button-icon>
  <ui-button-icon text>keyboard_voice</ui-button-icon>
</ui-html>

## Кнопка возврата
Используется для возврата на предыдущий экран
> UIButtonBack

```javascript
import UIButtonBack from '@xaota/ui/button-back.js';
```

<ui-html>
  <ui-button-back></ui-button-back>
  <ui-button-back>назад</ui-button-back>
</ui-html>

## Кнопка загрузки файла
Используется для отображения системного меню выбора файла

```javascript
import UIButtonUpload from '@xaota/ui/button-upload.js';

// дополнительные варианты кнопок
import UIButtonUploadIcon        from '@xaota/ui/button-upload-icon.js';
import UIButtonUploadTooltip     from '@xaota/ui/button-upload-tooltip.js';
import UIButtonUploadTooltipIcon from '@xaota/ui/button-upload-tooltip-icon.js';
```

<ui-html>
  <ui-button-upload>добавить файл</ui-button-upload>
  <ui-button-upload text="outline">добавить файл</ui-button-upload>
  <ui-button-upload text>добавить файл</ui-button-upload>
</ui-html>

<ui-html>
  <ui-button-upload-icon>attach_file</ui-button-upload-icon>
  <ui-button-upload-icon text="outline">attach_file</ui-button-upload-icon>
  <ui-button-upload-icon text>attach_file</ui-button-upload-icon>
</ui-html>

<ui-html>
  <ui-button-upload-tooltip content="подсказка">добавить файл</ui-button-upload-tooltip>
  <ui-button-upload-tooltip content="подсказка" text="outline">добавить файл</ui-button-upload-tooltip>
  <ui-button-upload-tooltip content="подсказка" text>добавить файл</ui-button-upload-tooltip>
</ui-html>

<ui-html>
  <ui-button-upload-tooltip-icon content="подсказка">attach_file</ui-button-upload-tooltip-icon>
  <ui-button-upload-tooltip-icon content="подсказка" text="outline">attach_file</ui-button-upload-tooltip-icon>
  <ui-button-upload-tooltip-icon content="подсказка" text>attach_file</ui-button-upload-tooltip-icon>
</ui-html>

## Кнопка для голосового ввода

```javascript
import UIButtonVoice from '@xaota/ui/button-voice.js';

// также в этом разделе используется
import UITextarea from '@xaota/ui/textarea.js';
```

> Работает только по HTTPS, неполная поддержка браузерами (точно работает в Chrome)

<ui-html>
  <ui-button-voice></ui-button-voice>
  <ui-button-voice disabled></ui-button-voice>
  <ui-textarea icon="volume_up">голосовое сообщение</ui-textarea>
</ui-html>

```javascript
const voice = root.querySelector('ui-button-voice'); // первая кнопка
const output = root.querySelector('ui-textarea');

voice.addEventListener('recognize', e => output.value = e.detail.text);
```

```css
ui-textarea {
  width: 90%;
  display: block;
}
```

## Кнопка для синтеза речи
```javascript
import UIButtonSpeech from '@xaota/ui/button-speech.js';

// также в этом разделе используется
import UITextarea from '@xaota/ui/textarea.js';
```

<ui-html>
  <ui-button-speech></ui-button-speech>
  <ui-button-speech disabled></ui-button-speech>
  <ui-textarea icon="volume_up" value="привет, мир!">текст для синтеза речи</ui-textarea>
</ui-html>

```javascript
const speech = root.querySelector('ui-button-speech'); // первая кнопка
const input = root.querySelector('ui-textarea');

input.addEventListener('change', e => speech.value = input.value);
```

```css
ui-textarea {
  width: 90%;
  display: block;
}
```

## Кнопка с подсказкой
При наведении курсора мыши на такую кнопку появляется подсказка

<ui-html>
  <ui-tooltip content="посдказка">
    <ui-button>кнопка</ui-button>
  </ui-tooltip>
</ui-html>

---

```javascript
import UIButtonTooltip from '@xaota/ui/button-tooltip.js';
```

> UIButtonTooltip

<ui-html>
  <ui-button-tooltip content="подсказка">кнопка</ui-button-tooltip>
  <ui-button-tooltip content="подсказка">
    <ui-icon>pets</ui-icon>
  </ui-button-tooltip>
  <ui-button-tooltip content="подсказка">
    <ui-icon>extension</ui-icon>
    <span>кнопка</span>
  </ui-button-tooltip>
</ui-html>

<ui-html>
  <ui-button-tooltip text="outline" content="подсказка">кнопка</ui-button-tooltip>
  <ui-button-tooltip text="outline" content="подсказка">
    <ui-icon>pets</ui-icon>
  </ui-button-tooltip>
  <ui-button-tooltip text="outline" content="подсказка">
    <ui-icon>extension</ui-icon>
    <span>кнопка</span>
  </ui-button-tooltip>
</ui-html>

<ui-html>
  <ui-button-tooltip text content="подсказка">кнопка</ui-button-tooltip>
  <ui-button-tooltip text content="подсказка">
    <ui-icon>pets</ui-icon>
  </ui-button-tooltip>
  <ui-button-tooltip text content="подсказка">
    <ui-icon>extension</ui-icon>
    <span>кнопка</span>
  </ui-button-tooltip>
</ui-html>

## Кнопка-иконка с подсказкой

Кнопка-иконка с подсказкой при наведении курсора мыши

> UIButtonTooltipIcon

```javascript
import UIButtonTooltipIcon from '@xaota/ui/button-tooltip-icon.js';
```

<ui-html>
  <ui-button-tooltip-icon content="подсказка">account_circle</ui-button-tooltip-icon>
  <ui-button-tooltip-icon text="outline" content="подсказка">account_circle</ui-button-tooltip-icon>
  <ui-button-tooltip-icon text content="подсказка">account_circle</ui-button-tooltip-icon>
</ui-html>

## Заблокированные кнопки
## Обычные кнопки
<ui-html>
  <ui-button disabled mode="primary">disabled</ui-button>
  <ui-button disabled mode="details">
    <ui-icon>keyboard_voice</ui-icon>
  </ui-button>
  <ui-button disabled mode="accent">
    <ui-icon>attach_file</ui-icon>
    <span>Добавить файл</span>
  </ui-button>
  <ui-button disabled>
    <span>Выключить микрофон</span>
    <ui-icon>mic_off</ui-icon>
  </ui-button>
</ui-html>

<ui-html>
  <ui-button disabled mode="primary" text="outline">disabled</ui-button>
  <ui-button disabled mode="details" text="outline">
    <ui-icon>keyboard_voice</ui-icon>
  </ui-button>
  <ui-button disabled mode="accent" text="outline">
    <ui-icon>attach_file</ui-icon>
    <span>Добавить файл</span>
  </ui-button>
  <ui-button disabled text="outline">
    <span>Выключить микрофон</span>
    <ui-icon>mic_off</ui-icon>
  </ui-button>
</ui-html>

<ui-html>
  <ui-button disabled mode="primary" text>disabled</ui-button>
  <ui-button disabled mode="details" text>
    <ui-icon>keyboard_voice</ui-icon>
  </ui-button>
  <ui-button disabled mode="accent" text>
    <ui-icon>attach_file</ui-icon>
    <span>Добавить файл</span>
  </ui-button>
  <ui-button disabled text>
    <span>Выключить микрофон</span>
    <ui-icon>mic_off</ui-icon>
  </ui-button>
</ui-html>


## Кнопка-иконка с подсказкой
<ui-html>
  <ui-button-tooltip-icon disabled content="подсказка">account_circle</ui-button-tooltip-icon>
  <ui-button-tooltip-icon disabled text="outline" content="подсказка">account_circle</ui-button-tooltip-icon>
  <ui-button-tooltip-icon disabled text content="подсказка">account_circle</ui-button-tooltip-icon>
</ui-html>


## Кнопка для загрузки файла
<ui-html>
  <ui-button-upload disabled>добавить файл</ui-button-upload>
  <ui-button-upload disabled text="outline">добавить файл</ui-button-upload>
  <ui-button-upload disabled text>добавить файл</ui-button-upload>
</ui-html>
