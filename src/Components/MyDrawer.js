import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { ContainerTitle, Logout, Title, TitleLogout } from "../styles/MyDrawerStyle";
import { useContext, useEffect } from "react";
import MyContext from "../Context";

const MyDrawer = (props) => {

    const {user, isDark, logout} = useContext(MyContext);

    const handleLogout = () => {
        logout();
    }

    useEffect(() => {
        return() => {
            
        }
    })

    return (
        <DrawerContentScrollView >
            <ContainerTitle>
                <Title color={isDark}>Olá {user.name}</Title>
            </ContainerTitle>

            <DrawerItemList {...props} />

            <Logout activeOpacity={0.5} onPress={handleLogout}>
                <TitleLogout >
                    Sair
                </TitleLogout>
            </Logout>
        </DrawerContentScrollView>
        
    );
}

export default MyDrawer;