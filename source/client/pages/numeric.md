# Форматирование чисел
Компоненты для форматирования числовых значений, сумм и процентов

> `UINumeric`

```javascript
import UINumeric        from '@xaota/ui/numeric.js';
import UINumericAmount  from '@xaota/ui/numeric-amount.js';
import UINumericPercent from '@xaota/ui/numeric-percent.js';
```

<ui-html>
  <ui-numeric>1000000.237</ui-numeric>
  <br />
  <ui-numeric label="km/h">100</ui-numeric>
  <br />
  <ui-numeric-amount label="eur">12.65</ui-numeric-amount>
  <br />
  <ui-numeric-percent>32.6</ui-numeric-percent>
  <br />
  <ui-numeric label="яблоки"> -10</ui-numeric>
  <br />
  <ui-numeric-amount label="usd"> -12.65</ui-numeric-amount>
  <br />
  <ui-numeric-percent> -2.6</ui-numeric-percent>
</ui-html>

## Слоты
* `default` - числовое значение

## Потомки
* `textNode`
* `slot > textNode`

## Атрибуты

* `label` - `string?` - подпись к числу (единицы измерения) (кроме `<ui-numeric-percent>`)
* `precision?=2` - `number?` - количество знаков после десятичного разделителя `[0, Infinity]`
* `decimal=','` - `string?` - разделитель целой и дробной частей
* `thousand='.'` -`string?` - разделитель тысячных разрядов
* `sup, sub` -
* `trunc / round / ceil / floor` -

## Свойства

* `ellipsis` - скрывать большое число многоточием
* `no-zero` -

## События

* __`event`__ - event-description

### Параметры:

* `detail` - `detail-type` - значения: `detail-enum` - detail-description

## Стилизация

### Встроенное оформление

### CSS-переменные

## Создание через JS

```javascript
const numeric = new UINumeric(1e6);
root.appendChild(numeric);
```

## Обработка событий через JS

```javascript
numeric.addEventListener('event', e => {
  const {detail} = e.detail;
  console.log(detail); // @example: detail-enum
});
```

## Store

## Примечания
Компонент `<ui-numeric>` также экспортирует функцию `numeric` для форматирования чисел

```javascript
import { numeric } from '@xaota/ui/numeric.js';

numeric(1_000_000.237, precision = 2, thousand = '.', decimal = ',') // 1.000.000,24
```

### Смотрите также
