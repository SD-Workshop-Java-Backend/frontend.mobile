import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: rgba(35, 35, 35, 0.3);
`
export const ButtonFilterText = styled.Text`
    color: #fff;
    font-size: 17px;
    font-weight: bold;
`
export const ButtonFilter = styled.TouchableOpacity`
    background-color: #000;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height: 50px;
`

export const ModalContent = styled.View`
    flex: 2;
    justify-content: space-evenly;
    padding: 14px;
    background-color: #fff;
`