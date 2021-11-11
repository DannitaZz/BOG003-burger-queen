export const mockData = 
[{ "desayunos": 
    {"opciones" : [
        {
            "producto" : "Café americano",
            "precio" : 5,
            "key" : "a"
        }/* ,
        {
            "producto" : "Café con Leche",
            "precio" : 7,
            "key" : "b"
        } */
    ] },
    "Almuerzo/cena":
    {"opciones": [
        {
            "producto" : "Hamburguesa Simple Res",
            "precio" : 10,
            "key" : "e"
        },
        {
            "producto" : "Hamburguesa Simple Pollo",
            "precio" : 10,
            "key" : "f"
        }
    ],
}}]

export const breakData = mockData[0]["desayunos"]["opciones"]  
export const lunchData = mockData[0]["Almuerzo/cena"]["opciones"] 
export let initialMenuState = {}
export const prices = {}

for (let item of breakData){
    initialMenuState[item["key"]] = "0"
    prices[item["key"]] = item["precio"]
  }
  for (let item of lunchData){
    initialMenuState[item["key"]] = "0"
    prices[item["key"]] = item["precio"]  
  }

export const initialStateClean= {
    menuData: breakData,
    menuState: initialMenuState,
    totalPrices: 0,
    name: '',
    table:'',
    comment: '',
}

/* export const on_change =  jest.fn(); 
export const handleInputChange = jest.fn();
export const handleCleaner = jest.fn(); */

/* const renderOrders = () => 
render(<TakingOrders 
     state={mockState}
     menuData={breakData}
     menuState={initialMenuState}
     on_change={on_change}
     handleInputChange={handleInputChange}
     prices={prices}
     comment={mockState.comment} 
     handleCleaner={handleCleaner}
     />)
*/ 