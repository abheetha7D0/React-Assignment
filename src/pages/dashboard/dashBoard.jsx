import React, {Component} from "react";
import Box from "@mui/joy/Box";
import Grid from "@mui/joy/Grid";
import Cards from "../../component/common/cards/cards";

class DashBoard extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <Box sx={{width:"100%",height:"100%",display:'flex',alignItems:"center",justifyContent:"center"}}>
                    <Grid container spacing={0} sx={{width:"80%",height:"90%",display:"flex"}}>
                        <Grid item xs={6} sx={{height:"50%",display:"flex",alignItems:"center",justifyContent:"center"}}><Cards label="Products" count="60"/></Grid>
                        <Grid item xs={6} sx={{height:"50%",display:"flex",alignItems:"center",justifyContent:"center"}}><Cards label="Cart" count="12"/></Grid>
                        <Grid item xs={6} sx={{height:"50%",display:"flex",alignItems:"center",justifyContent:"center"}}><Cards label="Users" count="43"/></Grid>
                        {/*<Grid item xs={6} sx={{height:"50%",display:"flex",alignItems:"center",justifyContent:"center"}}><Cards label="Users"/></Grid>*/}
                    </Grid>
                </Box>
            </>
        )
    }
}

export default DashBoard;
