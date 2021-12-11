import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { resetInventory } from "../feature/inventorySlice";
export const EditInventory = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const inventory = useSelector(state => state.inventory.inventory);
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [unitsRequired, setUnitsRequired] = useState("");
  const [unitsAvailable, setUnitsAvailable] = useState("");
  const [unitPrice, setUnitPrice] = useState("");

  const secColor = {
    backgroundColor: "#61839a",
  };

  const borradius = {
    borderRadius: "15px",
  };

  const addProduct = (e) => {
    e.preventDefault();
    const updateInventory = {
      productId: productId === '' ? inventory.productId : productId,
      productName: productName === '' ? inventory.productName : inventory.productName,
      unitsRequired: unitsRequired === '' ? inventory.unitsRequired : unitsRequired,
      unitsAvailable: unitsAvailable === '' ? inventory.unitsAvailable : unitsAvailable,
      unitPrice: unitPrice === '' ? inventory.unitPrice : unitPrice,
    };
    axios
      .post(`http://localhost:8081/inventory/update/${inventory.id}`, updateInventory)
      .then((response) => {
        if (response.data === "Inventory updated successfully") {
          alert("Inventory updated successfully!");
          dispatch(resetInventory());
          history.push("/inventory");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className="vh-100" style={secColor}>
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div
              className="card shadow-2-strong card-registration"
              style={borradius}
            >
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                  Edit Inventory Form
                </h3>
                <form onSubmit={addProduct}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          onChange={(e) => setProductId(e.target.value)}
                          defaultValue={inventory.productId}
                        />
                        <label className="form-label">Inventory ID</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          onChange={(e) => setProductName(e.target.value)}
                          defaultValue={inventory.productName}
                        />
                        <label className="form-label">Inventory Name</label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline datepicker w-100">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          onChange={(e) => setUnitsRequired(e.target.value)}
                          defaultValue={inventory.unitsRequired}
                        />
                        <label className="form-label">Units Required</label>
                      </div>
                    </div>

                    <div className="col-md-6 mb-4">
                      <div className="form-outline datepicker w-100">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          onChange={(e) => setUnitsAvailable(e.target.value)}
                          defaultValue={inventory.unitsAvailable}
                        />
                        <label className="form-label">Units Available</label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          onChange={(e) => setUnitPrice(e.target.value)}
                          defaultValue={inventory.unitPrice}
                        />
                        <label className="form-label">Unit Price</label>
                      </div>
                    </div>
                  </div>

                
                  <div className="mt-4 pt-2">
                    <input
                      className="btn btn-primary btn-lg"
                      type="submit"
                      value="Update"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
