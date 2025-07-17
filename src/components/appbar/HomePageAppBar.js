import logo from "../../assets/images/app_bar.png";


function HomePageAppBar(){
    return ( <header className="app-bar">

            <nav className="nav-items">
                  <div className="logo-text-group">
                     <img src={logo} alt="App Logo" className="app-bar-logo" />
                     <div >TreadSphere</div>
                 </div>
                 <div className="app-bar-child"> <span>Home</span>
              <span>Shop</span>
              <span>Sheller</span>
              <span>Insights</span>
              <span>About us</span>
                 </div>
                 <div className="tralling-icon-app-bar"><span>👤Signup</span>
                 <span>🔍</span>
                 <span>
                  🛒
                 {/* <i class="fas fa-clock" style={{ fontSize: "48px", color: "red" }}
                    ></i> */}
                 </span>
                  <span class="emoji-container">🙎‍♂️</span>
                 </div>
            </nav>
           
            
          </header>)
}
export default HomePageAppBar;