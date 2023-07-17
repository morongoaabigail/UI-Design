import Calendar from "../images/calendar.png";
import Calculator from "../images/calculator.png";

function Content1() {
  return (
    <div className="Cont1">
        <div className="middle">
            <form>
                <input type ="text" /> 
                <button id="saveevent">SAVE EVENT </button>
            </form>
           <div>
           {""}
            <img src ={Calendar} id="calendar"/>
            <a href="#" className="link1">All day</a>
            <img src={Calculator} id="calculator"/>
            
            <a href="#" className="link2"> Payment</a>
            </div>
            <button className="b1">5.00pm</button>
            <button className="b2">6.00pm</button>
            <button className="b3">11/23/2016</button>
            <button className="b4">11/23/2016</button>
            <h6 className="t">TIME TABLE</h6>

        </div>
        
      
        
    

        
    </div> 
        


      
  );
}
export default Content1;
