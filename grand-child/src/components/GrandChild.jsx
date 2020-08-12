import React from 'react';
import { Link } from '@americanexpress/one-app-router';
import films from '../films.json';

const GrandChild = () => (
  <fieldset style={{ border: '1px red solid', margin: '2rem' }}>
    <legend style={{ border: '1px red solid', margin: '1em', padding: '0.2em 0.8em' }}>List Module</legend>
    <ul className="list-unstyled">
      {films.map((film) => (
        <div key={film.episode_number}>
          <Link to="detail-route" className="deco-none">
            {film.title}
          </Link>
        </div>
      ))}
    </ul>
  </fieldset>
);

export default GrandChild;
