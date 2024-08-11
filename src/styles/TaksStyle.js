import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${(props) => props.background};
    flex: 1;
`
export const ContainerDay = styled.View`
    margin-left: 26px;
    margin-top: 20px;
    margin-bottom: 34px;
`
export const ViewTitle = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const TouchableDate = styled.TouchableOpacity`
    margin-top: 15px;
    margin-right: 15px;
    align-items: baseline;
`;

export const Title = styled.Text`
    color: ${(props) => props.TitleDay ? '#fff' : '#000'};
    font-size: 26px;   
`
export const TitleDesc = styled.Text`
    color: ${(props) => props.TitleDesc ? '#fff' : '#000'};
    font-size: 17px;
    margin-top: 22px;
`
export const ViewModalBtn = styled.View`
    background-color: ${(props) => props.background ? '#3F414D' : '#fff'};
    width: 50px;
    height: 50px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;    
` 
export const ViewTouchable = styled.TouchableOpacity`
    position: absolute;
    bottom: 26px;
    align-self: center;
`