import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const ContainerModal = styled.View`
    flex: 1;
    justify-content: flex-end;
`
export const ViewModal = styled.View`
    background-color: ${(props) => props.background ? '#363c5f' : '#acc1ff'};
    height: 333px;
    border-radius: 30px 30px 0px 0px;   
`
export const ViewTextInput = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`
export const Input = styled.TextInput`
    background-color: ${(props) => props.backgroundInput ? '#3F414D' : '#fff'};
    width: 250px;
    margin: 33px 14px;
    border-radius: 10px;
    color: ${(props) => props.colorLetter ? '#fff' : '#000'};
    font-size: 17px;
    padding: 10px;
`
export const ViewTouchableModal = styled.TouchableOpacity``;

export const shadowInput = StyleSheet.create({
    shadowColor: '#000',
    shadowOffset: {width: 7, height: 7},
    shadowOpacity: 0.7,
    shadowRadius: 1,
});