import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { ButtonFilterText, Container, ModalContent, ButtonFilter } from "../styles/CalendarModalStyle";
import { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";


const CalendarModal = ({setVisible, handleFilter}) => {

    const [dateNow, setDateNow] = useState(new Date());
    const [markedDates, setMarkedDates] = useState({});

    const handleOnDayPress = (date) =>{
        setDateNow(new Date(date.dateString));
        
        let markedDay = {};

        markedDay[date.dateString] = {
            selected: true,
            selectedColor: '#3b3dbf',
            textColor: '#fff'
        }

        setMarkedDates(markedDay);

        console.log(dateNow)
    }

    const handleFilterDate = () => {
        handleFilter(dateNow);
        setVisible();
    }

    return(
        <Container>
            <TouchableWithoutFeedback onPress={setVisible}>
                <View style={{flex: 1}}>

                </View>
            </TouchableWithoutFeedback>

            <ModalContent>

                <Calendar 
                    onDayPress={handleOnDayPress}
                    markedDates={markedDates}
                    enableSwipeMonths={true}
                    theme={{
                        todayTextColor: '#ff0000',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#fff'
                    }}
                />


                <ButtonFilter onPress={handleFilterDate}>
                    <ButtonFilterText>
                        Filtrar
                    </ButtonFilterText>
                </ButtonFilter>
            </ModalContent>
        </Container>
    );
}

export default CalendarModal;