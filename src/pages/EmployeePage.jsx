import React, { useEffect, useState } from "react";
import { fetchProfiles, updateProfile } from "../api/profile";

const EmployeePage = () => {
  const [profiles, setProfiles] = useState([]);
  const [profileForm, setProfileForm] = useState({
    name: "",
    email: "",
    designation: "",
  });
  const [editingProfile, setEditingProfile] = useState(null);

  useEffect(() => {
    const loadProfiles = async () => {
      const profiles = await fetchProfiles();
      setProfiles(profiles);
    };
    loadProfiles();
  }, []);

  const handleEdit = (profile) => {
    setEditingProfile(profile);
    setProfileForm({
      name: profile.name,
      email: profile.email,
      designation: profile.designation,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProfile(editingProfile._id, profileForm);
    setProfileForm({ name: "", email: "", designation: "" });
    setEditingProfile(null);
    const profiles = await fetchProfiles();
    setProfiles(profiles);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Employee Dashboard
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <input
          type="text"
          placeholder="Name"
          value={profileForm.name}
          onChange={(e) =>
            setProfileForm({ ...profileForm, name: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          value={profileForm.email}
          onChange={(e) =>
            setProfileForm({ ...profileForm, email: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Designation"
          value={profileForm.designation}
          onChange={(e) =>
            setProfileForm({ ...profileForm, designation: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Update Profile
        </button>
      </form>

      <div className="mt-8 max-w-md mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Profiles List</h3>
        {profiles.map((profile) => (
          <div
            key={profile._id}
            className="bg-white p-4 mb-4 rounded-lg shadow-md flex items-center justify-between"
          >
            <p className="text-lg font-medium">
              {profile.name} - {profile.designation}
            </p>
            <button
              onClick={() => handleEdit(profile)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeePage;
