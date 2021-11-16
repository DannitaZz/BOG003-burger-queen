import Data from '../components/menus/menus.json';

/* Declaramos una constante para llamar nuestro menu de desayunos y almuerzo/cena
   e inicializamos variables vacias para se vayan llenando con sus respectivos 
   cantidades y precios. */
const breakData = Data[0]["desayunos"]["opciones"]  
const lunchData = Data[0]["Almuerzo/cena"]["opciones"] 
let initialMenuState = {} 
const prices = {} 

/* Recorremos los menús para desayuno y para almuerzo/cena, 
llenamos la variable initialMenuState con tantos ceros como productos tiene el menú
Llenamos la variable prices con los precios de cada producto en el menú */
for (let item of breakData){
    initialMenuState[item["key"]] = "0"
    prices[item["key"]] = item["precio"]
  }
  for (let item of lunchData){
    initialMenuState[item["key"]] = "0"
    prices[item["key"]] = item["precio"]  
  }

  // Objeto que guarda el estado inicial
  export const initialState = {
        
    menuData: breakData,
    menuState: initialMenuState,
    totalPrices: 0,
    name: '',
    table:'',
    comment: '',
    
}

export const mult = (obj1, obj2) => {
    let sum = 0;
    const arr1 = Object.values(obj1);
    const arr2 = Object.values(obj2);

    for(let i=0; i< arr2.length; i++) {
        sum += parseInt(arr1[i])*arr2[i];
    }
    return sum
}

export const reducer = (state, action) => {
    switch (action.type) {
    // actionBreak sucede cuando se  selecciona el botón del menu de desayuno y renderiza el respectivo menú
    case "actionBreak":
        return {...state, menuData: breakData}
    // actionLunch sucede cuando se  selecciona el botón del menu de Almuerzo/cena y renderiza el respectivo menú
    case "actionLunch":
        return {...state, menuData: lunchData}
    /* changeValue sucede cuando  se cambia la cantidad de los productos y asi retorna el precio de los productos
     y calcula  el total de la cuenta */
    case "changeValue":
        const newMenuState = {...state.menuState, [action.item]:action.value}
        const thePrices = mult(newMenuState, prices); // Guardamos el total de la cuenta en la variable thePrices
        return {...state, menuState: newMenuState, totalPrices: thePrices}
    /* changeInputs sucede cuando se escribe el nombre del cliente en el input,
     se selecciona la mesa o se escribe el comentario a cocina y actualiza el estado */
    case "changeInputs":
        return {...state, [action.fields]: action.inputs}    
    // cleanInputs limpia los campos retornando el estado inicial limpio
    case "cleanInputs":
        return initialState
        
    default:
    throw new Error('chao');
    } 
}

