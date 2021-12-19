import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [data, setData] = useState([5, 5]);
  const [search, setSearch] = useState([]);
  const [defaultStart, setDefaultStart] = useState(true);

  useEffect(() => {
    axios
      .get("https://data.covid19india.org/v4/min/data.min.json")
      .then((res) => {
        let newData = [];
        let state = [
          "Andaman and Nicobar Islands",
          "Andhra Pradesh",
          "Arunachal Pradesh",
          "Assam",
          "Bihar",
          "Chandigarh",
          "Chattisgarh",
          "Delhi",
          "Dadra and Nagar Haveli",
          "Goa",
          "Gujarat",
          "Himachal Pradesh",
          "Haryana",
          "Jharkhand",
          "Jammu and Kashmir",
          "Karnataka",
          "Kerala",
          "Ladakh",
          "Lakshadweep Islands",
          "Maharashtra",
          "Meghalaya",
          "Manipur",
          "Madhya Pradesh",
          "Mizoram",
          "Nagaland",
          "Odisha",
          "Punjab",
          "Pondicherry",
          "Rajasthan",
          "Sikkim",
          "Telangana",
          "Tamil Nadu",
          "Tripura",
          "Other Territory",
          "Uttar Pradesh",
          "Uttarakhand",
          "West Bengal",
        ];
        let states = [
          "AN",
          "AP",
          "AR",
          "AS",
          "BR",
          "CH",
          "CT",
          "DL",
          "DN",
          "GA",
          "GJ",
          "HP",
          "HR",
          "JH",
          "JK",
          "KA",
          "KL",
          "LA",
          "LD",
          "MH",
          "ML",
          "MN",
          "MP",
          "MZ",
          "NL",
          "OR",
          "PB",
          "PY",
          "RJ",
          "SK",
          "TG",
          "TN",
          "TR",
          "TT",
          "UP",
          "UT",
          "WB",
        ];
        states.forEach((ele, ind) => {
          let obj = {
            name: state[ind],
            confirmed: res.data[ele].total.confirmed,
            deceased: res.data[ele].total.deceased,
            recovered: res.data[ele].total.recovered,
            tested: res.data[ele].total.tested,
          };
          newData.push(obj);
        });
        setData(newData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <DataContext.Provider
      value={[data, setData, search, setSearch, defaultStart, setDefaultStart]}
    >
      {props.children}
    </DataContext.Provider>
  );
};
