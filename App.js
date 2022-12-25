import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import AdminHome from './screens/AdminHome';
import SubTaskDetails from './Component/SubTaskDetails';
import UpdateTask from './Component/UpdateTask';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          
          <Stack.Screen name="AdminHome" component={AdminHome} />
          <Stack.Screen name="SubTaskDetails" component={SubTaskDetails}
                        
                        options={{
                          headerShown: true,
                          title: 'Task List',
                          headerStyle: {
                            backgroundColor: '#73B9EE',
                          },
                          headerTintColor: '#fff',
                          headerTitleStyle: {
                            fontWeight: 'bold',
                          },
                        }}
          />
          <Stack.Screen name="UpdateTask" component={UpdateTask}
                        
                        options={{
                          headerShown: true,
                          title: 'Update Task',
                          headerStyle: {
                            backgroundColor: '#73B9EE',
                          },
                          headerTintColor: '#fff',
                          headerTitleStyle: {
                            fontWeight: 'bold',
                          },
                        }}
          />
          
        </Stack.Navigator>
    </NavigationContainer>
  );
}
