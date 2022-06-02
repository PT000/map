
import './App.css';
import { Outlet, Link } from "react-router-dom";
const divStyleTop = {textAlign:'center'};
export default function App({children}) {
  return (
    
    <div style={divStyleTop}>
      <h1>Aussie states</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          textAlign: 'center'
        }}
      ><Link to="/NewSouthWales">New South Wales</Link> |{" "}
      ><Link to="/Queensland">Queensland</Link> |{" "}
      ><Link to="/SouthAustralia">South Australia</Link> |{" "}
      ><Link to="/Tasmania">Tasmania</Link> |{" "}
      ><Link to="/Victoria">Victoria</Link> |{" "}
      ><Link to="/WesternAustralia">Western Australia</Link> |{" "}
        
      </nav>
      <Outlet />
    </div>
  );
}
