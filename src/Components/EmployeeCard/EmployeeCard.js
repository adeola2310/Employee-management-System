import React from 'react';
import image1 from "../../images/eyecam-co.svg";
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
                       {/*<span>SW</span>*/}
                   </div>
                   <h6>N300</h6>
                   <h6>Test Period</h6>
               </div>

           </div>

       </>
    )
}

export default EmployeeCard;