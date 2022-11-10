import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from './Card'
import Modal from './Modal';
import SpotButton from './SpotButton';

// export default function NestedGrid() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
//         {/* {Array.from(Array(10)).map((_, index) => ( */}
//           <Grid item xs={12} sm={6} md={4} lg={3}>
//             <Card img="https://www.constructionspecifier.com/wp-content/uploads/2018/11/Opener-7.jpg" title = 'The Dungeon'>Card</Card>
//             <Card img="https://www.constructionspecifier.com/wp-content/uploads/2018/11/Opener-7.jpg" title = 'The blha'>Card</Card>
//           </Grid>
//         {/* ))} */}
//       </Grid>
//     </Box>
//   );
// }

// function FormRow() {
//   return (
//     <React.Fragment>
//       <Grid item xs={4}>
//         <Card img="https://www.constructionspecifier.com/wp-content/uploads/2018/11/Opener-7.jpg" title = 'The blah'>Card</Card>
//       </Grid>
//     </React.Fragment>
//   );
// }

export default function NestedGrid() {
  return (
    <div> 
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <SpotButton/>
        <Grid container spacing={5}>
          <Grid item xs={4}>
            <Card img="https://www.constructionspecifier.com/wp-content/uploads/2018/11/Opener-7.jpg" title = 'Moffit Library'>Card</Card>
          </Grid>
          <Grid item xs={4}>
            <Card img="https://rtl.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_rectangle/public/general/wheeler24.jpeg?itok=0RJvscVg&timestamp=1647366381" title = 'Wheeler Hall'>Card</Card>
          </Grid>
          <Grid item xs={4}>
            <Card img="https://dailycal.org/wp-content/uploads/2015/02/IMG_2414-e1423255186483-698x450.jpg" title = 'Doe Library'>Card</Card>
          </Grid>
          <Grid item xs={4}>
            <Card img="https://i0.wp.com/live.staticflickr.com/65535/49899187961_73ca95e85b_h.jpg?resize=1600%2C1067&ssl=1" title = 'East Asian Library'>Card</Card>
          </Grid>
          <Grid item xs={4}>
            <Card img="https://fastly.4sqi.net/img/general/600x600/695717_eBSMcge_fOfSIbhC0hSszIOds2b6gMjC-9VKMmy2DCY.jpg" title = 'Kresge Engineering Library'>Card</Card>
          </Grid>
          <Grid item xs={4}>
            <Card img="https://s3.amazonaws.com/libapps/accounts/20577/images/study-areas.gif" title = 'Natural Resources Library'>Card</Card>
          </Grid>
          <Grid item xs={4}>
            <Card img="https://sodoicoffee.com/wp-content/uploads/2015/03/20161219_124842-1024x576.jpg" title = 'Sodoi Coffee Tasting House'>Card</Card>
          </Grid>
          <Grid item xs={4}>
            <Card img="https://i0.wp.com/newspack-berkeleyside-cityside.s3.amazonaws.com/wp-content/uploads/2013/10/ETS_StradaEntrance.jpg?resize=720%2C480&ssl=1" title = 'Caffe Strada'>Card</Card>
          </Grid>
          <Grid item xs={4}>
            <Card img="https://i0.wp.com/newspack-berkeleyside-cityside.s3.amazonaws.com/wp-content/uploads/2012/09/Asha-Tea-House.jpeg?fit=600%2C386&ssl=1" title = 'Asha Tea House'>Card</Card>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}





// function FormRow() {
//   return (
//     <React.Fragment>
//       <Grid item xs={4}>
//         <Card img="https://www.constructionspecifier.com/wp-content/uploads/2018/11/Opener-7.jpg" title = 'The blah'>Card</Card>
//       </Grid>
//       <Grid item xs={4}>
//         <Card img="https://www.constructionspecifier.com/wp-content/uploads/2018/11/Opener-7.jpg" title = 'The Dungeon'>Card</Card>
//       </Grid>
//       <Grid item xs={4}>
//         <Card img="https://www.constructionspecifier.com/wp-content/uploads/2018/11/Opener-7.jpg" title = 'The Dungeon'>Card</Card>
//       </Grid>
//     </React.Fragment>
//   );
// }

// export default function NestedGrid() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={1}>
//         <Grid container item spacing={3}>
//           <FormRow />
//         </Grid>
//         <Grid container item spacing={3}>
//           <FormRow />
//         </Grid>
//         <Grid container item spacing={3}>
//           <FormRow />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }



