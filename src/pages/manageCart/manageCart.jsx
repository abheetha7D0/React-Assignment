import { Component } from "react";
import User from "../../services/userService/UserService";
import productService from "../../services/products/productService";
import cartsService from "../../services/carts/cartsService";
import Grid from "@mui/material/Grid";
import TxtField from "../../component/common/textFields/txtField";
import CommonBtn from "../../component/common/button";
import Box from "@mui/joy/Box";
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

class ManageCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FormData: {
                userId: '',
                date: "",
                products: [
                    {
                        productId: '',
                        quantity: ''
                    },
                    {
                        productId: '',
                        quantity: ''
                    }
                ]
            },
            userNameData: [],
            productTitle: [],
            UserData: {
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
                    number: 3,
                    zipcode: "",
                    geolocation: {
                        lat: "",
                        long: ""
                    }
                },
                phone: ""
            },
            productFormData: {
                id: '',
                title: "",
                price: '',
                description: "",
                image: "",
                category: ""
            }

        }
    }

    clearFields = () => {
        this.setState({
            FormData: {
                id: '',
                userId: '',
                date: "",
                products: [
                    {
                        productId: '',
                        quantity: ''
                    },
                    {
                        productId: '',
                        quantity: ''
                    }
                ]
            }
        })
    }



    IdS = async () => {
        let res = await User.GetUser();
        let userids = [];
        res.data.map((value) => {
            userids.push(value.id)
        })
        this.setState({ userId: userids })
        if (res.status === 200) {

        }
    }

    productIdS = async () => {
        let res = await productService.GetRentalRates();
        let productsids = [];
        res.data.map((value) => {
            productsids.push(value.id)
        })

        this.setState({ id: productsids })
        if (res.status === 200) {

        }
    }


    submitCarts = async () => {
        let data = this.state.FormData;
        console.log(data);
        let res = await cartsService.postCarts(data);
    };

    getUserName = async () => {
        let res = await User.GetUser();
        let userNames = [];
        res.data.map((value) => {
            userNames.push(value.username)
        })
        this.setState({ userNameData: userNames })
        if (res.status === 200) {

        }
    }

    getproductTitle = async () => {
        let res = await productService.GetRentalRates();
        let productTitles = [];
        res.data.map((value) => {
            productTitles.push(value.title)
        })
        let unique = productTitles.filter((val, id, array) => array.indexOf(val) == id)
        this.setState({ productTitle: unique })
        if (res.status === 200) {

        }
    }


    async componentDidMount() {
        await this.getUserName();
        await this.getproductTitle();
        await this.IdS();
        await this.productIdS();

        console.log(this.productIdS);
    }

    render() {
        return (
            <>
                <Box style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Grid container spacing={0} style={{ width: "100%", height: "100%" }}>
                        <Grid item xs={12} style={{ height: "10%", display: 'flex', alignItems: "center", justifyContent: "start" }}>
                            <h1 style={{ marginLeft: "3%", display: 'flex', height: "50%" }}>Manage Cart</h1>
                        </Grid>
                        <Grid container item xs={12} style={{
                            height: "90%",
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative'
                        }}>
                            <Grid container item xs={11} style={{ height: "90%" }}>
                                <Grid item xs={6}
                                    style={{ height: "20%", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                    <Autocomplete
                                        style={{ width: '70%' }}
                                        id="combo-box-demo"
                                        value={this.state.UserData.username}
                                        onChange={(event, newValue) => {
                                            this.setState(Object.assign(this.state.UserData, { username: newValue }));
                                        }}
                                        options={this.state.userNameData}

                                        sx={{ width: 260 }}
                                        renderInput={(params) => <TextField
                                            {...params} label="User Name" />}
                                    />
                                </Grid>
                                <Grid item xs={6}
                                    style={{ height: "20%", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                    <TxtField
                                        style={{ display: "flex", width: "80%" }}
                                        label=''
                                        type="date"
                                        value={this.state.FormData.date}
                                        onChange={(e) => {
                                            let formData = this.state.FormData
                                            formData.date = e.target.value
                                            this.setState({ formData })
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}
                                    style={{ height: "20%", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                    <Autocomplete
                                        style={{ width: '70%' }}
                                        id="combo-box-demo"
                                        value={this.state.productFormData.title}
                                        onChange={(event, newValue) => {
                                            this.setState(Object.assign(this.state.productFormData, { title: newValue }));
                                        }}
                                        options={this.state.productTitle}


                                        sx={{ width: 260 }}
                                        renderInput={(params) => <TextField
                                            {...params} label="Product Title" />}
                                    />
                                </Grid>
                                <Grid item xs={6}
                                    style={{ height: "20%", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                    <TxtField
                                        style={{ display: "flex", width: "80%" }}
                                        label='Qty'
                                        type="number"
                                        value={this.state.FormData.products.quantity}
                                        onChange={(e) => {
                                            let formData = this.state.FormData
                                            formData.products.quantity = e.target.value
                                            this.setState({ formData })
                                        }}
                                    />
                                </Grid>
                                <Grid container item xs={12} style={{ height: "20%", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                    <Grid item xs={6}>
                                    </Grid>
                                    <Grid container item xs={6} style={{ height: "100%", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                        <Grid item xs={6} style={{ height: "100%", display: 'flex', alignItems: "center", justifyContent: "end" }}>
                                            <CommonBtn
                                                variant="contained"
                                                label='Clear'
                                                size="medium"
                                                style={{ width: "60%", display: 'flex', marginRight: "3%" }}
                                                color='error'
                                                type='submit' onClick={this.clearFields}
                                            />
                                        </Grid>
                                        <Grid item xs={6} style={{ height: "100%", display: 'flex', alignItems: "center", justifyContent: "start" }}>
                                            <CommonBtn
                                                variant="contained"
                                                label='Save'
                                                size="medium"
                                                style={{ width: "60%", display: 'flex', marginLeft: "3%" }}
                                                color='primary'
                                                type='submit' onClick={this.submitCarts}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </>
        )
    }
}
export default ManageCart;