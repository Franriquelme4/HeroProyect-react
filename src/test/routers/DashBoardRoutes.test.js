import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { DashBoardRoutes } from "../../routers/DashBoardRoutes";

describe('Pruebas con <DashBoardRoutes>', () => {
    const context = {
        user: {
            logged: true,
            name: 'Fran'
        }
    }
    test('Dede de mostrarse correctamente - MArvel ', () => {
        const wrapper = mount(<AuthContext.Provider value={context}>
            <MemoryRouter initialEntries={['/']}>
                <DashBoardRoutes />
            </MemoryRouter>
        </AuthContext.Provider>)
 
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Marvel Screen')
    })
    test('Dede de mostrarse correctamente - DC ', () => {
        const wrapper = mount(<AuthContext.Provider value={context}>
            <MemoryRouter initialEntries={['/dc']}>
                <DashBoardRoutes />
            </MemoryRouter>
        </AuthContext.Provider>)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('DcScreen')
    })
})