import { Container, ContainerDay, Title, TitleDesc, TouchableDate, ViewModalBtn, ViewTitle, ViewTouchable } from "../styles/TaksStyle";
import { useContext, useEffect, useState } from "react";
import MyContext from "../Context";
import CardTasks from "./CardTasks";
import { Image, Modal, FlatList, View, TouchableOpacity} from "react-native";
import MyModal from "./Modal";
import api from "../service/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialIcons";
import CalendarModal from "./CalendarModal";

export default Tasks = () => {

    const {backgroundColor, isDark, user, openModal, setOpenModal} = useContext(MyContext);
    
    const [listTasks, setListTasks] = useState([]);
    const [modalCalendar, setModalCalendar] = useState(false);
    const [aux, setAux] = useState(false);
    const [list, setList] = useState([]);

    let weekday = new Date().toLocaleDateString('pt-BR', {weekday: 'long'});

    useEffect(() => {
        loadTasks();
    },[listTasks]);

    async function loadTasks() {
        const token = await AsyncStorage.getItem('@token');

        const response = await api.get(`/tasks/${user.id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
              }
        })
        .then(response => setListTasks(response.data))
        .catch(err => console.log(err));
    }

    async function filterDateTasks(dateSelected) {
        const token = await AsyncStorage.getItem('@token');

        const respone = await api.post('/tasks/find/task/date', {
            date: dateSelected,

            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            setList(res.data);
            setAux(true);
        });
    }

    return (
        <Container background={backgroundColor}>

            <ContainerDay >
                <Title TitleDay={isDark} > 
                    {weekday[0].toUpperCase() + weekday.slice(1)}
                </Title>
                
                <ViewTitle >
                    <TitleDesc TitleDesc={isDark}>
                        {listTasks.length == 0 ? 'Não há tarefas' : 'Suas tarefas'}
                    </TitleDesc>

                    <TouchableDate activeOpacity={0.3} onPress={() => setModalCalendar(true)}> 
                        <Icon name="event" size={30} color={isDark == true ? "#fff" : "#000"}/>
                    </TouchableDate>
                </ViewTitle>
            </ContainerDay>

            <FlatList 
                data={aux == false ? listTasks : list}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <CardTasks data={item} />}
            />
                        
            <ViewTouchable onPress={() => setOpenModal(true)}>
                <ViewModalBtn background={isDark}>
                    <Image source={isDark == true ? require('../img/add.png') : require('../img/addBlack.png')} />
                </ViewModalBtn >
            </ViewTouchable>

            <Modal animationType="slide" visible={openModal} transparent={true}>
                <MyModal close={() => setOpenModal(false)} />
            </Modal>

            <Modal animationType="fade" visible={modalCalendar} transparent={true}>
                <CalendarModal 
                    setVisible={ () => setModalCalendar(false)}
                    handleFilter={filterDateTasks}
                />
            </Modal>
        </Container>
    );
}