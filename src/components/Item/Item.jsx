/* eslint-disable no-unused-vars */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Alert, CardActionArea } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const Item = ({juego}) => {
    const {nombre, precio, descripcion, imagen} = juego
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Link to={`/detail/${juego.id}`}>
        <CardMedia
          component="img"
          height="auto"
          image={imagen}
          alt="green iguana"
          />
          </Link>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {nombre}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {descripcion}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            ${precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => alert(`cantidad agregada ${quantity}`)}/>
    </Card>
  );
}
export default Item