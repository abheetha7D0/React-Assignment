import React from "react";

export default function Cards(props){
    const{label}=props
    const{count}=props
    return (
        <div style={{display: "flex", flexDirection: 'column', width: "90%", height: "90%", alignItems:"center",
            justifyContent:"center", backgroundColor:"#A5BECC", borderRadius:"15px"}}>
            <div style={{display:'flex',width:"100%",height:"50%",alignItems:"center",justifyContent:"center"}}><h1 sx={{display:'flex'}}>{label}</h1></div>
            <div style={{display:'flex',width:"100%",height:"50%",alignItems:"center",justifyContent:"center"}}><h1 sx={{display:'flex'}}>{count}</h1></div>
        </div>
    )
}