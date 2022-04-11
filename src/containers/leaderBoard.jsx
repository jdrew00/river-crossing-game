import React, { useState } from 'react';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import DenseTable1 from './table1';
import DenseTable2 from './table2';





function LeaderBoard() {

  const [value, setValue] = useState(1);
  // const [count, setCount] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <Container style={{ backgroundColor: '#cfe8fc' }} maxWidth="lrg">
      <Typography gutterBottom style={{ fontSize: "24px" }} component="div">
        Select A Leaderboard:
      </Typography>

      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Level 1" value="1" />
              <Tab label="Level 2" value="2" />
              <Tab label="Level 3" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1"> <DenseTable1 /> </TabPanel>
          <TabPanel value="2"><DenseTable2 />  </TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>

    </Container>
  );
}

export default LeaderBoard
