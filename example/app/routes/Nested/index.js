export default {
  path: 'nested',
  getComponent(location, callback) {
    require.ensure([], require => {
      callback(null, require('components/pages/Nested'));
    }, 'page-nested');
  },
  getChildRoutes(location, callback) {
    require.ensure([], () => {
      callback(null, []);
    }, 'page-nested');
  }
};
