})(App, window, document);
$(function() {

  /**
   * 共通処理
   */
  var commonInit = function() {

    /* スムーススクロール */
    smoothScroll();

    /* ページトップボタン */
    //triggerPagetop();

    /* モーダル */
    var modal = new App.views.ModalView();
    //modal.init({ el: '.js_modal' });

  };

  /**
   * スムーススクロール
   */
  var smoothScroll = function() {
    var $el = $('a[href^="#"]');
    var init = function() {
      setEvents();
      return this;
    };
    var setEvents = function() {
      $el.on('click', function(e) {
        e.preventDefault();
        animateScroll($(this).attr('href'));
      });
      return this;
    };
    var animateScroll = function(href) {
      var $target = $(href === '#' || href === '' ? 'html' : href);
      if($target.length > 0) {
        var position = $target.offset().top;
        $('html, body').animate({
          scrollTop: position
        }, 500, 'swing');
      }
    };
    init();
  };

  /**
   * ページトップボタン
   */
  var triggerPagetop = function() {
    var $el = {};
    var init = function(args) {
      setEl(args.el);
      setStyle();
      setEvents();
      return this;
    };
    var setEl = function(el) {
      $el = $(el);
      return this;
    };
    var setStyle = function() {
      $el.hide();
      return this;
    };
    var setEvents = function() {
      $(window).on('scroll', function() {
        animateToggle($(window).scrollTop());
      });
      return this;
    };
    var animateToggle = function(scrollTop) {
      if(scrollTop > $(window).outerHeight()) {
        $el.fadeIn();
      } else {
        $el.fadeOut();
      }
    };
    return { init: init };
  };

  /* 共通処理 */
  commonInit();

});