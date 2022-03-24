import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../auth/authContext"
import { PrivateRoute } from "../../routers/PrivateRoute"
const mockNavigate = jest.fn();
jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    Navigate:()=><span>Saliendo</span>
}))
describe('Test con private route', () => { 
Storage.prototype.setItem=jest.fn();

    test('Debe de mostrar el componente si esta autenticado', () => { 
        const contextValue = {
            user:{
                name:'Francisco',
                logged:true
            }
        }
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <PrivateRoute>
                        <h1>Private component </h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );
            console.log(wrapper.html());
        expect(wrapper.text().trim()).toBe('Private component');
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath','/');


     })
     test('debe de bloquear el component ', () => { 
        const contextValue = {
            user:{
             
                logged:false
            }
        }
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <PrivateRoute>
                        <h1>Private component </h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );
            console.log(wrapper.html());
        expect(wrapper.text().trim()).toBe('Saliendo');
     })
 })