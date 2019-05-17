import WebFont from 'webfontloader';

const loadFonts = () => {
    WebFont.load({
    google: {
      families: ['Inconsolata:400']
    },
    active: function() {
      sessionStorage.fonts = true;
      console.log('fonts are loaded!');
    },
  });
}

export default loadFonts;
