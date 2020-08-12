/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from '@americanexpress/one-app-router';
import childRoutes from '../childRoutes';
import logo from '../star-wars.svg';
import styles from './styles.scss';

const HolocronRoot = ({ children }) => (
  <React.Fragment>
    <fieldset style={{ border: '1px black solid' }}>
      <legend style={{ border: '1px black solid', margin: '1em', padding: '0.2em 0.8em' }}>Root Module</legend>
      <div className={styles.center}>
        <img src={logo} width={100} className={styles.center} />
      </div>
      <Link to="list-route" className="deco-none">
        List of Films
      </Link>
      { children }
    </fieldset>
  </React.Fragment>
);

// Read about childRoutes:
// https://github.com/americanexpress/one-app/blob/master/docs/api/modules/Routing.md#childroutes
HolocronRoot.childRoutes = childRoutes;

// Read about appConfig:
// https://github.com/americanexpress/one-app/blob/master/docs/api/modules/App-Configuration.md
/* istanbul ignore next */
if (!global.BROWSER) {
  // eslint-disable-next-line global-require
  HolocronRoot.appConfig = require('../appConfig').default;
}

export default HolocronRoot;
