import React from 'react'
import "./ContentStyle.css"

function Content({
  key,
  country,
  content1,
  content2,
  content3,
  content4,
  content5,
  content6,
}) {
  // const navigate = useNavigate




  return (
    <div className='Main' style={{ color: "white" }} key={key}>
      <div className="Main-inner">
        <h1>{country}</h1>
        <br />
        <br />
        <h3>{content1}</h3>
        <h3>{content2}</h3>
        <br />
        <br />
        <h3>{content3}</h3>
        <h3>{content4}</h3>
        <h3>{content5}</h3>
        <h3>{content6}</h3>
        
      </div>
    </div>
  );
}

export default Content