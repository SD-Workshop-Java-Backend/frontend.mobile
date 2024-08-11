import { createDrawerNavigator } from "@react-navigation/drawer";

import MyContext from "../Context";
import { useContext } from "react";

import { TouchableOpacity, Image } from "react-native";

import Todas from "../Components/Alltasks";
import Tarefas from "../Components/Tasks";
import MyDrawer from "../Components/MyDrawer";

const drawer = createDrawerNavigator();

const AppRoutes = () => {
    const {isDark, imgIcon, verifyIfIsDark} = useContext(MyContext);
    
    return(
        
        <drawer.Navigator
            screenOptions={{
                drawerStyle: {backgroundColor: isDark == false ? '#C5D4FF' : '#181A33' ,}, 
                drawerActiveBackgroundColor: isDark == false ? '#acc1ff' : '#3F414D',
                drawerLabelStyle: {color: isDark == false ? '#000' : '#fff'}
            }}
            drawerContent={props => <MyDrawer {...props}/>}>
            
            <drawer.Screen name="Tarefas" component={Tarefas} 
                options={{
                
                headerStyle: {backgroundColor: isDark == false ? '#C5D4FF' : '#181A33' ,}, 
                
                headerTintColor: isDark == false ? '#000' : '#fff',
                
                headerRight: () => (
                    <TouchableOpacity onPress={ verifyIfIsDark }>
                    <Image source={imgIcon} style={{ marginRight: 10}}/>
                    </TouchableOpacity>
                )
                }}/>
            
            <drawer.Screen name="Todas" component={Todas} />
        </drawer.Navigator>
        
    );
}

export default AppRoutes;