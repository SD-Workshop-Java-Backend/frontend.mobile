import { useContext, useState } from "react";
import { Image, Keyboard } from "react-native";

import { ViewModal, ContainerModal, ViewTextInput, Input, ViewTouchableModal} from "../styles/ModalStyle";
import { ViewTouchable, ViewModalBtn } from "../styles/TaksStyle";
import { shadowInput } from "../styles/ModalStyle";

import MyContext from "../Context";
import DropShadow from "react-native-drop-shadow";
import api from "../service/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { format } from "date-fns";

export default MyModal = (props) => {

    const {isDark, user} = useContext(MyContext);

    const [tasks, setTasks] = useState('');

    async function createTask() {
        
        const token = await AsyncStorage.getItem('@token');

        const response = await api.post("/tasks/register/task", {
            headers: {
                'Authorization': `Bearer ${token}`
            }, 
            tasks: tasks,
            data: format(new Date(), "yyyy-MM-dd"),
            user: {
                id: user.id
            }
        }).catch(err => console.log(err));
        
        Keyboard.dismiss();
    }

    return (
        <ContainerModal>
            <ViewModal background={isDark}>

                <ViewTextInput >
                    
                    <DropShadow style={shadowInput}>
                        <Input colorLetter={isDark} backgroundInput={isDark} onChangeText={value => setTasks(value)} />
                    </DropShadow>
                    
                    <ViewTouchableModal onPress={createTask}>
                        <ViewModalBtn background={isDark}>
                            <Image source={isDark == true ? require('../img/add.png') : require('../img/addBlack.png')} />
                        </ViewModalBtn >
                    </ViewTouchableModal >

                </ViewTextInput>

                <ViewTouchable onPress={props.close}>
                    <ViewModalBtn background={isDark}>
                        <Image source={isDark == true ? require('../img/close.png') : require('../img/closeBlack.png')} />
                    </ViewModalBtn >
                </ViewTouchable>

            </ViewModal>
        </ContainerModal>
        
    );
}