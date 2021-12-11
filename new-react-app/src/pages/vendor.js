import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { setVendor } from "../feature/vendorSlice";

function Vendor() {
  const [vendorList, setVendorList] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:8081/vendors/")
      .then((res) => {
        console.log(res);
        setVendorList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const secColor = {
    backgroundColor: "#61839a",
    overflow: "auto",
  };

  const textStle = {
    textAlign: "center",
  };

  const styCollr2 = {
    color: "white",
  };

  const addRow = () => {
    history.push("/addvendor");
  };

  const editRow = (id) => {
    const vendorToUpdate = vendorList.find((vendor) => vendor.id === id);
    dispatch(setVendor(vendorToUpdate));
    history.push("/editvendor");
  };

  const deleteVendor = (index) => {
    const vendorToDelete = vendorList[index];
    if (window.confirm("Are you sure you want to delete this vendor?")) {
      axios
        .delete(`http://localhost:8081/vendors/delete/${vendorToDelete.id}`)
        .then((res) => {
          if (res.data === "Vendor deleted successfully") {
            alert("Vendor deleted successfully!");
            window.location.reload(false);
          }
        })
        .catch((err) => {
          alert(`${err.message}`);
          console.log(err.message);
        });
    }
  };

  const getBack = () => {
    history.push("/mainpage");
  };

  const purchaseProduct = (productId, productName, unitPrice) => {
      console.log(productId);
      console.log(productName);
      console.log(unitPrice);
    axios
      .post(
        `http://localhost:8081/vendors/purchase/${productId}/${productName}/${unitPrice}/`
      )
      .then((response) => {
          console.log(response);
        if (response.data === "Purchase Successfully") {
          alert("Purchase Successfully, Please check inventory page!");
        }
      })
      .catch((error) => {
        console.log(error.message);
        alert("Not able to purchase, something wrong!");
      });
  };

  return (
    <div style={secColor}>
      <div className="container">
        <h2>Vendor Details:</h2>
        <div className="table">
          <table
            className="table table-borded table-responsive table-striped "
            id="table-list"
            style={styCollr2}
          >
            <thead className="table-dark" style={textStle}>
              <tr>
                <th>vendor_id</th>
                <th>vendor_name</th>
                <th>website</th>
                <th>contact_firstname</th>
                <th>contact_lastname</th>
                <th>contact_number</th>
                <th>contact_title</th>
                <th>email</th>
                <th>address</th>
                <th>service_type</th>
                <th>product_id</th>
                <th>product_name</th>
                <th>unit_price</th>
              </tr>
            </thead>
            <tbody style={textStle}>
              {vendorList &&
                vendorList.length &&
                vendorList.map((vendor, index) => {
                  return (
                    <tr key={index}>
                      <td>{vendor.vendorId}</td>
                      <td>{vendor.vendorName}</td>
                      <td>{vendor.url}</td>
                      <td>{vendor.contactFirstName}</td>
                      <td>{vendor.contactLastname}</td>
                      <td>{vendor.contactNumber}</td>
                      <td>{vendor.contactTitle}</td>
                      <td>{vendor.email}</td>
                      <td>{vendor.address}</td>
                      <td>{vendor.serviceType}</td>
                      <td>{vendor.productId}</td>
                      <td>{vendor.productName}</td>
                      <td>{`$${vendor.unitPrice}`}</td>
                      <td>
                        <button onClick={() => editRow(vendor.id)}>Edit</button>
                      </td>
                      <td>
                        <button onClick={() => deleteVendor(index)}>
                          Delete
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() =>
                            purchaseProduct(
                              vendor.productId,
                              vendor.productName,
                              vendor.unitPrice
                            )
                          }
                        >
                          Purchase
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div>
            <button
              className="btn btn-info"
              id="add"
              onClick={addRow}
              style={{ marginRight: "80px", textAlign: "center" }}
            >
              <span className="fa fa-plus-sign"></span>Add
            </button>
            <button className="btn btn-info" id="add" onClick={getBack}>
              <span className="fa fa-plus-sign"></span>Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Vendor;
