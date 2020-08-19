# Галерея
Слайдер для переключения каких-либо элементов, например, изображений

> MaterialSlider

```javascript
import UISlider     from '@xaota/ui/slider.js';
import UISliderItem from '@xaota/ui/slider-item.js';
```

> Размеры слайдера задаются `сss`-переменными `--width` и `--height` у элемента

<ui-html>
  <ui-slider style="--height: 600px">
    <ui-slider-item>
      <img src="content/images/slide-1.jpeg" />
    </ui-slider-item>
    <ui-slider-item>
      <img src="content/images/slide-2.jpeg">
    </ui-slider-item>
    <ui-slider-item>
      <img src="content/images/slide-3.jpeg">
    </ui-slider-item>
  </ui-slider>
</ui-html>
