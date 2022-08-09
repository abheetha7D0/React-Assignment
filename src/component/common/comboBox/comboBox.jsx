import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function CommonComboBox(props) {
    const {label,style} = props;
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            style={style}
            renderInput={(params) => <TextField {...params} label={label}/>}
        />
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    {label: 'The Shawshank Redemption', year: 1994}
];
