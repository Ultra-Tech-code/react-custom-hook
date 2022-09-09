import { Fragment, useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader";
import ErrorComponent from "./components/ErrorComponent";
import ProductsCom from "./components/Products";
import axios from "axios";
import useCounter from "./hooks/useCounter";
import useData from "./hooks/useData";
import useGetRandomUserData from "./hooks/useRandomUser";
import Profile from "./components/ProfileComponent";
// import axios from 'axios';

export const instance = axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

type Count = {
  rate: number;
  count: number;
};
type Data = {
  image: string;
  id: number;
  title: string;
  price: number;
  description: string;
  rating: Count;
};
const defaultData: Data[] = [];
const defaultValue = 120;

const apiUrl = "https://fakestoreapi.com/";
const Products = () => {
  const { data: response, fetchData } = useData(apiUrl, "products");
  const { data, loading, hasError } = response;

  const { counter, handleDecrement, handleIncrement, handleReset } =
    useCounter(12);
  // console.log("===========logging random user");

  useGetRandomUserData("https://randomuser.me/", "api");
  const info = useGetRandomUserData("https://randomuser.me/", "api");
  // console.log(info);
  // const newData = JSON.stringify(info);
  // console.log(newData);

  const _data = (
    <>
      {" "}
      <ProductsCom data={data} />
    </>
  );

  const _loading = loading ? <Loader /> : "";
  const _error = hasError ? (
    <ErrorComponent text={hasError} retry={fetchData} />
  ) : (
    ""
  );
  console.log(hasError, "hasError");
  return (
    <>
      <div>
        <h1>{counter}</h1>
        <button className="p-3 border border-red-400" onClick={handleIncrement}>
          Increment
        </button>
        <button className="p-3 border border-red-400" onClick={handleDecrement}>
          Decrement
        </button>
        <button className="p-3 border border-red-400" onClick={handleReset}>
          Reset
        </button>
      </div>
      <div>{/* <h3>{newData.gender}</h3> */}</div>
      <Profile data={info} />
      {_data}
      {_error}
      {_loading}
    </>
  );
};

const App = () => {
  return (
    <Fragment>
      <Products />
    </Fragment>
  );
};

export default App;
