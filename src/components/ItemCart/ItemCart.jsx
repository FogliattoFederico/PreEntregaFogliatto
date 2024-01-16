/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ItemCart = ({ juego }) => {
  const { nombre, precio, imagen, cantidad } = juego;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400rem"
          image={imagen}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {nombre}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Cantidad: {cantidad}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Precio: ${precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "2rem" }}
      >
        <button>+</button>
        <p style={{ margin: "0 2rem" }}>{juego.cantidad}</p>
        <button>-</button>
      </div>
    </Card>
  );
};
export default ItemCart;
