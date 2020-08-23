$(document).ready( () => {

//=include dynamic-adapt.js
/*========================================================================================*/
/*===========================================*/
let webpFlag = false;

function testWebP() {
  return new Promise(res => {
    const webP = new Image();
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    webP.onload = webP.onerror = () => {
      res(webP.height === 2);
    };
  })
};
testWebP().then(hasWebP => {
  webpFlag = hasWebP
  $('body').addClass('webP');
  ibg()
});
/*============================================*/

/*============================================*/
function ibg() {
  $.each($('.ibg'), function(index, val) {
    if ($(this).find('source').length > 0 && webpFlag) {
      $(this).css('background-image', 'url("' + $(this).find('source').attr('srcset') + '")');
      return;
    }
    if ($(this).find('img').length > 0) {
      $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
      return;
    }
  });
}
/*============================================*/
/*========================================================================================*/

})
