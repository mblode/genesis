/* eslint-env node, jquery, browser */

$(document).ready(function () {
  $('.alert').alert();

  var $carousel = $('.PriceBlocks-slider').flickity({
    accessibility: true,
    cellSelector: '.PriceBlock-container',
    initialIndex: 2,
    arrowShape: {
      x0: 10,
      x1: 60,
      y1: 50,
      x2: 65,
      y2: 45,
      x3: 20,
    },
  });

  var flkty = $carousel.data('flickity');

  var previousSlide = flkty.slides[flkty.selectedIndex - 1];
  var nextSlide = flkty.slides[flkty.selectedIndex + 1];

  nextSlide.getCellElements().forEach(function (cellElem) {
    cellElem.classList['add']('is-next');
  }); 
  previousSlide.getCellElements().forEach(function ( cellElem ) {
    cellElem.classList['add']('is-previous');
  });

  $carousel.on('staticClick.flickity', function (event, pointer, cellElement, cellIndex) {
    if (typeof cellIndex === 'number') {
      $carousel.flickity('selectCell', cellIndex);
    }
  });

  $carousel.on('select.flickity', function () {
    flkty.getCellElements().forEach(function (cellElem) {
      cellElem.classList['remove']('is-next');
      cellElem.classList['remove']('is-previous');
    });

    var previousSlide = flkty.slides[flkty.selectedIndex - 1];
    var nextSlide = flkty.slides[flkty.selectedIndex + 1];

    nextSlide.getCellElements().forEach(function (cellElem) {
      cellElem.classList['add']('is-next');
    }); 
    previousSlide.getCellElements().forEach(function ( cellElem ) {
      cellElem.classList['add']('is-previous');
    });
  });

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000);
        return false;
      }
    }
  });
});