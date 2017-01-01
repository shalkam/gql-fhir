import PatientRoutes from './components/patient/route.js';
const Routes = [
  {
    path: '/',
    component : require('./components/layout/index.js').default,
    indexRoute :{
      component: require('./components/dashboard/index.js').default
    },
    childRoutes: [
      PatientRoutes
    ]
  }
];
export default Routes;
