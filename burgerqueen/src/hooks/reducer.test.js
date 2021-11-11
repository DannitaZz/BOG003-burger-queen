import { reducer, initialStateClean } from './reducer';
/* import { fireEvent, renderHook, act} from '@testing-library/react';
import { useReducer } from 'react'; */ 

describe('Pasan todos los casos del Reducer', () => {

  const initialState = JSON.parse(JSON.stringify(initialStateClean));

  test('retorna el menú de desayuno', () => {
      
      const updateAction = {type: 'actionBreak'};
      const updatedState = reducer(initialState, updateAction);
      console.log('Prueba: ', updatedState.menuData[0].key)
      expect(updatedState.menuData[0].key).toEqual('a');
    });

  test('retorna el menú de almuerzo/cena', () => {
    
    const updateAction = {type: 'actionLunch'};
    const updatedState = reducer(initialState, updateAction);
    console.log('Prueba: ', updatedState.menuData[0].key)
    expect(updatedState.menuData[0].key).toEqual('e');
  });

  test('retorna el estado inicial para nombre: vacío', () => {
    
    const updateAction = {type: 'cleanInputs'};
    const updatedState = reducer(initialState, updateAction);
    console.log('Prueba: ', updatedState.name)
    expect(updatedState.name).toEqual('');
  });
});