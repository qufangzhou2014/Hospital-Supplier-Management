import { useHistory } from "react-router";
import { useState } from "react";
import axios from "axios";

export function AddVendor() {
  const history = useHistory();
  const [vendorId, setVendorId] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [website, setWebsite] = useState("");
  const [contactFirstName, setContactFirstName] = useState("");
  const [contactLastname, settContactLastname] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [contactTitle, setContactTitle] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");

  const secColor = {
    backgroundColor: "#61839a",
  };

  const borradius = {
    borderRadius: "15px",
  };

  const addVendor = (e) => {
      e.preventDefault();
      const newVendor = {
          vendorId:  vendorId,
          vendorName:  vendorName,
          url: website,
          contactFirstName: contactFirstName,
          contactLastname:  contactLastname,
          contactNumber: contactNumber,
          contactTitle:  contactTitle,
          email:  email,
          address:  address,
          serviceType: serviceType,
          unitPrice:  unitPrice,
          productId: productId,
          productName:  productName,
      };
      axios.post(`http://localhost:8081/vendors/save/`, newVendor)
      .then(response => {
          if (response.data === 'Vendor added successfully!') {
              alert("Vendor added successfully!");
              history.push("/vendor");
          }
      })
      .catch(err => {
        console.log(err);
        alert(`${err.message}`);
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
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">New Vendor Form</h3>
                <form onSubmit={addVendor}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="firstName"
                          className="form-control form-control-lg"
                          onChange={(e) => setVendorId(e.target.value)}
                          value={vendorId}
                        />
                        <label className="form-label">vendor_id</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="lastName"
                          className="form-control form-control-lg"
                          onChange={(e) => setVendorName(e.target.value)}
                          value={vendorName}
                        />
                        <label className="form-label">vendor_name</label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline datepicker w-100">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          onChange={(e) => setWebsite(e.target.value)}
                          value={website}
                        />
                        <label className="form-label">website</label>
                      </div>
                    </div>

                    <div className="col-md-6 mb-4">
                      <div className="form-outline datepicker w-100">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          onChange={(e) => setContactFirstName(e.target.value)}
                          value={contactFirstName}
                        />
                        <label className="form-label">contact_firstname</label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="emailAddress"
                          className="form-control form-control-lg"
                          onChange={(e) => settContactLastname(e.target.value)}
                          value={contactLastname}
                        />
                        <label className="form-label">contact_lastname</label>
                      </div>
                      <div className="form-outline">
                        <input
                          type="role"
                          id="designation"
                          className="form-control form-control-lg"
                          onChange={(e) => setContactNumber(e.target.value)}
                          value={contactNumber}
                        />
                        <label className="form-label">contact_number</label>
                      </div>
                      <div className="form-outline">
                        <input
                          id="password"
                          className="form-control form-control-lg"
                          onChange={(e) => setContactTitle(e.target.value)}
                          value={contactTitle}
                        />
                        <label className="form-label">contact_title</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input
                          id="phoneNumber"
                          className="form-control form-control-lg"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                        <label className="form-label">email</label>
                      </div>
                      <div className="form-outline">
                        <input
                          id="address"
                          className="form-control form-control-lg"
                          onChange={(e) => setAddress(e.target.value)}
                          value={address}
                        />
                        <label className="form-label">address</label>
                      </div>
                      <div className="form-outline">
                        <input
                          id="address"
                          className="form-control form-control-lg"
                          onChange={(e) => setServiceType(e.target.value)}
                          value={serviceType}
                        />
                        <label className="form-label">service_type</label>
                      </div>
                      <div className="row">
                        <div className="form-outline">
                          <input
                            id="address"
                            className="form-control form-control-lg"
                            onChange={(e) => setProductId(e.target.value)}
                            value={productId}
                          />
                          <label className="form-label">product_id</label>
                        </div>
                        <div className="form-outline">
                          <input
                            id="address"
                            className="form-control form-control-lg"
                            onChange={(e) => setProductName(e.target.value)}
                            value={productName}
                          />
                          <label className="form-label">product_name</label>
                        </div>
                        <div className="form-outline">
                          <input
                            id="address"
                            className="form-control form-control-lg"
                            onChange={(e) => setUnitPrice(e.target.value)}
                            value={unitPrice}
                          />
                          <label className="form-label">unit_price</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-2">
                    <input
                      className="btn btn-primary btn-lg"
                      type="submit"
                      value="Submit"
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
}
