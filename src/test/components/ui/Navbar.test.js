import { mount, shallow } from "enzyme";
import { Navbar } from "../../../components/ui/Navbar";
import React from 'react';
import { MemoryRouter, Route, Routes, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../auth/authContext";
import { types } from "../../../types/types";
const mockNavigate = jest.fn();
jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:()=>mockNavigate
}))
describe('Pruebas con navbar.test', () => { 
const contextValue = {
    dispatch:jest.fn(),
    user:{
            name:'Pedro',
            logged:true
        }
    }

        const wrapper =  mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path='/' element={<Navbar/>} />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>);
    test('Debe de mostrarse correctamente', () => { 

                expect(wrapper).toMatchSnapshot();
                expect(wrapper.find('.text-info').text().trim()).toBe('Pedro');

     });


     test('Debe de llamar el logout, llamar al navigate y el dispach', () => { 
        wrapper.find('button').prop('onClick')();

        expect(contextValue.dispatch).toHaveBeenCalledWith({'type':types.logout});
        expect(mockNavigate).toHaveBeenCalledWith('/login',{replace:true});

      })

    


 })