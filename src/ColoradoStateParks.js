import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import {trees, wildlife, elevation} from "./parks/RockyMountain"

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  MesaVerde()
  wildlife()
  elevation()
  console.log(trees)

  return <h1>Colorado State Parks!</h1>;
}

export default ColoradoStateParks;