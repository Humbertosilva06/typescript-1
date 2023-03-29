//OBS: o tsconfig esta na raiz do projeto, aí pra transpilar tive que que por o tsc e o caminnho src/fixacao/exercicio1/index.ts
// criei um script com essex comandos pra rodar

function checaTriangulo(a:number, b:number, c:number): string {
    if ((a !== b) && (b !== c)) {
      return 'Escaleno'
    } else if (a === b && b === c) {
      return 'Equilátero'
    } else {
      return 'Isósceles'
    }
  }
  console.log(checaTriangulo(7, 7, 7))
  console.log(checaTriangulo(7, 7, 9))
  console.log(checaTriangulo(7, 8, 9))
  console.log("teste transpilação")