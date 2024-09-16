import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    e.stop.progragation();

    const response = await ("http://localhost:5000/login",
    {
      method: "POST",
      body: {
        username: formData.username,
        password: formData.password,
      },
    });
    console.log(response.data);
  };
  return (
    <div className="h-full w-full flex justify-center align-middle">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Login</h1>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="username" className="sr-only">
                user name
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={(event) => {
                  setFormData({ ...formData, username: event.target.value });
                }}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray"
                placeholder="user name"
              />
            </div>
            <div>
              <label for="password" className="sr-only">
                password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(event) => {
                  setFormData({ ...formData, password: event.target.value });
                }}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray"
                placeholder="password"
              />
            </div>
          </div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-black text-sm"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
