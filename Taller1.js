
/*Profe vi algunos tuturiales, porque vi que al poner Parseint ya no me dejaba poner
null, me arrojaba un error, por eso puse con un ||  con un IsNan, y que el usuario al darle
cancelar, saliera del ciclo de una*/


// Guardo la variable menú que es lo que me va a mostrar las opciones cuando la llame dentro del ciclo.
let menu;
menu = ("Menú \n Ingrese una opción: \n 1.Helado \n 2.Hamburguesa \n 3.Perro Caliente \n 4.Ensalada \n 5.Salir");

/*Guardo otra variable que empieza desde cero y me va a mostrar lo que dice menú, pero tambien
permite digitar los numeros al usuario*/
let repetir=0


do{

    /*Dentro del do pongo el repetir que siempre va a mostrar los textos de menú y permite ingresar
    lo que digite el usuario y lo transformo en entero con parseint*/
    repetir = parseInt(prompt(menu));

/*Este if es por si el usuario le da cancelar, de una salga del ciclo con el break,
y que además puse dos opciones si de pronto repetir = null o es un isNan, ya que al 
poner parseInt no me deja usar el null debido a que ya no es una cadena*/

    if (repetir == null || isNaN(repetir) ){
        alert("Has salido del ciclo");
        break;
    }
    
    //Aqui el switch que muestra como alerta al usuario
switch(repetir){

    case 1: alert("Tu pedido es un Helado, precio $5000");
    break;
    case 2: alert("Tu pedido es una Hamburguesa, precio $18.000");
    break;
    case 3: alert("Tu pedido es un Perro Caliente, precio $15000");
    break;
    case 4: alert("Tu pedido es una Ensalada, precio $10.000");
    break;
    case 5: alert("Has salido del menú");
    break;
    default: alert("El código no existe");

}
}
//Finaliza con el while, que se repita todo hasta que el usuario digite 5.
while(repetir != 5);