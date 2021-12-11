import React, {useState} from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';



function Login() {
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const secColor = {
     backgroundColor: '#61839a'
  };

  
  const borradius = {
    borderRadius: "15px"
  };

  const styMultiple = {
    borderRadius: "1rem 0 0 1rem",
    height: "100% ",
    objectFit: "cover"
  };

  const styColr = {
    color: "#ff6219"
  };

  const stySpc = {
    letterSpacing: "1px"
  }

  
  const styCollr2 = {
    color: "#393f81"
  }

  const signIn = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:8081/users/byUserIdAndPassword/${userName}/${password}`)
      .then((response) => {
        if (response.status === 200) {
          history.push("/mainpage");
        }
      }).catch(error => {
        alert('Your username and password are incorrect. Please try again!');
      });
   
  };


  
  return (
    <section className="vh-100" style={secColor} >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={borradius}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="/img/login.jpg"  alt="login form" 
                      className="img-fluid" style={styMultiple}
                    />
                  </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
      
                      < form onSubmit={signIn}>
      
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={styColr}></i>
                          <span className="h1 fw-bold mb-0"></span>
                        </div>
      
                        <h5 className="fw-normal mb-3 pb-3" style={stySpc}>Sign into your account</h5>
      
                        <div className="form-outline mb-4">
                          <input  id="form2Example17" className="form-control form-control-lg" onChange={(e) => setUserName(e.target.value)} value={userName}/>
                          <label className="form-label" htmlFor="form2Example17">User Name</label>
                        </div>
      
                        <div className="form-outline mb-4">
                          <input type="password" id="form2Example27" className="form-control form-control-lg"  onChange={(e) => setPassword(e.target.value)} value={password}/>
                          <label className="form-label" htmlFor="form2Example27">Password</label>
                        </div>
      
                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                        </div>
      
                        <p className="mb-5 pb-lg-2" style={styCollr2}>Don't have an account? <a href="/signup" style={styCollr2}>Register here</a></p>
                      </form>
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  );
}

export default Login;
