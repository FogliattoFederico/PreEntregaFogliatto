import "./Checkout.css"
import Button from "@mui/material/Button";

const Checkout = () => {
  return (
    <div>
      <h1 className="Titulo-pago">Finaliza el pago</h1>
      <form action="" className="Formulario">
        <input className="Inputs" type="text" placeholder="Nombre y Apellido" required={true} />
        <input className="Inputs" type="number" placeholder="Numero de tarjeta" required={true} />
        <input className="Inputs" type="text" placeholder="Direccion" required={true} />
        <input className="Inputs" type="number" placeholder="Telefono" required={true} />
        <input className="Inputs" type="email" placeholder="Correo electronico" required={true} />
        <div className="Btns-Pago">
        <Button sx={{fontSize: "1.5rem"}} variant="contained" type="submit" >Pagar</Button>
        <Button sx={{fontSize: "1.5rem"}} variant="contained" color="error">
            Cancelar Compra
        </Button>
        </div>
      </form>
    </div>
  )
}

export default Checkout
