import { mount } from "enzyme";
import { AuthContext } from "../../auth/authContext";
import { AppRouter } from "../../routers/AppRouter";

describe("Pruebas con AppRouter", () => {
  const contextValueFalse = {
    user: {
      logged: false,
    },
  };
  const contextValueTrue = {
    user: {
      logged: true,
      name:'Fran'
    },
  };
  test("Debe de mostrar login si no esta autenticado", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValueFalse}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h1").text().trim()).toBe("LoginScrean");
    expect(wrapper.find('.navbar').exists()).toBe(false);
  });

  test("Debe de mostrar en componente de marvel", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValueTrue}>
        <AppRouter />
      </AuthContext.Provider>
    );
console.log(wrapper.html());
     expect(wrapper).toMatchSnapshot();
     expect(wrapper.find('.navbar').exists()).toBe(true);
    // expect(wrapper.find("h1").text().trim()).toBe("LoginScrean");
  });
});
