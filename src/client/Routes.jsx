import PatientRoutes from './components/Patient/Route.js';
const Routes = [
  {
    path: '/',
    component : require('./components/Layout/Index.jsx').default,
    indexRoute :{
      component: require('./hello.jsx').default
    },
    childRoutes: [
      PatientRoutes
    ]
  }
];
export default Routes;
