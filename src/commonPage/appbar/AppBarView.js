import logo from "../../assets/images/app_bar.png";


const AppBarView = ({
   logoText = "TreadSphere",
   navItems = ["Home", "Shop", "Sheller", "Insights", "About us"],
   trailingIcons = ["👤 Signup", "🔍", "🛒", "🙎‍♂️"],
   onNavClick = () => { },
}) => {
   return (
      <header className="app-bar">
         <nav className="nav-items">
            <div className="logo-text-group">
               <img src={logo} alt="App Logo" className="app-bar-logo" />
               <div>{logoText}</div>
            </div>

            <div className="app-bar-child">
               {navItems.map((item, index) => (
                  <span
                     key={index}
                     onClick={() => onNavClick(item)}
                     style={{ cursor: "pointer" }}
                  >
                     {item}
                  </span>
               ))}
            </div>

            <div className="tralling-icon-app-bar">
               {trailingIcons.map((icon, index) => (
                  <span key={index}>{icon}</span>
               ))}
            </div>
         </nav>
      </header>
   );
};
export default AppBarView;