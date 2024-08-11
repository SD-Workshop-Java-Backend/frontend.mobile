import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { render, fireEvent, screen} from "@testing-library/react-native";
import SignIn from "../Components/SignIn";
import MyContext from "../Context";
import { Alert } from "react-native";

describe('SignIn', () => {
    const mockSignIn = jest.fn();

    test('SignIn render Correctly', () => {
        render(
            <MyContext.Provider value={{signIn: mockSignIn, user: null, loading: false}}>
                <NavigationContainer>
                    <SignIn />
            </NavigationContainer>
        </MyContext.Provider>
        );
    });

    test('verify if button login is pressed', () => {
        render(
            <MyContext.Provider value={{signIn: mockSignIn, user: null, loading: false}}>
                <NavigationContainer>
                    <SignIn />
                </NavigationContainer>
            </MyContext.Provider>
        );
        
        // capturando o texto do alert
        jest.spyOn(Alert, 'alert').mockImplementation((title, message) => {});
        
        // selecionando o botão de login
        const loginButton = screen.getByText('Login');
      
        // pressionando o botão de login
        fireEvent.press(loginButton);
        
        // verificando se o texto do alert é o mesmo que aparece para o usuário
        expect(Alert.alert).toHaveBeenCalledWith('Preencha todos os campos');
      
    });

    test('verify if input email is empty', () => {
        render(
            <MyContext.Provider value={{signIn: mockSignIn, user: null, loading: false}}>
                <NavigationContainer>
                    <SignIn />
                </NavigationContainer>
            </MyContext.Provider>
        );

        const inputEmail = screen.getByPlaceholderText('Email');
        const inputPassword = screen.getByPlaceholderText('Senha');
        const loginButton = screen.getByText('Login');
         
        fireEvent.changeText(inputEmail, '');
        fireEvent.changeText(inputPassword, '12345678');

        fireEvent.press(loginButton);

        jest.spyOn(Alert, 'alert').mockImplementation((title, message) => {});
        
        expect(Alert.alert).toHaveBeenCalledWith('Preencha todos os campos');
    });

    test('verify if input password is empty', () => {
        render(
            <MyContext.Provider value={{signIn: mockSignIn, user: null, loading: false}}>
                <NavigationContainer>
                    <SignIn />
                </NavigationContainer>
            </MyContext.Provider>
        );

        jest.spyOn(Alert, 'alert').mockImplementation((title, message) => {});

        const inputEmail = screen.getByPlaceholderText('Email');
        const inputPassword = screen.getByPlaceholderText('Senha');
        const loginButton = screen.getByText('Login');
         
        fireEvent.changeText(inputEmail, 'teste@gmail.com');
        fireEvent.changeText(inputPassword, '');

        fireEvent.press(loginButton);
        
        expect(Alert.alert).toHaveBeenCalledWith('Preencha todos os campos');
    });

    
}); 

