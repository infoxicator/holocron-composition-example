import React from 'react';
import { Route } from '@americanexpress/one-app-router';
import ModuleRoute from 'holocron-module-route';

const childRoutes = () => [
  <Route path="/" />,
  <ModuleRoute path="detail-route" moduleName="first-child" />,
  <ModuleRoute path="list-route" moduleName="grand-child" />,
];

export default childRoutes;
