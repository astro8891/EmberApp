define('library-app/router', ['exports', 'ember', 'library-app/config/environment'], function (exports, _ember, _libraryAppConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _libraryAppConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});