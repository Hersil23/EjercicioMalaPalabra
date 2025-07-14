/* Crea una función que reciba un texto o parrafo y verifique si contiene alguna las siguientes malas palabras:
  - "tonto"
  - "chispas"
  - "recorcholis"
  - "rayos"
  - "caracoles"
  - "cielos"
  Si el texto contiene alguna de estas palabras, sustituye por "" y retorna el texto modificado.
  Si no contiene ninguna, retorna el texto original.
*/

function evaluarMalasPalabras(texto) {
  let malasPalabras = [
    "tonto", 
    "chispas", 
    "recorcholis", 
    "rayos",
    "caracoles", 
    "cielos",
  ];

 malasPalabras.forEach((palabra) => {
  if (texto.includes(palabra)) {
    texto = texto.towerLowerCasa().replaceAll(palabra, (*).repeat(palabra.length)
  }
 });
 return texto;
}

console.log(evaluarMalasPalabras("rayos, Jhony es un tonto. Cielos, esto me desespera."))
