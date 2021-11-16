import { reducer, initialState } from './reducer';
import Data from '../components/menus/menus.json';


describe('Pasan todos los casos del Reducer', () => {

    test('Debería retornar el menú de desayuno', () =>{
        const result= reducer({}, {type:'actionBreak'});
        const expected = {menuData:Data[0]["desayunos"]["opciones"]};
        expect(result).toEqual(expected);
    })

    test('Debería retornar el menú de almuerzo', () => {
        const result = reducer({}, {type:'actionLunch'});
        const expected = {menuData:Data[0]["Almuerzo/cena"]["opciones"]};
        expect(result).toEqual(expected);
    })
    test('Debería cambiar la cantidad del producto y el precio total', () => {
        const valuesInitial = {a:0, b:0, c:0, d:0, e:0, f:0, g:0, h:0, i:0, j:0, k:0, l:0, m:0, n:0, o:0, p:0, q:0, r:0}
        const valuesFinale = {a:0, b:5, c:0, d:0, e:0, f:0, g:0, h:0, i:0, j:0, k:0, l:0, m:0, n:0, o:0, p:0, q:0, r:0}
        const result = reducer({menuState:valuesInitial}, {type:'changeValue', item:'b', value:5});
        const expected = {menuState:valuesFinale, totalPrices:35}
        expect(result).toEqual(expected);
    })
    test('Debería retornar los valores de los inputs nombre de cliente, número de mesa, comentario a cocina', () => {
        const result = reducer({}, {type:'changeInputs', fields:['table', 'comment'] , inputs:['2', 'Café sin azúcar']})
        const expected = {'table,comment': ['2','Café sin azúcar']}
        expect(result).toEqual(expected)
    })
    test('Debería limpiar todos los inputs al confirmar la orden', () => {
        const result = reducer({}, {type:'cleanInputs'})
        const expected = initialState
        expect(result).toEqual(expected)
    })
    test('Debería retornar un error', () => {
        try{
            reducer({}, {type:'obteniendoUnError', error:new Error('chao')});
        } catch (e) {
            expect(e.message).toEqual('chao')
        }
    })
})