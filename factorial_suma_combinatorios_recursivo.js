"use strict;"
var n = 5;
var m = 3;


//APARTADO A
//console.log(factStandard(n));
function factStandard(n) {
  var resultado = 1;
  if (typeof n != 'number')
    return Error("El dato " + n + " no es un número.");
  else if (n < 0)
    return Error("No existe el factorial de un número negativo.");

  else if (n == 0)
    return 1;

  else
    for (i = 1; i <= n; i++)
      resultado = i * resultado;

  return resultado;

}


//APARTADO B
/*factCallback(n, function(err, f) {
  if (err) {
    console.log("Error: " + err.message);
  } else {
    console.log("El factorial de " + n + " es " + f);
  }
});*/
function factCallback(n, recursivo) {
  if (n < 0)
    recursivo(factStandard(n), undefined);
  else {
    recursivo(null, factStandard(n));
  }
}


//APARTADO C
/*binomCallback(n, m, function(err, result) {
  if (err) {
    console.log("Error: " + err.message);
  } else {
    console.log("binom( " + n + ", " + m + ") = " + result);
  }
});*/

function binomCallback(n, m, recursivo) {
  var factN, factM, factNM;
  factCallback(n, function(err, factN) {
    if (err)
      recursivo(err, null);
    else {
      factCallback(m, function(err, factM) {
        if (err)
          recursivo(err, null);

        else {
          factCallback(n - m, function(err, factNM) {
            if (err)
              recursivo(err, null);
            else {
              result = factN / (factM * factNM);
              recursivo(null, result);
            }

          });
        }
      });

    }

  });
}

//APARTADO D
sumaCombinatorios(n);
function sumaCombinatorios(n) {
  if (n < 2)
    console.log("Error: El número introducido debe ser mayor o igual que 2.");
  else {
    var sumaTotal = 0;
    for (j = 0; j <= n ;j++) {

      binomCallback(n, j, function(err, resultado) {
      if (err) {
        console.log("Error: " + err.message);
      }
      else{
          sumaTotal += resultado;

        }
      });

    }
  }
  console.log(sumaTotal);
}
