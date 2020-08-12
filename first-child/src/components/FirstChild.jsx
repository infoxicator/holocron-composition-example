import React from 'react';
import { composeModules, RenderModule } from 'holocron';

const FirstChild = () => (
  <div>
    <fieldset style={{ border: '1px blue solid', margin: '2rem' }}>
      <legend style={{ border: '1px blue solid', margin: '1em', padding: '0.2em 0.8em' }}>Detail Module</legend>
      <h1>
        STAR WARS: THE EMPIRE STRIKES BACK
      </h1>
      <p>While the Death Star has been destroyed, the battle between the Empire and the Rebel Alliance rages on
        ...and the evil Darth Vader continues his relentless search for Luke Skywalker.
      </p>
      <RenderModule moduleName="grand-child" />
    </fieldset>
  </div>
);

const loadModuleData = ({ store: { dispatch } }) => dispatch(composeModules([
  { name: 'grand-child' },
]));

FirstChild.holocron = {
  name: 'first-child',
  loadModuleData,
};

export default FirstChild;
