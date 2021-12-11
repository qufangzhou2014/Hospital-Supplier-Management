import {Link}  from "react-router-dom";
const Mainpage = () => {
    const secColor = {
      backgroundColor: '#61839a'
    };

    const stlWidth = {
        width: "100%"
      };
    
    const stlColr = {
        color: "white"
    };

    const linkStyle = {
      backgroundColor: '#f44336',
      color: "white",
      padding: "14px 10px",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
    };
   

    return (
        <section className="vh-150" style={secColor}  >
        <section className="py-5 text-left container">
            <img src="/img/main.jpg" className="img-responsive" alt="image1" style={stlWidth}/>
            <div className="row py-lg-5">
              
              <div className="col-lg-8 col-md-6 mx-auto" style={stlColr}>
                <h1 className="fw-light">Welcome to Hospital Supplier Management Page!!</h1>
                <div className="container">
                    <div className="row" >
                            <div className="col-sm-4" style={{marginBottom: '20px'}}>
                            
                            <Link to="/vendor" style={linkStyle}>Vendor</Link>
                            </div>
                            <div className="col-sm-4">
                            <Link to="/inventory" style={linkStyle}>Inventory</Link>
                        
                            </div>
                            <div className="col-sm-4">
                            <Link to="/user" style={linkStyle}>User</Link>
                            </div>

                            <div className="col-sm-4">
                            <Link to="/" style={linkStyle}>Logout</Link>
                            </div>
                    </div>
                </div>
              </div>
            </div>
        
      </section>
    </section>
    );
    }
  
  export default Mainpage;
  
  
    