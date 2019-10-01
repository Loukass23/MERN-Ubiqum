import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LocationCity from '@material-ui/icons/LocationCity';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Home from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
import LocalActivity from '@material-ui/icons/LocalActivity';
import CardTravel from '@material-ui/icons/CardTravel';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom'
import Landing from '../screen/Landing';

import CitiesContextProvider from '../context/CitiesContext';
import ItinerariesContextProvider from '../context/ItinerariesContext';
import Cities from '../screen/Cities';
import Itineraries from '../screen/Itineraries';




function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-prevent-tabpanel-${index}`}
            aria-labelledby={`scrollable-prevent-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-prevent-tab-${index}`,
        'aria-controls': `scrollable-prevent-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function ScrollableTabsButtonPrevent() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="off"
                    aria-label="scrollable prevent tabs example"
                >
                    <Tab icon={<Home />} aria-label="phone" {...a11yProps(0)} />
                    <Tab icon={<LocationCity />} aria-label="favorite" {...a11yProps(1)} />
                    <Tab icon={< CardTravel />} aria-label="person" {...a11yProps(2)} />
                    <Tab icon={< LocalActivity />} aria-label="help" {...a11yProps(3)} />
                    <Tab icon={<FavoriteIcon />} aria-label="shopping" {...a11yProps(4)} />
                    <Tab icon={<ThumbUp />} aria-label="down" {...a11yProps(5)} />
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0}>
                <Landing />
            </TabPanel>

            <TabPanel value={value} index={1}>
                <CitiesContextProvider>
                    <Cities />
                </CitiesContextProvider>
            </TabPanel>

            <TabPanel value={value} index={2}>
                <ItinerariesContextProvider>
                    <Itineraries></Itineraries>
                </ItinerariesContextProvider>
            </TabPanel>
            <TabPanel value={value} index={3}>
                Activities
      </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
      </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
      </TabPanel>


        </div>
    );
}
