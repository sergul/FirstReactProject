import WebFont from 'webfontloader';

const loadFonts = () => {
    WebFont.load({
    google: {
      families: ['Titillium Web:300,400,700', 'sans-serif']
    },
    active: function() {
        console.log('fonts are loaded!');
    },
  });
}

export default loadFonts;
