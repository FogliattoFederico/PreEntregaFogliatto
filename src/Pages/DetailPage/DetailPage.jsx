/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const [ juegos, setJuegos ] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios("apiJuegos.json").then((resp) => console.log(resp.data));
  }, []);

  return <div>

  </div>;
};

export default DetailPage;
