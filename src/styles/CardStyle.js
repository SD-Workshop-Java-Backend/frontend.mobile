import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const ViewCard = styled.View`
    background-color: ${(props) => props.backgroundCard ? '#3F414D' : '#fff'};
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    height: 70px;
    margin: 0px 10px 20px 10px;
    border-radius: 10px;
`
export const TextTasks = styled.Text`
    color: ${(props) => props.text ? '#fff' : '#000'};
    font-size: 16px;
    text-decoration: ${(props) => props.complete ? 'line-through' : 'none'};
    width: 110px;
`
export const styleCard = StyleSheet.create({
    shadowColor: '#000',
    shadowOffset: {width: 8, height: 8},
    shadowOpacity: 0.7,
    shadowRadius: 1,
});
