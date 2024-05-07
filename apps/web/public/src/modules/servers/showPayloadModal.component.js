import template from './payloadModal.template';

const showPayloadModal ={
  template: template(),
  bindings: {
    close: '&',
    resolve: '<',
  },
  controller: [
    function() {
      this.$onInit = function() {
        this.payload = JSON.stringify(JSON.parse(this.resolve.payload), null, '  ');
      };
    },
  ],
};

export {showPayloadModal};
