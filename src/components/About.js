import React, { useState } from 'react';

export default function About() {
  const [mystyle, updatemystyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  });

  const [btntext, setbtntext] = useState("Enable dark mode");

  const togglestyle = () => {
    if (mystyle.color === 'black') {
      updatemystyle({
        color: 'white',
        backgroundColor: 'black',
        border: '2px solid white'
      });
      setbtntext("Enable light mode");
    } else {
      updatemystyle({
        color: 'black',
        backgroundColor: 'white'
      });
      setbtntext("Enable dark mode");
    }
  };

  return (
    <div className='container' style={mystyle}>
      <h2 className='my-3'>About us</h2>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the first item’s accordion body. You can put anything here.</strong>
            </div>
          </div>
        </div>

        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the second item’s accordion body. You can put anything here.</strong>
            </div>
          </div>
        </div>

        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the third item’s accordion body. You can put anything here.</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-4">
        <button type="button" onClick={togglestyle} className="btn btn-primary">
          {btntext}
        </button>
      </div>
    </div>
  );
}
 