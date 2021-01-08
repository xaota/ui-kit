# Вкладки
Удобное переключение между несколькими разделами

> `UITabs`

```javascript
import UITabs     from '@xaota/ui/tabs.js';
import UITabsItem from '@xaota/ui/tabs-item.js';
```

<ui-html>
  <ui-tabs>
    <ui-tabs-item caption="tab 1">content 1</ui-tabs-item>
    <ui-tabs-item caption="tab 2">content 2</ui-tabs-item>
    <ui-tabs-item caption="tab 3">content 3</ui-tabs-item>
  </ui-tabs>
</ui-html>

## Потомки
> `UITabsItem` - содержимое вкладок и их названия `<ui-tabs-item></ui-tabs-item>`

## Атрибуты

> `attribute` - `type?=default` - attribute-description

## События

> __`change`__ - смена вкладки

### Параметры:

> `detail` - `detail-type` - значения: `detail-enum` - detail-description

## Стилизация

### Встроенное оформление

### CSS-переменные

## Создание через JS

```javascript
const tabs = new UITabs();
root.appendChild(tabs);
```

## Обработка событий через JS

```javascript
tabs.addEventListener('change', e => {
  const {detail} = e.detail;
  console.log(detail); // @example: detail-enum
});
```

## Store

## Примечания

### Смотрите также
