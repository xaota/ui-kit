# Статистика
Компонент для отображения покзателя статистической информации

> `UIStatistic`

```javascript
import UIStatistic from '@xaota/ui/statistic.js';
//
import UINumeric        from '@xaota/ui/numeric.js';
import UINumericAmount  from '@xaota/ui/numeric-amount.js';
import UINumericPercent from '@xaota/ui/numeric-percent.js';
```

<ui-html>
  <ui-statistic icon="arrow-up" caption="Баланс" mode="success">
    <ui-numeric-amount label="eur">1234733.15</ui-numeric-amount>
  </ui-statistic>
  <ui-statistic caption="Прогресс">
    <ui-numeric-percent precision="3">79.5123</ui-numeric-percent>
  </ui-statistic>
  <ui-statistic icon="arrow-down" caption="Скорость" mode="failure">
    <ui-numeric precision="0" label="km/h">35</ui-numeric>
  </ui-statistic>
  <ui-statistic>
    <ui-numeric precision="0" label="weeks">12</ui-numeric>
  </ui-statistic>
  <ui-statistic icon="data-usage" caption="Проверено" mode="primary">
    <ui-numeric precision="0">78</ui-numeric> / <ui-numeric precision="0">100</ui-numeric>
  </ui-statistic>
</ui-html>

## Слоты
* `default` -

## Потомки
* `ui-numeric`, `ui-numeric-amount`, `ui-numeric-percent`

## Атрибуты

* `caption` - `string?` - название
* `icon` - `string?` - иконка. Обычно `arrow-up` / `arrow-down`
* `mode` - `string` - управляет цветом

## События

* __`event`__ - event-description

### Параметры:

* `detail` - `detail-type` - значения: `detail-enum` - detail-description

## Стилизация

### Встроенное оформление

### CSS-переменные

## Создание через JS

```javascript
const statistic = new UIStatistic();
root.appendChild(statistic);
```

## Обработка событий через JS

```javascript
statistic.addEventListener('event', e => {
  const {detail} = e.detail;
  console.log(detail); // @example: detail-enum
});
```

## Store

## Примечания

### Смотрите также
