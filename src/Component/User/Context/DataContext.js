import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext();

export function FetchData({ children }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching data from http://localhost:5050/newProducts");
    fetch("http://localhost:5050/newProducts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data fetched successfully:", data);
        setData(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error.message);
        setError(error.message);
      });
  }, []);

  const [datas, setDatas] = useState({
    email: "",
    password: "",
  });

  const storedcurrent = localStorage.getItem("current");
  const [current, setCurrent] = useState(
    storedcurrent ? JSON.parse(storedcurrent) : null
  );

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatas({ ...datas, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:5050/Users");
      const users = response.data;

      const user = users.find(
        (user) => user.email === datas.email && user.password === datas.password
      );

      if (user) {
        localStorage.setItem("current", JSON.stringify(user));
        setCurrent(user);
        alert("Login successfully completed");
        setDatas({ email: "", password: "" });
        navigate("/");
      } else {
        alert("Incorrect email or password");
      }
    } catch (error) {
      console.log("Error occurred during login:", error);
    }
  };

  const handleCreateAccount = () => {
    navigate("/signup");
  };

  return (
    <DataContext.Provider
      value={{
        data,
        error,
        handleChange,
        handleSubmit,
        handleCreateAccount,
        datas,
        current,
        setCurrent,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
