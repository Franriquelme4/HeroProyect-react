import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types";

describe('Pruebas en authReducer', () => { 
    test('Debe de retornar el estado por defecto', () => { 
        const state =  authReducer({logged:false},{});

        expect(state).toEqual({logged:false});

     })
     test('Debe de autenticar el name del usuario', () => { 
        const action={
            type:types.login,
            payload:{name:'Francisco'}
        }
        const state =  authReducer({logged:false},action);

        expect(state).toEqual({logged:true,name:'Francisco'})
      })

      test('Debe de borrar en name del usuario',()=>{
          const action ={
              type:types.logout
          }
          const state =  authReducer({logged:false},action);

          expect(state).toEqual({logged:false})

      })
 })