import styled from "styled-components/native";

export const ContainerTitle = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
    flex: 1;
`;

export const Title = styled.Text`
    color: ${props => props.color ? '#fff' : '#000'} ;
    font-size: 16px;
`;

export const TitleLogout = styled.Text`
    color: #ff0000;
    font-size: 17px;
    letter-spacing: 1px;
`;

export const Logout = styled.TouchableOpacity`
    width: 90%;
    justify-content: center;
    align-items: center;
    align-self: center;
    border-radius: 10px;
    height: 40px;
    margin-top: 15px;
    border-color: #ff0000;
    border-style: solid;
    border-width: 1px;
`;