import React, { useContext } from "react";
import "./State.css";
import { DataContext } from "../../Context/DataContext";

function StateComponent() {
  const [data, setData, search, setSearch] = useContext(DataContext);

  const tableRender = (ele) => {
    let fragment = ele.map((state) => {
      return (
        <tr>
          <td>{state.name}</td>
          <td>
            {state.confirmed
              ? state.confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : ""}
          </td>
          <td>
            {" "}
            {(state.confirmed - (state.recovered + state.deceased))
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </td>
          <td>
            {state.confirmed
              ? state.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : ""}
          </td>
          <td>
            {state.confirmed
              ? state.deceased.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : ""}
          </td>
          <td>
            {state.confirmed
              ? state.tested.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : ""}
          </td>
        </tr>
      );
    });
    return fragment;
  };
  return (
    <div className="state">
      <table>
        <tr>
          <th>State</th>
          <th>Confirmed</th>
          <th>Active</th>
          <th>Recovered</th>
          <th>Decesed</th>
          <th>Tested</th>
        </tr>
        {search.length > 0 ? tableRender(search) : tableRender(data)}
      </table>
    </div>
  );
}

export default StateComponent;
