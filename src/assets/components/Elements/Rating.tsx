import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { IconButton } from '@mui/material';
export const Rating = ({rating}) => {
    let ratingArray = Array(5).fill(false);
    for(let i=0; i<rating; i++){
        ratingArray[i] = true;
    }

  return (
    <>
        { ratingArray.map((value, index) => (
            value ? (
                <i key={index} ><IconButton sx={{ color: 'gold' }}><StarIcon /></IconButton></i>
            ) : (
                <i key={index}><IconButton sx={{ color: 'gold' }}><StarBorderIcon/></IconButton></i>
            )
        )) }
    </>
  )
}