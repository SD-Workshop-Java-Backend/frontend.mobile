import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";

const AuthRoutes = () => {
    
    const AuthStack = createNativeStackNavigator();
    
    return(
        <AuthStack.Navigator>
        
            <AuthStack.Screen 
                name="SignIn"
                component={SignIn}
                options={
                    {headerShown: false}
                }
            />

            <AuthStack.Screen 
                name="SignUp"
                component={SignUp}
                options={
                    {headerShown: false}
                }
            />
        
        </AuthStack.Navigator>
    );  
}

export default AuthRoutes;