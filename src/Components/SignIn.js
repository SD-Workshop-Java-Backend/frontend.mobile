import DropShadow from "react-native-drop-shadow";
import { Container, Input, Link, LinkText, Logo, SubmitButton, SubmitText, inputShadow } from "../styles/SignInStyle";

import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import MyContext from "../Context";
import { ActivityIndicator, Alert, Platform } from "react-native";

const SignIn = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const {signIn, user, loading} = useContext(MyContext);

    const handleLogin = () => {
        if (email == '' || password == '' ) return Alert.alert('Preencha todos os campos');
        signIn(email, password);
    }

    return(
        <Container behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
        >

            <Logo source={require('../img/logo.png')}/>
        
            <DropShadow style={inputShadow}>
                <Input
                    placeholder="Email"
                    value={email}
                    onChangeText={value => setEmail(value)}
                    placeholderTextColor="#fff"
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

            
            <SubmitButton activeOpacity={0.7} onPress={handleLogin}>
                
                {
                    loading ? (
                        <ActivityIndicator size={20} color="#000"/>
                    ) : (
                        
                        <SubmitText>
                            Login
                        </SubmitText>
                    )
                }

            </SubmitButton>

            <Link onPress={() => navigation.navigate('SignUp')}>
                <LinkText>
                    Criar nova conta
                </LinkText>
            </Link>
            
        
        </Container>

    );
}

export default SignIn;