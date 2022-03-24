import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { SearchScreen } from "../../../../components/search/SearchScreen";

const mockNavigate = jest.fn();
jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:()=>mockNavigate
}));
describe('Pruebas en <SearchScreem/>', () => { 
    test('Debe de mostrarse correctamente con valores por defecto', () => { 
        const wrapper =  mount(
        <MemoryRouter initialEntries={['/search']}>
            <SearchScreen/>
        </MemoryRouter>)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Buscar un Heroe');
     })

     test('Debe de mostrar a batman y el input con el valor de queryString', () => { 
        const wrapper =  mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchScreen/>
            </MemoryRouter>)
            expect(wrapper.find('input').prop('value')).toBe('batman');
            expect(wrapper).toMatchSnapshot();
      })

      test('Debe de mostrar un error si no se encunetra', () => { 
        const wrapper =  mount(
            <MemoryRouter initialEntries={['/search?q=batman-123']}>
                <SearchScreen/>
            </MemoryRouter>)
            expect(wrapper.find('.alert-danger').text()).toBe('No se encuetran Resultados');
       
      })
      test('DEbe de llamar el navigate a la nueva pantalla', () => { 
        const wrapper =  mount(
            <MemoryRouter initialEntries={['/search']}>
                <SearchScreen/>
            </MemoryRouter>);
        wrapper.find('input').simulate('change',{target:{
            name:'searchText',
            value:'Batman'}
        });
        wrapper.find('form').prop('onSubmit')({
                preventDefault:()=>{}
            });
            expect(mockNavigate).toHaveBeenCalled();
       })
 })