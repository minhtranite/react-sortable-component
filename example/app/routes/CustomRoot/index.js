export default {
  path: 'custom-root',
  getComponent(location, callback) {
    require.ensure([], require => {
      callback(null, require('components/pages/CustomRoot'));
    }, 'page-custom-root');
  },
  getChildRoutes(location, callback) {
    require.ensure([], () => {
      callback(null, []);
    }, 'page-custom-root');
  }
};
