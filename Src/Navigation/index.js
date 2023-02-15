import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import Login from '../Screen/Auth/Login';
import Home from '../Screen/Home/Home';
import Profile from '../Screen/Profile/Profile';
import ToDoList from '../Screen/ToDo/ToDoList';
import TeamHome from '../Screen/TeamManagment/TeamHome';
import WorkerProfile from '../Screen/TeamManagment/WorkerProfile';
import suspectDefectHome from '../Screen/SuspectDefect/SuspectDefectHome';
import SuspectBlockDetail from '../Screen/SuspectDefect/SuspectBlockDetail';
import SuspectWorkerProfile from '../Screen/SuspectDefect/SuspectWorkerProfile';
import AddToScrap from '../Screen/SuspectDefect/AddToScrap';
const Stack = createNativeStackNavigator();

export default function Navigation(props) {
    return (
        <NativeBaseProvider>
            <StatusBar backgroundColor={'#000'} />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen name="ToDoList" component={ToDoList} />
                    <Stack.Screen name="TeamHome" component={TeamHome} />
                    <Stack.Screen name="WorkerProfile" component={WorkerProfile} />
                    <Stack.Screen name="suspectDefectHome" component={suspectDefectHome} />
                    <Stack.Screen name="SuspectBlockDetail" component={SuspectBlockDetail} />
                    <Stack.Screen name="SuspectWorkerProfile" component={SuspectWorkerProfile} />
                    <Stack.Screen name="AddToScrap" component={AddToScrap} />
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}


