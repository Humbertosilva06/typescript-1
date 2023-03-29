import { TFrota, frota } from "./frota"

//OBS: na hora de transpilar, como tsconfig esta fora da pasta tem que colocar tsc src/exercicio1/index.ts && node src/exercicio1/index.js

function buscarCarrosPorMarca(frota:TFrota[], marca?:string) {
    if (marca === undefined) {
      return frota
    }
  
    return frota.filter(
      (carro) => {
        return carro.marca === marca
      }
    )
  }

  console.log(buscarCarrosPorMarca(frota, "Fiat"))