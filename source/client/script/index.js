import UIPanel    from '@xaota/ui/panel.js';
import UICaption  from '@xaota/ui/caption.js';
import UIFieldset from '@xaota/ui/fieldset.js';

import UIPage     from '../components/page.js';

const page = document.body.querySelector('ui-page');
page.href = window.location.hash.slice(1) || 'index';

window.addEventListener('popstate', e => {
  const href = window.location.hash.slice(1);
  // console.log(href);
  page.href = href;
});



