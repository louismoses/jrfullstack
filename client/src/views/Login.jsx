import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    if (id === "email") {
      setForm((prevState) => ({
        ...prevState,
        email: value,
      }));
    } else if (id === "password") {
      setForm((prevState) => ({
        ...prevState,
        password: value,
      }));
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="bg-gray-300 w-full h-screen">
      <div className="flex justify-center items-center h-full">
        <form onSubmit={handleLogin}>
          <div className="flex flex-col gap-2 items-end">
            <div className="flex gap-2">
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" onChange={handleInput} />
            </div>
            <div className="flex gap-2">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" onChange={handleInput} />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-teal-600 hover:bg-teal-800 px-5 py-1 rounded text-white"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
