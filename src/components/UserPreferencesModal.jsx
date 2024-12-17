import React, { useState } from 'react';
import axios from 'axios';

const UserPreferencesModal = () => {
  const [preferences, setPreferences] = useState({
    promotions: true,
    orderUpdates: true,
  });

  const handleSave = async () => {
    try {
      await axios.post('/api/preferences', preferences);
      alert('Preferences updated!');
    } catch (err) {
      console.error('Failed to update preferences:', err);
    }
  };

  return (
    <div>
      <h2>Notification Preferences</h2>
      <label>
        <input
          type="checkbox"
          checked={preferences.promotions}
          onChange={(e) =>
            setPreferences((prev) => ({ ...prev, promotions: e.target.checked }))
          }
        />
        Promotions
      </label>
      <label>
        <input
          type="checkbox"
          checked={preferences.orderUpdates}
          onChange={(e) =>
            setPreferences((prev) => ({
              ...prev,
              orderUpdates: e.target.checked,
            }))
          }
        />
        Order Updates
      </label>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default UserPreferencesModal;
