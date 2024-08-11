import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";

import MyContext from "../Context";
import Routes from "../routes";
import api from "../service/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default App = () => {

  const [isDark, setIsDark] = useState(false);
  const [imgIcon, setImgCon] = useState(require('../img/moon.png'));
  const [backgroundColor, setBackgroundColor] = useState('#181A33');

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [looggedInUser, setLoggedInUser] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  
  useEffect(() => {
    async function loadStorage() {

      const token = await AsyncStorage.getItem('@token');
      if (token) {
        const response = await api.get('/user/data', {
          
          headers: {
            'Authorization': `Bearer ${token}`
          }

        }).then((response) => {
          api.defaults.headers['Authorization'] = `Bearer ${token}`;
          setUser(response.data);
          setLoggedInUser(true);
          setLoadingUser(false);
        })
        .catch(() => {
          setUser(null);
          setLoadingUser(false);
          
        });        
      }else setUser(null);
      setLoadingUser(false);
      
    }

    loadStorage();
    verifyIfIsDark()
  }, []);

  const verifyIfIsDark = () => {    
    if (isDark == false) {
      setImgCon(require('../img/moon.png'));
      setIsDark(true);
      setBackgroundColor('#181A33');
    }
    else {
      setImgCon(require('../img/sun.png'));
      setIsDark(false);
      setBackgroundColor('#C5D4FF');
    }

    
  }

  async function SignUp(name, email, password) {
    setLoading(true);
    try {
      const response = await api.post('/user/register', {
        name: name,
        email: email,
        password: password
      });
      setLoading(false);
      return true;
    } 
    catch (error) {
      console.log('Error ao se cadastrar: ' + error);
      setLoading(false);
    }
  }

  async function signIn(email, password) {
    setLoading(true);
    
    try {
      const response = await api.post('/user/login', {
        email: email,
        password: password
      });  

      const {id, name, token} = response.data;

      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      await AsyncStorage.setItem('@token', token);

      setUser({id, name, email});
      setLoggedInUser(true);
      setLoading(false);
    } 
    catch (error) {
      console.log("Erro ao loggar: " + error);
      setLoading(false);
    }
  }

  async function logout() {
    await AsyncStorage.clear()
      .then(() => {
        setLoggedInUser(false);
      })
      .catch(err => console.log('erro ao deslogar usuário: ' + err));
  }

  return (
    <MyContext.Provider value={{backgroundColor, setBackgroundColor, isDark, imgIcon, verifyIfIsDark, SignUp, loading, user, signIn, looggedInUser, loadingUser, logout, openModal, setOpenModal}}>
      <NavigationContainer>
      
        <Routes/>
      
      </NavigationContainer>
    </MyContext.Provider>
  );
}