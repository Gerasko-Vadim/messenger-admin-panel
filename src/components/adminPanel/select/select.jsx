import React from "react"
import customClasses from "./select.module.css"

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
    marginBottom:20,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectCustom = () => {
    const classes = useStyles();
    const [age, setAge] = React.useState(0);
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-autowidth-label">Группа</InputLabel>
            <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={age}
                onChange={handleChange}
                maxWidth
            >
                <MenuItem value={0}> Все</MenuItem>
                <MenuItem value={10}>ИВТ-1-17</MenuItem>
                <MenuItem value={20}>ИВТ-2-17</MenuItem>
                <MenuItem value={30}>ИБ-1-17</MenuItem>
            </Select>
            
        </FormControl>
    )
}
export default SelectCustom;