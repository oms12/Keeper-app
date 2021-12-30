import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
function handlesubmit()
{
  localStorage.removeItem("mytoken");
  localStorage.removeItem("myname");
  window.location.href = '/';
}

function Header() {
  return (
    <header>
      <div className="item item1" >
        <HighlightIcon style={{ fontSize: 25 }} />
        Keeper
      </div>
      <div className="item item2">
       Hello {localStorage.getItem("myname")}
      </div>
      <div className="item item3">
      <button className = "btn" type="submit" onClick={handlesubmit} >logout</button>
      </div>
    </header>
  );
}

export default Header;
