import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TodayIcon from '@material-ui/icons/Today';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PeopleIcon from '@material-ui/icons/People';
import TabPanel from '../TabPanel';
import Weekly from '../Weekly';
import Mass from '../Mass';
import Resources from '../Resources';

function TabContainer() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<TodayIcon />} label="Weekly" />
        <Tab icon={<DateRangeIcon />} label="Mass" />
        <Tab icon={<PeopleIcon />} label="Resources" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Weekly />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Mass />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Resources />
      </TabPanel>
    </React.Fragment>
  );
}

export default TabContainer;
