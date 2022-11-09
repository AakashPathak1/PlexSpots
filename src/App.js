import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from './Card'

function FormRow(props) {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Card name={props.name} hours={props.hours}> </Card>
      </Grid>
    </React.Fragment>
  );
}

export default function NestedGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={5}>
          <FormRow name="moffat" hours="6-8pm"/>
          <FormRow name="main stakcs" hours="6-8pm"/>
          <FormRow name="nee"/>
          <FormRow name="hello"/>
          <FormRow name="hello"/>
          <FormRow name="hello"/>
          <FormRow name="hello"/>
          <FormRow name="hello"/>
          <FormRow name="hello"/>
          <FormRow name="hello"/>
          <FormRow name="hello"/>
          <FormRow name="hello"/>
          <FormRow name="hello"/>
          <FormRow name="hello"/>
        </Grid>
      </Grid>
    </Box>
  );
}
