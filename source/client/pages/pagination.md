# Пагинация по страничным данным

> UIPagination

Для блоков, контента которых ещё нет

```javascript
import UIPagination from '@xaota/ui/pagination.js';
```

<ui-html>
  <ui-pagination pages="25" current="11" />
</ui-html>


### События
> `change` - выбор страницы

```javascript
pagination.addEventListener('change', e => console.log(e.detail.page));
```

### Атрибуты
> `disabled` - отключает пагинацию

### Создание с помощью JavaScript
```javascript
const pagination = new UIPagination(pages, current);
```
