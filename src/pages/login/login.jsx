import {Component} from "react";
import Grid from "@mui/material/Grid";
import TxtField from "../../component/common/textFields/txtField";
import {Link} from "react-router-dom";
import CommonBtn from "../../component/common/button";
import Box from "@mui/material/Box";
import "../login/login.css";

class Login extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <Box
                    className="boxContainerInLogin">
                    <Grid
                        container
                        spacing={0}
                        sx={{position: "relative", display: 'flex', width: '100%', height: "100%"}}>
                        <Grid item xs={12} sx={{
                            position: "relative",
                            textAlign: 'center',
                            height: '20%',
                            display: "flex",
                            alignItems: "center",
                            justifyContent: 'center'
                        }}>
                            <h1>Login</h1>
                        </Grid>
                        <Grid item xs={12} sx={{
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: 'center',
                            height: '15%'
                        }}>
                            <TxtField
                                varient='standard'
                                label="Enter Your User Name"
                                style={{width:'80%'}}
                                className='textField'
                                type='text'
                            
                            />
                        </Grid>
                        <Grid item xs={12} sx={{
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: 'center',
                            height: '15%'
                        }}>
                            <TxtField
                                varient='standard'
                                label="Enter Your Password"
                                style={{width:'80%'}}
                                className='textField'
                                type='password'
                            />
                        </Grid>
                        <Grid item xs={12} sx={{
                            position: "relative",
                            textAlign: 'center',
                            height: '30%',
                            display: "flex",
                            alignItems: "center",
                            justifyContent: 'center'
                        }}>
                            <Link to="/dashboard"
                                  style={{textDecoration: "none", width: "40%"}}
                                  onClick={(e) => {
                                      let nav = document.getElementById("navBarContainer");
                                      nav.style.display = 'flex'
                                      console.log(nav)
                                      let content = document.getElementById("contentContainer");
                                      content.style.height = '90%'
                                  }}
                            >
                                <CommonBtn
                                    variant='contained'
                                    label='Login'
                                    size='large'
                                    color='primary'
                                    style={{width: "100%"}}
                                />
                            </Link>
                        </Grid>
                        <Grid item xs={12} sx={{
                            position: "relative",
                            textAlign: 'center',
                            height: '20%',
                            display: "flex",
                            alignItems: "center",
                            justifyContent: 'start'
                        }}>
                            <p
                                style={{paddingLeft: '65px'}}
                            >Create new user account ?
                                <span>
                                <Link to="/userRegistration"
                                      style={{textDecoration: "none", paddingLeft: "10px"}}
                                >
                                    click here
                                </Link>
                            </span>
                            </p>
                        </Grid>
                    </Grid>
                </Box>
            </>
        )
    }
}
export default Login;