

import React from 'react';
import customClasses from "./adminPanel.module.css"
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import logo from "./img/logo.png"
import Content from './content/content';
import logout from "./img/log-out.png"
import {Link} from "react-router-dom"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: "100%",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    background: "A4A6B3"
  },
}));

export default function AdminPanel() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const logoutAdmin =()=>{
    localStorage.clear()
  }

  return (
    <div style={{ height: "100%", width: "100%", position: "fixed" }} className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <div className={customClasses.blockLogo}><img alt="logo" src={logo} /></div>
        <Tab label="Преподаватели" {...a11yProps(0)} />
        <Tab label="Студенты" {...a11yProps(1)} />
        <Tab label="Группы" {...a11yProps(2)} />
        <Link to="/">
        <img alt="logout" onClick={()=>logoutAdmin()} className={customClasses.logout} src={logout} />
        </Link>
        
      </Tabs>
      <TabPanel style={{ width: "90%" }} value={value} index={value}>
        <Content index={value} />
      </TabPanel>


    </div>
  );
}
