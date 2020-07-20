import React from 'react';
import image1 from "../../images/eyecam-co.svg";
import pen from "../../images/pen.svg";
import deleteIcon from "../../images/delete.svg";
import './EmployeeCard.css'

const EmployeeCard = ({img,name})=>{

    return(
       <>
           <div className="card">
               <div className="card-content">
                   <input type="checkbox"/>
                   <img src={img || image1} alt="prodile-picture" style={{width: '7%', borderRadius: '50%'}}/>
                   <div className="name">
                       <h6>{name}</h6>
                       {/*<p style={{marginBottom: '70px'}}> bvnm</p>*/}
                   </div>
                   <h6>N300</h6>
                   <h6>Test Period</h6>
                   <img src={pen}/>
                   <img src={deleteIcon}/>
               </div>

           </div>

       </>
    )
}

export default EmployeeCard;