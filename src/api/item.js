import axios from "axios";

export const fetchItems = async () => {
  const { data } = await axios.get("http://localhost:5000/api/items", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return data;
};

export const createItem = async (item) => {
  const { data } = await axios.post("http://localhost:5000/api/items", item, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return data;
};

export const updateItem = async (id, item) => {
  const { data } = await axios.put(
    `http://localhost:5000/api/items/${id}`,
    item,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return data;
};

export const deleteItem = async (id) => {
  await axios.delete(`http://localhost:5000/api/items/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
