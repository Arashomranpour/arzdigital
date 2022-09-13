import React from 'react'
import "../App.css"



const Selectedbutton = ({children,selected,onClick}) => {

    
    return (
      <span onClick={onClick} className="sel" style={{ color: "DarkKhaki", marginBottom: 40, marginRight: 20, marginLeft: 20, width: "90%" , cursor: "pointer",borderRadius:5} }>
{children}
    </span>
  )
}

export default Selectedbutton