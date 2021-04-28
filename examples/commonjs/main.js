var tinymce = require('tinymce/tinymce');

require('tinymce/themes/modern/theme');
require('../../mention/plugin');

tinymce.init({
  selector: '#rte',
  skin: false,
  plugins: ['mention'],
  mentions: {
    delimiter: "@",
    source: [
      { name: 'Tyra Porcelli', id:1 }, 
      { name: 'Brigid Reddish', id:2 },
      { name: 'Ashely Buckler', id:3 },
      { name: 'Teddy Whelan', id:4 }
    ]
  }
});