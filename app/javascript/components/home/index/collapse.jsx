import React, { useState, useEffect } from 'react';
import { Collapse } from 'bootstrap';


const Container = () => {
  var [toggle, setToggle] = useState(false);

  useEffect(() => {
      var myCollapse = document.getElementById('collapseTarget')
      var bsCollapse = new Collapse(myCollapse, {toggle: false})
      toggle ? bsCollapse.show() : bsCollapse.hide()
  })

  return (
    <div className="py-2">
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
      </div>
      <button className="btn btn-primary" onClick={() => setToggle(toggle => !toggle)}>
          Toggle collapse
      </button>
      <div className="collapse" id="collapseTarget">
          This is the collapsible content!
      </div>
    </div>
  )
}

export default Container;
