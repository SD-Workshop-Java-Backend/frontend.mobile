import { StyleSheet, TouchableOpacity } from "react-native";
import styled from "styled-components/native"

export const Container = styled.View`
    background-color: #181A33;
    flex: 1;
    justify-content: center;
    align-items: center;
`; 

export const Logo = styled.Image`
    width: 115px;
    height: 100px;
    margin-bottom: 10px;
`;

export const Input = styled.TextInput`
    height: 70px;
    color: #fff;
    border-radius: 10px;
    padding: 20px;
    background-color: #3F414D; 
    font-size: 15px;
    margin: 0px 0px 20px 0px;
`;

export const inputShadow = StyleSheet.create({
    shadowColor: '#000',
    shadowOffset: {width: 8, height: 8},
    shadowOpacity: 0.7,
    shadowRadius: 1,
    width: '90%'
});


export const SubmitButton = styled.TouchableOpacity`
    background-color: #fff;
    justify-content: center;
    align-items: center;
    width: 90%;
    border-radius: 10px;
    height: 50px;
`;

export const SubmitText = styled.Text`
    color: #000;
    font-size: 16px;
`;

export const Link = styled.TouchableOpacity`
    margin-top: 15px;
    margin-bottom: 10px;
`;

export const LinkText = styled.Text`
    color: #fff;
    text-decoration: underline;
`;