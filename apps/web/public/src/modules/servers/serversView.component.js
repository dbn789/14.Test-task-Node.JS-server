import template from './serversView.template';

const serversView = {
  template: template(),
  controller: [
    'Server',
    '$stateParams',
    'NotificationService',
    'Charts',
    function(Server, $stateParams, NotificationService, Charts) {
      this.server = Server.get({id: $stateParams.id});
      this.charts = Charts.serverCharts({serverId: $stateParams.id});
      this.start = function() {
        if (confirm('Вы хотите запустить сервер?')) {
          this.server.$start(function() {
            NotificationService.showSuccess('Сервер запущен');
          });
        }
      };
      this.stop = function() {
        if (confirm('Вы хотите остановить сервер?')) {
          this.server.$stop(function() {
            NotificationService.showSuccess('Сервер остановлен');
          });
        }
      };
    }],
};

export {serversView};
