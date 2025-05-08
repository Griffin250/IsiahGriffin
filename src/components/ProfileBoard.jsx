import React, { useEffect, useState } from "react";

function ProfileBoard({ keycloak }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (keycloak) {
      keycloak
        .loadUserProfile()
        .then((profile) => {
          setProfile(profile);
        })
        .catch((error) => {
          console.error("Failed to load user profile:", error);
        });
    }
  }, [keycloak]);

  const logout = () => {
    keycloak.logout();
  };

  return (
    <div className="p-4 font-sans">
      <h1 className="text-2xl font-bold mb-4">SecuraFlow Profile Dashboard</h1>

      {profile ? (
        <div className="space-y-2">
          <p>
            👤 Logged in as: <strong>{profile.username}</strong>
          </p>
          <p>📧 Email: {profile.email}</p>
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}

export default ProfileBoard;
