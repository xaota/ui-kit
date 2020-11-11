# Рейтинг
Отображение или установка оценки чего-либо с помощью звёздочек

> UIRating

```javascript
import UIRating from '@xaota/ui/rating.js';
```

<ui-html>
  <ui-rating></ui-rating>
  <ui-rating value="3"></ui-rating>
  <ui-rating value="2.4"></ui-rating>
  <ui-rating value="2" disabled></ui-rating>
  <ui-rating value="1.6" disabled></ui-rating>
</ui-html>

### Создание через Javascript
```javascript
const button = root.querySelector('ui-button');
button.addEventListener('click', showDialog);

async function showDialog() {
  const counter = new UIInputSlider('Значение [0..5]');
  counter.min = 0;
  counter.max = 50;
  counter.style.width = '80%';
  counter.style.display = 'block';
  counter.style.margin = '0 auto';

  const text = new UIText('0');
  text.style.display = 'block';
  text.style.textAlign = 'center';
  text.style.marginTop = '24px';

  counter.addEventListener('input', _ => text.innerHTML = parseInt(counter.value) / 10);
  const fragment = document.createDocumentFragment();
  fragment.appendChild(counter);
  fragment.appendChild(text);

  const dialog = new UIDialog("Создание элемента рейтинга")
    .content(fragment)
    .action('Создать', () => dialog.resolve(counter.value / 10))
    .action('Отмена',  UIDialog.reject())
    .options({scroll: false});

  try {
    const value = await dialog.open();
    const rating = new UIRating(value);
    root.querySelector('#show-rating').appendChild(rating);
  } catch (error) {
    // ...
  } finally {
    dialog.close();
  }
}
```
