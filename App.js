import ViewTodosScreen from './src/screens/viewToDoscreen';
import AddTodoScreen from './src/screens/addToDoscreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigation } from '@react-navigation/stack';

const Stack = createStackNavigation();

const App = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator initialRouteName="ViewTodos">
        <Stack.Screen
          name="AddTodo"
          component={AddTodoScreen}
          options={{ title: 'Tambah To-Do' }}
        />
        <Stack.Screen
          name="ViewTodos"
          component={ViewTodosScreen}
          options={{ title: 'Daftar To-Do' }}
        />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

export default App;
