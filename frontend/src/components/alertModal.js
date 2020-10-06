import React, {useEffect, useState} from "react";
import '../style/alertmodal.css';

export default function AlertModal({ showAlert, alertText}) {
  const [show, setShowAlert] = useState(true)


  useEffect(() =>{
    window.onclick = function(event) {
        let modalElement = document.getElementById('alertModalBackground');
        if (showAlert && event.target === modalElement) {
            setShowAlert(false)
          }
        }
  })

    return (
      <div id="alertModalBackground" className={`${show ? "modal-background" : "hidden"}`}>
         <div className={`${show ? "alert-modal" : "hidden"}`}>
            <p >{alertText}</p>
        </div>
      </div>
  );
}