import Add from "../images/add.png";


function content2() {
  return (
    <div className="cont2">
      <div className="cont2left">
        <h3 className="text">Add Guests</h3>
        <form>
          <input type="text1" />
          <button id="addButton">add</button>
        </form>

        <form className="abi">
          <input type="checkbox" />
          <label id="box1">Invite others</label>
          <input type="checkbox" />
          <label id="box2">Modify event</label>
          <input type="checkbox" />
          <label id="box3">See Guest List</label>
        </form>

        <div className="trial">
          <select>
            <option>Public</option>
          </select>
          <select>
            <option>More actions</option>
          </select>
          


        </div>
        <p className="p">
          By deafyklt hgfiu hdufd mhfuyhfdmnjuhfijmadnuie
          nguidyiwmdhgi8buiydabduiey jhgiuyrh7hfioerjhfddjshflie hbduhfkh  bdksj jhbedkjes bduile nseruile.
        </p>
        <p className="more">More</p>
          <button className="publish">PUBLISH EVENT</button>
      </div>
      <div className="cont2right">
       
     
        
        <form className="inputL">
          <label id="where">Where</label>
          <input type="text2" id="name" placeholder="Enter location of the event"></input>
          <label id="description">Description</label>
          <input type="text3" id="name1"></input>
          

        </form>
        {""}
        <img src={Add} id="add"/>
        <p className="p1">Add participant</p>
        <p className="notification">Notification</p>
        <select>
          <option className="email">Email</option>
          </select>
          <select>
          <option className="manually">Manually</option>
        

          </select>
          


       
        
           <span class="dot-1"></span>
           <span class="dot-2"></span>
           <span class="dot-3"></span>
           <span class="dot-3"></span>

        
        </div>
     
        </div>
    
  );
}
export default content2;
