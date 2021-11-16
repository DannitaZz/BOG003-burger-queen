import React, { useReducer } from 'react';
import Header from './components/header/header';
import Menu from './components/menus/menus';
import TableStatus from './components/tableStatus/tableStatus';
import TakingOrders from './components/takingOrders/takingOrders';
import Kitchen from './components/kitchen/kitchen';

import './App.scss';
import {reducer, initialStateClean} from './hooks/reducer';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {

    /* Se crea un copia profunda del estado inicial con dos metodos como lo son: 'JSON.parse (toma una cadena JSON y la 
       transforma en un objeto de JavaScript)' y 'JSON.stringify (toma un objeto de JavaScript y lo 
       transforma en una cadena JSON.)' */
    const initialState = JSON.parse(JSON.stringify(initialStateClean));
    // Se inicializa el useReduce y se le pasa el reducer y el estado inicial que es una copia profunda del limpio
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        // Se realiza el routing para la pagina 
        <Router basename={process.env.PUBLIC_URL}>
            <div>
                <Header />
                <Switch>
                    <Route exact path={['/mesero', '/']}>
                        <div className='containerPrincipal'>
                            <Menu 
                                dispatch={dispatch}  // Se pasa directamente dispatch para hacer uso de él desde el componente de Menu
                                actionA={"actionBreak"}
                                actionB={"actionLunch"}
                            />
                            <TakingOrders
                                // props sirve para pasar  información de App a un componente mas pequeño en este caso takingOrders
                                state = {state}
                                // dispatch se le añade a la función que toma el tipo de caso y se encarga de capturar valores
                                on_change={e => dispatch({ type: "changeValue", value: e.target.value, item: e.target.name})}//
                                handleInputChange={e => dispatch({type: "changeInputs", fields: e.target.name, inputs: e.target.value})}
                                handleCleaner={e => dispatch ({type: 'cleanInputs'})}
                            />
                            <TableStatus  />                           

                        </div>
                    </Route>
                    <Route path='/cocina'>
                        <Kitchen />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;