import filterIcon from "../../assets/images/filter.svg";
import DropDownMenu from "../dropDown/DropDownMenu";

function FilterItems(){
    return(
          <div className="filter-content">
           <div className="filter">
     <img src={filterIcon} alt="Filter Icon" className="filter-icon" />
   <div className="filter-text">Filter</div>
  </div>
 <div className="dropdown-column">
  <div><DropDownMenu /></div>
  <div><DropDownMenu /></div>
  <div><DropDownMenu /></div>
</div>

        </div>
    )
}


export default FilterItems;