import React, { Component } from "react";
import UserService from "../../services/userService/UserService";
import Grid from "@mui/material/Grid";
import TxtField from '@mui/material/TextField';
import CommonBtn from "../../component/common/button";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import "../userRegistration/userRegistration.css";

class UserRegistrationPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id:"",
            userData: {
                email: "",
                username: "",
                password: "",
                name: {
                    firstname: "",
                    lastname: ""
                },
                address: {
                    city: "",
                    street: "",
                    number: "",
                    zipcode: "",
                    geolocation: {
                        lat: "",
                        long: ""
                    }
                },
                phone: ""
            },
            data: [

            ]
        }
    }

    saveUser = async () => {

        let data = this.state.userData;
        console.log(data)
        let response = await UserService.postUser(data);
    }
    loadData = async () => {
        let res = await UserService.GetUser();
        if (res.status === 200) {
            this.setState({
                data: res.data
            });
        }
    }
    componentDidMount() {
        this.loadData();
        console.log(this.loadData);
    }
    deleteUser  = async (id) => { 
console.log(id)
         let res = await UserService.deleteUser(id);
    
         if(res.status === 200) {
            // this.setState({
            //     alert: true,
            //     severity: 'success'
            // });
            this.loadData();
         } else {
            // this.setState({
            //     alert: true,
            //     severity: 'error'
            // });
         }
       };
    render() {
        return (
            <>
                <Box className="boxContainerInUserRegistration">
                    <Grid
                        container spacing={0}
                        sx={{ height: '100%', width: "100%" }}
                    >
                        <Grid item xs={12} sx={{
                            height: "10%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            position: "relative"
                        }}>
                            <h1
                                style={{ paddingLeft: "2%" }}
                            >User Registration</h1>
                        </Grid>
                        <Grid
                            item xs={12}
                            sx={{
                                position: "relative",
                                height: "50%",
                                display: 'flex',
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Grid
                                container
                                item
                                xs={11}
                                spacing={0.5}
                                sx={{ height: "100%" }}
                            >
                                <Grid
                                    item
                                    xs={6}
                                >
                                    <TxtField
                                        variant="outlined"
                                        label='First Name'
                                        style={{ width: "100%" }}
                                        size="small"
                                        value={this.state.userData.name.firstname}

                                        onChange={(e) => {
                                            let formData = this.state.userData
                                            formData.name.firstname = e.target.value
                                            this.setState({ formData })
                                            console.log("11111")
                                        }}
                                    // onchange={nameHandler}
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs={6}
                                >
                                    <TxtField
                                        variant="outlined"
                                        label='Last Name'
                                        style={{ width: "100%" }}
                                        size="small"
                                        value={this.state.userData.name.lastname}
                                        onChange={(e) => {
                                            let formData = this.state.userData
                                            formData.name.lastname = e.target.value
                                            this.setState({ formData })
                                        }}
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs={6}
                                >
                                    <TxtField
                                        variant="outlined"
                                        label='Email'
                                        style={{ width: "100%" }}
                                        size="small"
                                        value={this.state.userData.email}
                                        onChange={(e) => {
                                            let formData = this.state.userData
                                            formData.email = e.target.value
                                            this.setState({ formData })
                                        }}
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs={6}
                                >
                                    <TxtField
                                        variant="outlined"
                                        label='User Name'
                                        style={{ width: "100%" }}
                                        size="small"
                                        value={this.state.userData.username}
                                        onChange={(e) => {
                                            let formData = this.state.userData
                                            formData.username = e.target.value
                                            this.setState({ formData })
                                        }}
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs={6}
                                >
                                    <TxtField
                                        variant="outlined"
                                        label='Password'
                                        style={{ width: "100%" }}
                                        type='password'
                                        size="small"
                                        value={this.state.userData.password}
                                        onChange={(e) => {
                                            let formData = this.state.userData
                                            formData.password = e.target.value
                                            this.setState({ formData })
                                        }}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={6}
                                >
                                    <TxtField
                                        variant="outlined"
                                        label='City'
                                        style={{ width: "100%" }}
                                        size="small"
                                        value={this.state.userData.address.city}
                                        onChange={(e) => {
                                            let formData = this.state.userData
                                            formData.address.city = e.target.value
                                            this.setState({ formData })
                                        }}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={6}
                                >
                                    <TxtField
                                        variant="outlined"
                                        label='Street'
                                        style={{ width: "100%" }}
                                        size="small"
                                        value={this.state.userData.address.street}
                                        onChange={(e) => {
                                            let formData = this.state.userData
                                            formData.address.street = e.target.value
                                            this.setState({ formData })
                                        }}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={6}
                                >
                                    <TxtField
                                        variant="outlined"
                                        label='Street No'
                                        style={{ width: "100%" }}
                                        size="small"
                                        value={this.state.userData.address.number}
                                        onChange={(e) => {
                                            let formData = this.state.userData
                                            formData.address.number = e.target.value
                                            this.setState({ formData })
                                        }}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={6}
                                >
                                    <TxtField
                                        variant="outlined"
                                        label='Zip Code'
                                        style={{ width: "100%" }}
                                        size="small"
                                        value={this.state.userData.address.zipcode}
                                        onChange={(e) => {
                                            let formData = this.state.userData
                                            formData.address.zipcode = e.target.value
                                            this.setState({ formData })
                                        }}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={6}
                                >
                                    <TxtField
                                        variant="outlined"
                                        label='Lat Value'
                                        style={{ width: "100%" }}
                                        size="small"
                                        value={this.state.userData.address.geolocation.lat}
                                        onChange={(e) => {
                                            let formData = this.state.userData
                                            formData.address.geolocation.lat = e.target.value
                                            this.setState({ formData })
                                        }}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={6}
                                >
                                    <TxtField
                                        variant="outlined"
                                        label='Long Value'
                                        style={{ width: "100%" }}
                                        size="small"
                                        value={this.state.userData.address.geolocation.long}
                                        onChange={(e) => {
                                            let formData = this.state.userData
                                            formData.address.geolocation.long = e.target.value
                                            this.setState({ formData })
                                        }}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={6}
                                >
                                    <TxtField
                                        variant="outlined"
                                        label='Mobile Number'
                                        style={{ width: "100%" }}
                                        size="small"
                                        value={this.state.userData.phone}
                                        onChange={(e) => {
                                            let formData = this.state.userData
                                            formData.phone = e.target.value
                                            this.setState({ formData })
                                        }}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                >
                                    <Grid
                                        container
                                        spacing={2}
                                        item
                                        xs={12}
                                    >
                                        <Grid item xs={8}
                                            sx={{ display: 'flex', alignItems: "center", justifyContent: "end" }}></Grid>
                                        <Grid item xs={2} sx={{ display: 'flex', alignItems: "center", justifyContent: "end" }}>
                                            <CommonBtn
                                                variant="contained"
                                                label='Clear'
                                                size="medium"
                                                color="error"
                                                style={{ width: "80%", display: "flex" }}
                                            />
                                        </Grid>
                                        <Grid item xs={2}
                                            sx={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                            <CommonBtn
                                                variant="contained"
                                                label='Save'
                                                size="medium"
                                                style={{ width: "80%", display: 'flex' }}
                                                color='primary'
                                                type="submit"
                                                onClick={this.saveUser}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}
                            sx={{
                                position: "relative",
                                height: "40%",
                                display: 'flex',
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <TableContainer style={{position:'relative', top:'200px'}} component={Paper}>


                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>First Name</TableCell>
                                            <TableCell align="center">Last Name</TableCell>
                                            <TableCell align="center">Email</TableCell>
                                            <TableCell align="center">UserName</TableCell>
                                            <TableCell align="center">Password</TableCell>
                                            <TableCell align="center">City</TableCell>
                                            <TableCell align="center">Street No</TableCell>
                                            <TableCell align="center">Street</TableCell>
                                            <TableCell align="center">Zip Code</TableCell>
                                            <TableCell align="center">Lat Code</TableCell>
                                            <TableCell align="center">Long Value</TableCell>
                                            <TableCell align="center">Mobile No</TableCell>
                                            <TableCell align="center">Acction</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            this.state.data.map((row) => (

                                                <TableRow>
                                                    <TableCell>{row.name.firstname}</TableCell>
                                                    <TableCell align="center">{row.name.lastname}</TableCell>
                                                    <TableCell align="center">{row.email}</TableCell>
                                                    <TableCell align="center">{row.username}</TableCell>
                                                    <TableCell align="center">{row.password}</TableCell>
                                                    <TableCell align="center">{row.address.city}</TableCell>
                                                    <TableCell align="center">{row.address.number}</TableCell>
                                                    <TableCell align="center">{row.address.street}</TableCell>
                                                    <TableCell align="center">{row.address.zipcode}</TableCell>
                                                    <TableCell align="center">{row.address.geolocation.lat}</TableCell>
                                                    <TableCell align="center">{row.address.geolocation.long}</TableCell>
                                                    <TableCell align="center">{row.phone}</TableCell>
                                                    <TableCell align="center">

                                                        <Tooltip title="Delete"><IconButton
                                                            onClick={() => {
                                                                this.deleteUser(row.id)
                                                            }}
                                                        ><DeleteIcon color="error" /></IconButton>
                                                        </Tooltip>
                                                        <Tooltip title="Edit"><IconButton
                                                            onClick={() => {
                                                                console.log("edit icon clicked!")
                                                                this.updateRentalRate(row);
                                                            }}
                                                        ><EditIcon color='primary' /></IconButton>
                                                        </Tooltip>

                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </Box>
            </>
        )
    }
}
export default UserRegistrationPage;