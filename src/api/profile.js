import axios from "axios";

export const fetchProfiles = async () => {
  const { data } = await axios.get("http://localhost:5000/api/profiles", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return data;
};

export const updateProfile = async (id, profile) => {
  const { data } = await axios.put(
    `http://localhost:5000/api/profiles/${id}`,
    profile,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return data;
};
