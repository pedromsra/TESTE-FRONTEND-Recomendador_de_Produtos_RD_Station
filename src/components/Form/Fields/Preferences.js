// Preferences.js

import React, { useState } from 'react';
import Checkbox from '../../shared/Checkbox';
import OptionsListPlaceHolder from '../../shared/OptionsListPlaceHolder';

function Preferences({
  loading,
  preferences,
  selectedPreferences = [],
  onPreferenceChange,
}) {
  const [currentPreferences, setCurrentPreferences] =
    useState(selectedPreferences);

  const handlePreferenceChange = (preference) => {
    const updatedPreferences = currentPreferences.includes(preference)
      ? currentPreferences.filter((pref) => pref !== preference)
      : [...currentPreferences, preference];

    setCurrentPreferences(updatedPreferences);
    onPreferenceChange(updatedPreferences);
  };

  return (
    <section className="mb-4">
      <h2 className="text-lg font-bold mb-2">Preferências:</h2>
      {loading && (
        <OptionsListPlaceHolder />
      )}
      {!loading && preferences.length > 0 && (
        <ul data-testid="preferences-list">
          {preferences.map((preference, index) => (
            <li key={index} className="mb-2">
              <Checkbox
                value={preference}
                checked={currentPreferences.includes(preference)}
                onChange={() => handlePreferenceChange(preference)}
                className="text-blue-500"
              >
                {preference}
              </Checkbox>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Preferences;
