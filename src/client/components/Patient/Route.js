import PubSub from 'pubsub-js';
const Routes = {
  path: 'patients',
  getComponent(nextState, cb) {
    cb(null, require('./').default);
  },
  getIndexRoute(nextState, cb) {
    cb(null, { component: require('./List').default });
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
      getComponents(nextState, cb) {
        cb(null, require('./Form').default);
      }
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
      getComponents(nextState, cb) {
        cb(null, require('./Form').default);
      }
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
