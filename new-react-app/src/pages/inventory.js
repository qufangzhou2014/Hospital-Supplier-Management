import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import {useDispatch} from 'react-redux';
import {setInventory} from '../feature/inventorySlice';

function Inventory() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [inventoryList, setInventoryList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/inventory/")
      .then((res) => {
        console.log(res.data);
        setInventoryList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const secColor = {
    backgroundColor: "#61839a",
  };

  const styCollr2 = {
    color: "white",
  };

  const getBack = () => {
    history.push("/mainpage");
  };

  const editInventory = (id) => {
      const inventoryToUpdate = inventoryList.find(inventory => inventory.id === id);
      dispatch(setInventory(inventoryToUpdate));
      history.push("/editinventory")
  }

  const addProduct  = () => {
      history.push("/addinventory");
  };


  const deleteInventory = (id) => {
    if (window.confirm("Are you sure you want to delete this inventory?")) {
      axios
        .delete(`http://localhost:8081/inventory/delete/${id}`)
        .then((response) => {
          if (response.data === "Inventory deleted successfully") {
            alert("Inventory deleted successfully!");
            window.location.reload(false);
          }
        })
        .catch((err) => {
          console.log(err);
          alert(`${err.message}`);
        });
    }
  };

  return (
    <body style={secColor}>
      <div class="container">
        <h2>Inventory Details:</h2>

        <div class="table">
          <table
            class="table table-borded table-responsive table-striped "
            id="table-list"
            style={styCollr2}
          >
            <thead class="table-dark">
              <tr>
                <th>product_id</th>
                <th>product_name</th>
                <th>units_available</th>
                <th>units_required</th>
                <th>unit_price</th>
              </tr>
            </thead>
            <tbody>
              {inventoryList &&
                inventoryList.length > 0 &&
                inventoryList.map((inventory) => {
                  return (
                    <tr>
                      <td>{inventory.productId}</td>
                      <td>{inventory.productName}</td>
                      <td>{inventory.unitsAvailable}</td>
                      <td>{inventory.unitsRequired}</td>
                      <td>{`$${inventory.unitPrice}`}</td>
                      <td>
                        <button
                          onClick={() => {
                            editInventory(inventory.id);
                          }}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            deleteInventory(inventory.id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div>
            <button
              class="btn btn-info"
              id="add"
              style={{ marginRight: "80px" }}
              onClick={addProduct}
            >
              <span class="fa fa-plus-sign"></span>Add
            </button>
            <button class="btn btn-info" id="add" onClick={getBack}>
              <span class="fa fa-plus-sign"></span>Back
            </button>
          </div>
        </div>
      </div>
    </body>
  );
}
export default Inventory;
