import { useState, useEffect, useCallback } from "react";
import axios from "axios";
// let axios = require("axios");

//const baseUrl = "https://randomuser.me/"
//endPoint = api
const useGetRandomUserData = (baseUrl = "", endPoint = "") => {
  //   axios
  //     .get("https://randomuser.me/api")
  //     //@ts-ignore
  //     .then((data) => console.log(data.data.results));

  const [data, setData] = useState<any>();

  const fetchRandomUser = async () => {
    try {
      const response = await axios.get(`${baseUrl}${endPoint}`);
      const resData = response.data.results;
      //   console.log(resData);
      setData(resData);
      //   console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  return data;
};

export default useGetRandomUserData;
