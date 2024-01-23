import { useState } from "react";
import "./Checkout.css";

import MessageSuccess from "../MessageSucces/MessageSucces";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

import TextField from "@mui/material/TextField";

const styles = {
  containerShop: {
    textAlign: "center",
    paddingTop: 20,
  },
};

const initialState = {
  name: "",
  lastName: "",
  city: "",
};

const Checkout = () => {
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseId] = useState(null);

  const { cart } = useContext(CartContext)
  const onChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "purchasesCollection"), {
      values, cart
    });
    setPurchaseId(docRef.id);
    setValues(initialState);
  };

  return (
    <div style={styles.containerShop}>
      <h1 style={{ color: "white" }}>Shop</h1>
      <form className="FormContainer" onSubmit={onSubmit}>
        <TextField
          placeholder="Name"
          style={{ margin: 10,width: 400, background: "white" }}
          name="name"
          value={values.name}
          onChange={onChange}
          required
          className="TextField"
        />
        <TextField
          placeholder="Last Name"
          style={{ margin: 10, width: 400, background: "white" }}
          name="lastName"
          value={values.lastName}
          onChange={onChange}
          required
          className="TextField"
        />
        <TextField
          placeholder="City"
          style={{ margin: 10, width: 400, background: "white" }}
          name="city"
          value={values.city}
          onChange={onChange}
          required
          className="TextField"
          
        />
        <button className="btnASendAction TextField">Send</button>
      </form>

      {purchaseID ? <MessageSuccess purchaseID={purchaseID} /> : null}
    </div>
  );
};

export default Checkout;
