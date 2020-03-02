/**
 * モーダル
 */
app.views = {

  ModalView: (function() {
    var constructor = function() {
      this.$el = {};
      this.$main = {};
      this.$triggerClose = {};
      this.$triggerOpen = {};
      this.$page = {};
      this.offsetTopOpened = 0;
      return this;
    };
    var proto = constructor.prototype;
    proto.init = function(args) {
      this.setEl(args.el);
      this.setStyle();
      this.setEvents();
      return this;
    };
    proto.setEl = function(el) {
      this.$el = $(el);
      this.$main = this.$el.find('.m_modal-window');
      this.$triggerClose = this.$el.find('.m_modal__btnClose');
      this.$triggerOpen = $('a[href="#' + this.$el.attr('id') + '"]');
      this.$page = $('#PageView');
      return this;
    };
    proto.setStyle = function() {
      this.$el.hide();
      return this;
    };
    proto.setEvents = function() {
      var that = this;
      this.$triggerOpen.on('click', function(e) {
        e.preventDefault();
        that.openModal();
      });
      this.$triggerClose.on('click', function() {
        that.closeModal();
      });
      this.$el.on('click', function() {
        that.closeModal();
      });
      this.$main.on('click', function(e) {
        e.stopPropagation();
      });
      return this;
    };
    proto.openModal = function() {
      this.offsetTopOpened = $(window).scrollTop();
      this.$page.css({
        position: 'fixed',
        top: -this.offsetTopOpened,
        width: '100%'
      });
      this.$el.fadeIn();
      return this;
    };
    proto.closeModal = function() {
      this.$page.css({
        position: 'static',
        top: 'auto',
        width: 'auto'
      });
      $(window).scrollTop(this.offsetTopOpened);
      this.$el.fadeOut();
      return this;
    };
    return constructor;
  })()

};