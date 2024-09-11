
import * as rls from "readline-sync";

let base : number = rls.questionInt ("ingrese la base del numero: ");
let exponente : number = rls.questionInt ("ingrese el exponente del numero (mayor o igual que 0): ");
let potencia : number = 1;

//-----------------------------------------------------------------
while (exponente < 0) {
                        exponente = rls.questionInt ("ingrese nuevamente el exponente del numero (mayor o igual que 0): ");
                      }

llamarpotencia (exponente);

console.log ("la potencia del numero ingresado es: ", potencia);


//-----------------------------------------------------------------
function llamarpotencia (exponente:number) {
                                            for (let contador = 0; contador < exponente; contador++) {
                                            potencia = potencia * base;
                                                                                                     }
                                                                                                     return potencia;
                                           }
//-----------------------------------------------------------------
