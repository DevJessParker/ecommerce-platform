import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

import { connect } from 'react-redux';
import { increment, reset, activateCategory } from '../store/state.js';

//Default category is 'All' to show all books on page load. Action to activate category will update state, and I'll need to filter results based on active category state. Ternary? <If> component? Best solution? Ask in code review.

// This is function to expand card
// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

//Begin mapping Book Card. Need to filter based on active category (default set to 'All')

const BookCard = props => {
  return (
    <section>
      <ul>
        {props.favoriteCounter.books.map(book => {
          return <li onClick={() => props.increment(book.title)} key={book.title}>
            {person.title} - {book.favorites}
          </li>
        })}
      </ul>
    </section>
  )
}
// const BookCard = props => {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };
  
//   return(
//   <>
//   {props.favoriteCounter.books.map(book => {
//     return (<h3>{book.title}</h3>)
//   })
//     return (<Card sx={{ maxWidth: 345 }} key={book.title}>
//         <CardHeader
//           avatar={
//             <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//               R
//             </Avatar>
//           }
//           action={
//             <IconButton aria-label="settings">
//               <MoreVertIcon />
//             </IconButton>
//           }
//           title={props.books.title}
//         />
//         <CardMedia
//           component="img"
//           height="194"
//           image={book.books.image}
//           alt={book.books.title}
//         />
//         <CardActions disableSpacing>
//           <IconButton aria-label="add to favorites">
//             <FavoriteIcon onClick={props.increment(book.books.title)}/>
//           </IconButton>
//           <IconButton aria-label="share">
//             <ShareIcon />
//           </IconButton>
//           <ExpandMore
//             expand={expanded}
//             onClick={handleExpandClick}
//             aria-expanded={expanded}
//             aria-label="show more"
//           >
//             <ExpandMoreIcon />
//           </ExpandMore>
//         </CardActions>
//         <Collapse in={expanded} timeout="auto" unmountOnExit>
//           <CardContent>
//             <Typography paragraph>
//             Book stuff goes here. Word.
//             </Typography>
//           </CardContent>
//         </Collapse>
//       </Card>
//     )}
//   )}
// </>
// )}


const mapStateToProps = state => ({
  favoriteCounter: state.favoriteCounter
})

const mapDispatchToProps = { increment, reset, activateCategory };

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);