import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import {useState} from 'react';

import { connect } from 'react-redux';
import { increment, reset, activateCategory } from '../store/state.js';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const CategoryTabs = props => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    //this MUI handler is updating value dynamically in the Tab Panels below. What's the difference between the 'value' and the 'label'? The logic seems like there's probably a built-in 'active tab' styling? Is is better to nest the state action/reducer within the handleChange event, or as an onClick event in the Tab Panel. And what the heck is the difference between a Tab and a Tab Panel? Tab Pabel is a component created above.
    props.activeCategory(value);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Fantasy" {...a11yProps(1)} />
          <Tab label="Science Fiction" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >
        All
      </TabPanel>
      <TabPanel value={value} index={1}>
        Fantasy
      </TabPanel>
      <TabPanel value={value} index={2}>
        Science Fiction
      </TabPanel>
    </Box>
  );
}

const mapStateToProps = state => ({
  favoriteCounter: state.favoriteCounter
})

const mapDispatchToProps = { increment, reset, activateCategory };

export default ConnectionType(mapStateToProps, mapDispatchToProps)(CategoryTabs)
