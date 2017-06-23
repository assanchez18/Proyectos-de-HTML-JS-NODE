var personas = [
  {nombre: "Ricardo", edad: 63 },
  {nombre: "Paco",    edad: 55 },
  {nombre: "Enrique", edad: 32 },
  {nombre: "Adrián",  edad: 34 }
];


/*Apartado A
pluck(personas, "nombre");
pluck(personas, "edad");
*/
function pluck(array, fieldName) {
  var result = [];
  if (fieldName == "nombre") {
    array.forEach((array) => {
      result.push(" \"" + array.nombre + "\"");
    });
  } else if(fieldName == "edad") {
    array.forEach((array) => {
    result.push(" " + array.edad);
  });
  }
  console.log(result.toString());
}

/*Apartado B

partition(personas, function(pers) {
  return pers.edad >= 60;
  });
*/

function partition(array, funcion){
  var cumple = [];
  var noCumple = [];
  var resultado = [[]];
  array.forEach((array) => {
    b = funcion(array);
    if(b){
      cumple.push("{nombre: \"" + array.nombre + "\", edad: " + array.edad + "}");
    }
    else{
      noCumple.push("{nombre: \"" + array.nombre + "\", edad: " + array.edad + "}");
    }

  });
  resultado[0] = cumple;
  resultado[1] = noCumple;
  // console.log("[ \n [ " + resultado[0] + " ], \n");
  // console.log(" [ " + resultado[1] + " ]\n]");
  console.log(resultado.toString());
}
/*
Apartado C
groupBy(["Mario", "Elvira", "María", "Estela", "Fernando"],
function(str) { return str[0]; })
*/
function groupBy( array, funcion){
  var letras = [[]];

  array.forEach((array) => {
    b = funcion(array);
    if (typeof letras[b] != 'undefined')
      letras[b] = letras[b] + " " + array;
    else
    letras[b] = array;
  });
  console.log(letras);
}

/*
Apartado D

where(personas, { edad: 55 });
where(personas, { nombre: "Adrián" });
where(personas, { nombre: "Adrián", edad: 21 });
*/

function where(array, funcion){
    var resultado = "";
    if (typeof funcion["edad"] != 'undefined' && typeof funcion["nombre"] != 'undefined'){
      array.forEach((array) => {
      if(array.edad == funcion["edad"] && array.nombre == funcion["nombre"])
        resultado = array;
      });
    }
    else if(typeof funcion["edad"] != 'undefined'){
      array.forEach((array) => {
      if(array.edad == funcion["edad"])
        resultado = array;
      });
    }
    else {
      array.forEach((array) => {
      if(array.nombre == funcion["nombre"])
        resultado = array;
      });
    }
    console.log(resultado);
}
