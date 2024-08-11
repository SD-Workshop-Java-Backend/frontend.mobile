import DropShadow from "react-native-drop-shadow";
import { Container, Input, Link, LinkText, Logo, SubmitButton, SubmitText, inputShadow } from "../styles/SignInStyle";

import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import MyContext from "../Context";
import { ActivityIndicator } from "react-native";

const SignUp = () => {
    
    const {SignUp, loading} = useContext(MyContext);

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSignUp = () => {
        if (name === '' || email === '' || password === '') alert('Todos os campos devem ser preenchidos');
        SignUp(name, email, password);
        navigation.goBack();
    }
    
    return(

        <Container behavior={Platform.OS === 'ios' ? 'padding' : ''}
            enabled
        >

            <Logo source={require('../img/logo.png')}/>
        
            <DropShadow style={inputShadow}>
                <Input
                    placeholder="Name"
                    value={name}
                    placeholderTextColor="#fff"
                    onChangeText={value => setName(value)}
                />
            </DropShadow>

            <DropShadow style={inputShadow}>
                <Input
                    placeholder="Email"
                    value={email}
                    placeholderTextColor="#fff"
                    onChangeText={value => setEmail(value)}
                />
            </DropShadow>
            
            <DropShadow style={inputShadow}>
                <Input 
                    placeholder="Senha"
                    placeholderTextColor="#fff"
                    value={password}
                    onChangeText={value => setPassword(value)}
                    secureTextEntry={true}
                />
            </DropShadow>

            
            <SubmitButton activeOpacity={0.7} onPress={handleSignUp}>
                
                {
                    loading  ? (
                        <ActivityIndicator size={20} color="#000"/>
                    ) : (
                        <SubmitText>
                            Cadastrar
                        </SubmitText>
                    )
                }
                
            </SubmitButton>

            <Link onPress={() => navigation.goBack()}>
                <LinkText>
                    Já possui conta? faça o login
                </LinkText>
            </Link>
            
        
        </Container>

    );
}

export default SignUp;