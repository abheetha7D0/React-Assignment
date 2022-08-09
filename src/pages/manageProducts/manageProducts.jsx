import { Component } from "react";
import productService from "../../services/products/productService"
import Grid from "@mui/material/Grid";
import TxtField from '@mui/material/TextField';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Input from "@mui/material/Input";
import CommonBtn from "../../component/common/button";
import Box from "@mui/joy/Box";

class ManageProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FormData: {
                id: 21,
                title: "",
                price: 13.5,
                description: "",
                image: "",
                category: ""
            },
            categoryData: [],

        }
    }
    clearFields = () => {
        this.setState({
            FormData: {
                id: '',
                title: "",
                price: '',
                description: "",
                image: "",
                category: ""
            }
        })
    }


    getCategory = async () => {
        let res = await productService.GetRentalRates();
        let tempCategory = [];
        if (res.status === 200) {
            res.data.map((value) => {
                tempCategory.push(value.category)
            })
            let unique = tempCategory.filter((val, id, array) => array.indexOf(val) == id);
            this.setState({ categoryData: unique })
        }
    }


    submitProducts = async () => {
        let data = this.state.FormData;
        console.log(data);
        let res = await productService.postRentalRatesService(data);
    };

    async componentDidMount() {
        await this.getCategory();
        console.log(this.state.categoryData)
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
                        <Grid container item xs={12} style={{ height: "10%" }}>
                            <h1 style={{ marginLeft: "3%" }}>Manage Products</h1>
                        </Grid>
                        <Grid container item xs={12} style={{
                            height: "90%",
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative'
                        }}>
                            <Grid container item xs={11} style={{ height: "90%" }}>
                                <Grid item xs={6} style={{ height: "20%", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                    <TxtField
                                        style={{ display: "flex", width: "80%" }}
                                        label='Title'
                                        value={this.state.FormData.title}
                                        onChange={(e) => {
                                            let formData = this.state.FormData
                                            formData.title = e.target.value
                                            this.setState({ formData })
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6} style={{ height: "20%", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                    <TxtField
                                        style={{ display: "flex", width: "80%" }}
                                        label='Price'
                                        value={this.state.FormData.price}
                                        onChange={(e) => {
                                            let formData = this.state.FormData
                                            formData.price = e.target.value
                                            this.setState({ formData })
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6} style={{ height: "20%", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                <Autocomplete
                                    value={this.state.FormData.category}
                                    onChange={(event, newValue) => {
                                        this.setState(Object.assign(this.state.FormData, { category: newValue }));
                                    }}
                                    style={{ width: '70%' }}
                                    id="combo-box-demo"
                                    options={this.state.categoryData}
                                    sx={{ width: 260 }}

                                    renderInput={(params) => <TextField
                                        {...params} label="Category"
                                    />
                                    }
                                />
                                </Grid>
                                <Grid item xs={6} style={{ height: "20%", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                    <TxtField
                                        style={{ display: "flex", width: "80%" }}
                                        label='Description'
                                        value={this.state.FormData.description}
                                        onChange={(e) => {
                                            let formData = this.state.FormData
                                            formData.description = e.target.value
                                            this.setState({ formData })
                                        }}
                                    />
                                </Grid>
                                <Grid container item xs={12} style={{ height: "30%" }}>
                                    <Grid item xs={2} style={{ height: "100%", display: 'flex', alignItems: "center", justifyContent: "start" }}>
                                        <img
                                            src=""
                                            style={{ display: 'flex', marginLeft: "25%", width: "80%", height: "100%", border: "1px solid black" }}
                                        />
                                    </Grid>
                                    <Grid item xs={4} style={{ height: "100%", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                        <Input
                                            type="file"
                                            style={{ display: 'flex', marginLeft: "0" }}
                                        />
                                    </Grid>
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
                                                type='submit' onClick={this.submitProducts}
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
export default ManageProducts;