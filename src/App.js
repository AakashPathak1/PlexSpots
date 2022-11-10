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

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Card img="https://www.constructionspecifier.com/wp-content/uploads/2018/11/Opener-7.jpg" title = 'The blah'>Card</Card>
      </Grid>
    </React.Fragment>
  );
}

export default function NestedGrid() {
  return (
    <div> 
    <SpotButton/>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container spacing={5}>
          <Grid item xs={4}>
            <Card img="https://www.constructionspecifier.com/wp-content/uploads/2018/11/Opener-7.jpg" title = 'The blah'>Card</Card>
          </Grid>
          <Grid item xs={4}>
            <Card img="https://rtl.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_rectangle/public/general/wheeler24.jpeg?itok=0RJvscVg&timestamp=1647366381" title = 'The jalskdjf'>Card</Card>
          </Grid>
          <Grid item xs={4}>
            <Card img="https://www.constructionspecifier.com/wp-content/uploads/2018/11/Opener-7.jpg" title = 'The blah'>Card</Card>
          </Grid>
          <Grid item xs={4}>
            <Card img="https://www.constructionspecifier.com/wp-content/uploads/2018/11/Opener-7.jpg" title = 'The blah'>Card</Card>
          </Grid>
          <Grid item xs={4}>
            <Card img="https://www.constructionspecifier.com/wp-content/uploads/2018/11/Opener-7.jpg" title = 'The blah'>Card</Card>
          </Grid>
          <Grid item xs={4}>
            <Card img="https://www.constructionspecifier.com/wp-content/uploads/2018/11/Opener-7.jpg" title = 'The blah'>Card</Card>
          </Grid>
          <Grid item xs={4}>
            <Card img="https://www.constructionspecifier.com/wp-content/uploads/2018/11/Opener-7.jpg" title = 'The blah'>Card</Card>
          </Grid>
          <Grid item xs={4}>
            <Card img="https://www.constructionspecifier.com/wp-content/uploads/2018/11/Opener-7.jpg" title = 'The blah'>Card</Card>
          </Grid>
          <Grid item xs={4}>
            <Card img="https://www.constructionspecifier.com/wp-content/uploads/2018/11/Opener-7.jpg" title = 'The blah'>Card</Card>
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



