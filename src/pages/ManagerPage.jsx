import React, { useEffect, useState } from "react";
import { fetchItems, createItem, updateItem, deleteItem } from "../api/item";

const ManagerPage = () => {
  const [items, setItems] = useState([]);
  const [itemForm, setItemForm] = useState({
    itemName: "",
    price: "",
    qty: "",
  });
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    const loadItems = async () => {
      const items = await fetchItems();
      setItems(items);
    };
    loadItems();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingItem) {
      await updateItem(editingItem._id, itemForm);
    } else {
      await createItem(itemForm);
    }
    setItemForm({ itemName: "", price: "", qty: "" });
    setEditingItem(null);
    const items = await fetchItems();
    setItems(items);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setItemForm({ itemName: item.itemName, price: item.price, qty: item.qty });
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    const items = await fetchItems();
    setItems(items);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Manager Dashboard
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <input
          type="text"
          placeholder="Item Name"
          value={itemForm.itemName}
          onChange={(e) =>
            setItemForm({ ...itemForm, itemName: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Price"
          value={itemForm.price}
          onChange={(e) => setItemForm({ ...itemForm, price: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={itemForm.qty}
          onChange={(e) => setItemForm({ ...itemForm, qty: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {editingItem ? "Update" : "Add"} Item
        </button>
      </form>

      <div className="mt-8 max-w-lg mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Items List</h3>
        {items.map((item) => (
          <div
            key={item._id}
            className="bg-white p-4 mb-4 rounded-lg shadow-md flex items-center justify-between"
          >
            <p className="text-lg font-medium">
              {item.itemName} - Quantity:{item.qty} - {item.price} Rupees
            </p>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(item)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagerPage;
