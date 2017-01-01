import PubSub from 'pubsub-js';
const Routes = {
  path: 'patients',
  component : require('./index.js').default,
  indexRoute :{
    component: require('./list/index.js').default
  },
  childRoutes: [
    // {
    //     path: 'page/:page',
    //     getComponents(nextState, cb) {
    //         PubSub.publish('LOADING', true);
    //         require.ensure([], function (require) {
    //             PubSub.publish('LOADING', false);
    //             cb(null, require('./List').default);
    //         })
    //     }
    // },
    // {
    //     path: 'filter',
    //     getComponents(nextState, cb) {
    //         PubSub.publish('LOADING', true);
    //         require.ensure([], function (require) {
    //             PubSub.publish('LOADING', false);
    //             cb(null, require('./List').default);
    //         })
    //     }
    // },
    {
      path: 'create',
      component: require('./form').default
    },
    // {
    //     path: ':id',
    //     getComponents(nextState, cb) {
    //         require.ensure([], function (require) {
    //             // cb(null, require('./Details').default);
    //         })
    //     }
    // },
    {
      path: ':id/edit',
      component: require('./form').default
    },
    // {
    //   path: ':id/delete',
    //   getComponents(nextState, cb) {
    //     require.ensure([], function (require) {
    //       // cb(null, require('./Delete').default);
    //     })
    //   }
    // }
  ]
}
export default Routes;
