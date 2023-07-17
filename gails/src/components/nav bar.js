import Less from "../images/less.png";
import Cancel from "../images/cancel image.jpg";
import Bells from "../images/bells.png";
import Menu from "../images/menu.png";
import Delete from "../images/delete.png";
import Breezy from "../images/breezy.webp";
import Google from "../images/google.png";


function NavigationBar() {
  return (
    <div className="nav">
      <div className="leftContainer" style={{ display: "flex" }}>
        <div className="left">
          {" "}
          <img src={Less} id="less" />
        </div>

        <div className="nav-opt">
          <button className="saveButton">SAVE</button>{" "}
          <div className="navlink">
            <img src={Cancel} id="cancel" />
            <div></div>
            <a href="#" className="navlink">
              CASCAND
            </a>
          </div>
          <div className="navlink">
            <img src={Delete} id="delete" />
            <a href="#" className="navlink">
              DELETE
            </a>
          </div>
        </div>
      </div>

      <div className="rightContainer">
        <div className="search-login">
          {" "}
          <img src={Google} id="google" />
          <img src={Breezy} id="breezy" />
        </div>
        <div className="Right">
          {" "}
          <img src={Bells} id="bells" />
          <img src={Menu} id="menu" />
        </div>
      </div>
    </div>
  );
}
export default NavigationBar;
