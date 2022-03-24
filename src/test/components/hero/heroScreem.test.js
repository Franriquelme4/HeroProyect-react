

import React from 'react';
import { mount } from "enzyme";
import { AuthContext } from "../../../auth/authContext";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { types } from "../../../types/types";
import { HeroScreen } from '../../../components/hero/HeroScreen';

const mockNavigate = jest.fn();
jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:()=>mockNavigate
}))
describe('Pruebas con heroScreen', () => { 
        test('No debe de mostrar el hero Screen', () => { 


            const wrapper = mount(
                <MemoryRouter initialEntries={['/hero']}>
                        <Routes>
                            <Route path='/hero' element={<HeroScreen />}/>
                            <Route path='/' element={<h1>No hero page</h1>}/>

                        </Routes>
                </MemoryRouter>
            )
        
            expect(wrapper.find('h1').text().trim()).toBe('No hero page')
         })

         test('debe de mostrar un heroes si se encunetra', () => { 


            const wrapper = mount(
                <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                        <Routes>
                            <Route path="/hero/:heroId" element={<HeroScreen />}/>
                            <Route path='/' element={<h1>No hero page</h1>}/>

                        </Routes>
                </MemoryRouter>
            )
            console.log(wrapper.html());
          expect(wrapper.find('.row').exists()).toBe(true);
         })

            test('debe de regresar a la pantalla inicial', () => { 

                const wrapper = mount(
                    <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                            <Routes>
                                <Route path="/hero/:heroId" element={<HeroScreen />}/>
                            </Routes>
                    </MemoryRouter>
                )
                wrapper.find('button').prop('onClick')();
                expect(mockNavigate).toHaveBeenCalledWith(-1);


             })
             test('debe de mostrar la pagina por defecto', () => { 


                const wrapper = mount(
                    <MemoryRouter initialEntries={['/hero/marvel-spider2323']}>
                            <Routes>
                                <Route path="/hero/:heroId" element={<HeroScreen />}/>
                                <Route path='/' element={<h1>No hero page</h1>}/>
    
                            </Routes>
                    </MemoryRouter>
                )
                console.log(wrapper.html());
              expect(wrapper.find('h1').text()).toBe('No hero page');
             })


 })