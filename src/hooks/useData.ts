import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { InitialData } from "../types";

const initialData = {
  loading: true,
  hasError: false,
  data: [],
};

//baseUrl - https://fakestoreapi.com/
// endpoint - products
const useData = (baseUrl = "", endPoint = "") => {
  const [data, setData] = useState<InitialData>(initialData);

  const fetchData = async () => {
    setData(initialData);
    try {
      const response = await axios.get(`${baseUrl}${endPoint}`);
      setData((prev: InitialData) => ({
        ...prev,
        data: response.data,
      }));
    } catch (e: any) {
      setData((prev: InitialData) => ({
        ...prev,
        hasError: e,
      }));
    } finally {
      setData((prev: InitialData) => ({
        ...prev,
        loading: false,
      }));
    }
  };

  const getData = useCallback(() => {
    fetchData();
  }, [baseUrl, endPoint]);

  //  useProfile
  useEffect(() => {
    let mounted = true;
    if (!mounted) return;

    if (!baseUrl || !endPoint) return;
    getData();

    return () => {
      mounted = false;
    };
  }, [baseUrl, endPoint]);

  return {
    data,
    setData,
    fetchData,
  };
};

export default useData;
