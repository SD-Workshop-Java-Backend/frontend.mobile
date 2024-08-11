import { useContext, useState} from "react";
import { Image, Keyboard } from "react-native";

import { ViewModal, ContainerModal, ViewTextInput, Input, ViewTouchableModal} from "../styles/ModalStyle";
import { ViewTouchable, ViewModalBtn } from "../styles/TaksStyle";
import { shadowInput } from "../styles/ModalStyle";

import MyContext from "../Context";
import DropShadow from "react-native-drop-shadow";
import api from "../service/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default MyModal = (props) => {

    const {isDark} = useContext(MyContext);
    
    const [editTask, setEditTask] = useState(props.task);

    async function updateTask() {
        
        const token = await AsyncStorage.getItem('@token');

        const response = await api.put(`/tasks/${props.id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }, 
            tasks: editTask,
            
        }).catch(err => console.log(err));
        
        Keyboard.dismiss();
    }

    return (
        <ContainerModal>
            <ViewModal background={isDark}>

                <ViewTextInput >
                    
                    <DropShadow style={shadowInput}>
                        <Input colorLetter={isDark} backgroundInput={isDark} onChangeText={value => setEditTask(value)} value={editTask} />
                    </DropShadow>
                    
                    <ViewTouchableModal onPress={updateTask}>
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