import { useContext } from "react";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import MyContext from "../Context";

import { View, ActivityIndicator } from "react-native";

const Routes = () => {

    const {looggedInUser, loadingUser} = useContext(MyContext);
    
    if (loadingUser) {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#181A33'}}>
                <ActivityIndicator size="large" color="#fff"/>
            </View>
        );
    }

    return(
        looggedInUser ? <AppRoutes /> : <AuthRoutes/>
    );
}

export default Routes;