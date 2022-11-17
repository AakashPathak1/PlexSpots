import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from './Card'
import Modal from './Modal';
import SpotButton from './SpotButton';
import Navbar from './Navbar';
import Data from "./data";
import { useEffect, useState } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';


// function SpotsPage() {
//   return (
//     <>
//       {/* <filterTags/> */}
//       <GridSpots/>
//     </>
//   );
// }

function SpotsPage() {
  return (
    <>
    <Box alignitems="center" justifycontent="center" mt={3}>
      <Grid container spacing={1}>
        {Data.map((data, key) => (
          <Grid item key={key} xs={4}>
            <Card img={data.img} title={data.title} tag1={data.tags[0]} tag2={data.tags[1]}> Card</Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  );
}

{/* 
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap; */}


export default SpotsPage;




