import React, { useContext } from "react";
import "./Search.css";
import { DataContext } from "../../Context/DataContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SearchComponent() {
  const [data, setData, search, setSearch, defaultStart, setDefaultStart] =
    useContext(DataContext);
  let confirmed = data.map((e) => e.confirmed).reduce((a, b) => a + b);
  let recovered = data.map((e) => e.recovered).reduce((a, b) => a + b);
  let deceased = data.map((e) => e.deceased).reduce((a, b) => a + b);
  let active = confirmed - (deceased + recovered);

  const searchState = (e) => {
    let input = e.target.value;
    let stateFound = [];
    if (input === "") {
      setDefaultStart(true);
      setSearch(data);
    } else {
      stateFound = data.filter((state) => {
        if (state.name.toLowerCase().includes(input.toLowerCase()))
          return state;
      });
      console.log(stateFound);
      if (stateFound.length === 0) {
        // toast.error("No state found");
        setDefaultStart(false);
      } else {
        setDefaultStart(true);
      }
      setSearch(stateFound);
    }
  };

  return (
    <div>
      {/* <ToastContainer theme="colored" /> */}
      <div className="search">
        <p>Search your state</p>
        <input
          onChange={searchState}
          type="text"
          className="fas"
          placeholder="Search"
        />
        <div className="conatiners">
          <div className="confirmed">
            <p>Confirmed</p>
            <h1>
              {confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h1>
          </div>
          <div className="active">
            <p>Active</p>
            <h1>{active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
          </div>
          <div className="recovered">
            <p>Recovered</p>
            <h1>
              {recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h1>
          </div>
          <div className="deceased">
            <p>Deceased</p>
            <h1>{deceased.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
