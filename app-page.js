(function () {
  'use strict';
  Polymer({

    is: 'app-page',

    properties: {
      /**
       * title of page
       */
      titlePage: {
        type: String,
        value: null
      },
      /**
       * subtitle of page
       */
      subtitlePage: {
        type: String,
        value: null
      },
      /**
       * if is true dont show the panel right
       */
      hidePanelRight: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * if is true the header doesn´t show
       */
      hideHeader: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
      },
      /**
       * if is true the header doesn´t show
       */
      hideFooter: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * if is true the header doesn´t show
       */
      hideSidebar: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * if is true the header shows at 100%
       */
      fullHeader: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * if is true the footer shows at 100%
       */
      fullFooter: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * if is true show the overlay
       */
      showOverlay: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * If is true show an animation to load the page
       */
      fadeIn: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * If is true the component is responsive to 770px
       */
      responsive: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      }
    },

    ready: function() {
      Polymer.RenderStatus.afterNextRender(this, function() {
        this._hideSidebar();
      })
    },

    openSidebar: function() {
      this.$.sidebar.classList.add('opened');
      this.$.overlay.classList.add('hide-content');
      this.showOverlay = true;
    },

    closeSidebar: function() {
      this.$.sidebar.classList.remove('opened');
      this.showOverlay = false;
      this.$.overlay.classList.remove('hide-content');
    },

    _hideSidebar: function() {
      if(this.responsive && document.documentElement.clientWidth <= 768) {
        this.hideSidebar = true;
      }
    }

  });
}());
