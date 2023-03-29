// posso tipar como const frota: Array<{}> = essa tipagems é array de obejtos
                    // ou frota: {}[] = é um array de obejtos mas primeiro a gente bota as chaves de obejto e depois o colchetes de array(é de tras pra frente)

// no JS era const frota = [{objeto 1, obejto 2 e etc}]
// tipamos o aray de obejtos, agora temos que tipar tbm o que esta dentro do array, ou seja, as propriedades dos objetos

// se eu colocar um ? na grente da propriedade da tipagem, ela se orna opcional nos obejtos do array (marca?: string)

// precisamos exportar a tipagem para usar no outrio arquivo
export type TFrota = {
    marca:string,
    modelo:string,
    ano:number
}

// eu criei uma tipagem dos objetos do array, aí em vex de dizer que o array é um array de objetos, eu digo que é um array de TFrota (um array de objetos tipados)

// se eu quisesse tupar um array de numeros - const array: numeber[] = [1,2,3] (o tipo do conteudo, depois o array)


// abaixo, poderia ser assim tbm const frota: Array<TFrota> =[{onj1, obj2, etc}]
export const frota: TFrota[] = [
    {
      marca: 'Chevrolet',
      modelo: 'Onix',
      ano: 2019
    }, {
      marca: 'Chevrolet',
      modelo: 'Celta',
      ano: 2008
    }, {
      marca: 'Chevrolet',
      modelo: 'Vectra',
      ano: 2004
    }, {
      marca: 'Ford',
      modelo: 'EcoSport',
      ano: 2012
    }, {
      marca: 'Ford',
      modelo: 'Ka',
      ano: 2015
    }, {
      marca: 'Ford',
      modelo: 'Fiesta',
      ano: 2018
    }, {
      marca: 'Fiat',
      modelo: 'Uno',
      ano: 2020
    }, {
      marca: 'Fiat',
      modelo: 'Toro',
      ano: 2022
    }, {
      marca: 'Fiat',
      modelo: 'Punto',
      ano: 2017
    }, {
      marca: 'Toyota',
      modelo: 'Corolla',
      ano: 2021
    }, {
      marca: 'Toyota',
      modelo: 'Etios',
      ano: 2020
    }, {
      marca: 'Toyota',
      modelo: 'Yaris',
      ano: 2019
    }]