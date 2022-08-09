import React from "react";
import Grid from '@mui/material/Grid';
import CommonBtn from "../button";
import {Link} from "react-router-dom";

export default function NavBar(props) {
    return (
        <div style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: 'center',
            justifyContent: "center",
            backgroundColor:"#0AA1DD"
        }}>
            <Grid container spacing={0} sx={{height: "100%", width: "100%"}}>
                <Grid item xs={3} sx={{height: "100%",display:"flex",alignItems:"center"}}>
                    <Link to="/dashboard" style={{textDecoration:"none",marginLeft:'5%',width:"30%"}}>
                        <CommonBtn
                            variant="contained"
                            size="large"
                            label="Dashboard"
                            style={{backgroundColor: '#ACB2BD',color:"black"}}
                        />
                    </Link>
                </Grid>
                <Grid item xs={3} sx={{height: "100%",display:"flex",justifyContent:"end",alignItems:"center"}}>
                    <Link to="/manageProducts" style={{textDecoration:"none",marginRight:'5%',width:"30%"}}>
                        <CommonBtn
                            variant="contained"
                            size="large"
                            label="Product"
                            style={{width:"100%",backgroundColor: '#ACB2BD',color:"black"}}
                        />
                    </Link>
                </Grid>
                <Grid item xs={3} sx={{height: "100%",display:"flex",justifyContent:"start",alignItems:"center"}}>
                    <Link to="/placeOrder" style={{textDecoration:"none",marginLeft:'5%',width:"30%"}}>
                        <CommonBtn
                            variant="contained"
                            size="large"
                            label="Cart"
                            style={{width:"100%",backgroundColor: '#ACB2BD',color:"black"}}
                        />
                    </Link>
                </Grid>
                <Grid item xs={3}
                      style={{height: "100%", display: "flex", alignItems: "center", justifyContent: "end"}}>
                    <label style={{marginRight: "15%", fontSize: "200%"}}>
                        Abheetha
                    </label>
                    <Link to="/" style={{textDecoration: "none", marginRight: '5%', width: "25%"}}
                          onClick={(e) => {
                              let nav = document.getElementById("navBarContainer");
                              nav.style.display = 'none'
                              console.log(nav)
                              let content = document.getElementById("contentContainer");
                              content.style.height = '100%'
                          }}
                    >
                        <CommonBtn
                            variant="contained"
                            size="large"
                            label="Logout"
                            style={{width: "100%", backgroundColor: '#ACB2BD', color: "black"}}
                        />
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}