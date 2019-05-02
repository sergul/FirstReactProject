import WebFont from 'webfontloader';

export default () => {
    WebFont.load({
    google: {
      families: ['Lato:100,300,300i,400', 'sans-serif']
    },
    active: function() {
        console.log('fonts are loaded!');
    },
  });
}
