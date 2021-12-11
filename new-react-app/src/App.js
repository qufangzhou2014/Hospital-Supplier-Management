


function Login() {
  const secColor = {
     backgroundColor: '61839a'
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
    color: "ff6219"
  };

  const stySpc = {
    letterSpacing: "1px"
  }

  
  const styCollr2 = {
    color: "393f81"
  }


  
  return (
    <section class="vh-100" style={secColor} >
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-10">
              <div class="card" style={borradius}>
                <div class="row g-0">
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="/img/login.jpg"  alt="login form" 
                      class="img-fluid" style={styMultiple}
                    />
                  </div>
                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">
      
                      <form>
      
                        <div class="d-flex align-items-center mb-3 pb-1">
                          <i class="fas fa-cubes fa-2x me-3" style={styColr}></i>
                          <span class="h1 fw-bold mb-0"></span>
                        </div>
      
                        <h5 class="fw-normal mb-3 pb-3" style={stySpc}>Sign into your account</h5>
      
                        <div class="form-outline mb-4">
                          <input type="email" id="form2Example17" class="form-control form-control-lg" />
                          <label class="form-label" for="form2Example17">User Name</label>
                        </div>
      
                        <div class="form-outline mb-4">
                          <input type="password" id="form2Example27" class="form-control form-control-lg" />
                          <label class="form-label" for="form2Example27">Password</label>
                        </div>
      
                        <div class="pt-1 mb-4">
                          <button class="btn btn-dark btn-lg btn-block" type="button">Login</button>
                        </div>
      
                        <p class="mb-5 pb-lg-2" style={styCollr2}>Don't have an account? <a href="#!" style={styCollr2}>Register here</a></p>
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
