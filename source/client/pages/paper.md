# Страницы
Блок для отображения связанного контента (по одной тематике:, например)

> `UIPaper`

```javascript
import UIPaper from '@xaota/ui/paper.js';
```

<ui-html>
  <ui-paper>
    Простая страница с любым контентом
  </ui-paper>
</ui-html>

## Потомки
Потомками могут быть любые элементы

## Атрибуты

## События

### Параметры:


## Стилизация

### Встроенное оформление

### CSS-переменные
Цвет фона `--background-panel`

## Создание через JS

```javascript
const paper = new UIPaper();
root.appendChild(paper);
```

## Обработка событий через JS

```javascript
paper.addEventListener('event', e => {
  const {detail} = e.detail;
  console.log(detail); // @example: detail-enum
});
```

## Store

## Примечания

### Смотрите также
