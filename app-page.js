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
       * readme file
       */
      readme: {
        type: String,
        value: null,
        observer: '_setTypeOfPage'
      },
      host: {
        type: String,
        value: 'http://adominguez.github.io'
      },
      /**
       * component url
       */
      componentName: {
        type: String,
        value: null,
        observer: '_setTypeOfPage'
      },
      /**
       * component url
       */
      _componentUrl: {
        type: String,
        value: null
      },
      /**
       * Show demo or doc if it´s false show demo
       */
      showDoc: {
        type: Boolean,
        value: false
      },
      /**
       * if is true dont show the panel right
       */
      hidePanelRight: {
        type: Boolean,
        value: false
      },
      /**
       * If is true show an animation to load the page
       */
      fadeIn: {
        type: Boolean,
        value: false
      },
      /**
       * If is true the component is responsive to 770px
       */
      responsive: {
        type: Boolean,
        value: false
      }
    },
    _setTypeOfPage: function() {
      if(this.componentName !== '' || null) {
        var demo = this.showDoc ? 'index.html' : 'demo/index.html';
        this._componentUrl = `${this.host}/bower_components/${this.componentName}/${demo}`;
      }
      if((this.readme !== '' || null) && (this.componentName !== '' || null)) {
        this.componentName = null;
      }
    }

  });
}());
