import { LoginScreen } from "../../../components/login/LoginScreen";
import React from 'react';
import { mount } from "enzyme";
import { AuthContext } from "../../../auth/authContext";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { types } from "../../../types/types";
const mockNavigate = jest.fn();
jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:()=>mockNavigate
}))
describe('Pruebas con <Login Screen', () => { 
    const contextValue = {
        dispatch:jest.fn(),
        user:{
                logged:false
            }
        }

//const contextValue = 
    const wrapper =  mount(
    <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/login']}>
            <Routes >
                <Route path='/login' element={<LoginScreen/>}/>
            </Routes>
        </MemoryRouter>

    </AuthContext.Provider>
    );
    test('Debe de mostrarse correctamente', () => { 
        expect(wrapper).toMatchSnapshot();


     })
     test('Debe de realizar el dispach y la navegacion', () => { 
         const handleClick =  wrapper.find('button').prop('onClick');
         handleClick();
         expect(contextValue.dispatch).toHaveBeenCalledWith({
             type:types.login,
             payload:{name:'Francisco'}
         });
         expect(mockNavigate).toHaveBeenCalledWith('/',{replace:true});
         localStorage.setItem('lastPath','/dc');
         handleClick();
         expect(mockNavigate).toHaveBeenCalledWith('/',{replace:true});
      })
 })
