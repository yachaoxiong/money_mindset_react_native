import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image } from 'react-native';
import getAppStyle from './common/styles';
import LoginScreen from './screens/LoginScreen';
import BillScreen from './screens/BillScreens';
import BudgetScreen from './screens/BudgetScreen';
import RegisterScreen from './screens/RegisterScreen';
import DatePickerScreen from './screens/DatePickerScreen';
import BottomNavigationTabs from './navigation/BottomNavigationTabs'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import StoreContextProvider from './store/store';
import { StoreContext } from './store/store';

const Stack = createNativeStackNavigator();
const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={LoginScreen}
      options={{
        title: '  ',
        headerShadowVisible: false,
      }}
    />
    <AuthStack.Screen name="Register" component={RegisterScreen}
      options={{
        headerBackImage: () => (
          <View style={{ marginLeft: 10 }}>
            <FontAwesome
              name="chevron-left"
              size={20}
              color={getAppStyle().colors.text}
            />
          </View>
        ),
        title: '  ',
        headerShadowVisible: false,
      }}
    />
  </AuthStack.Navigator>
);

export default function App() {
  return (
    <StoreContextProvider>
      <StoreContext.Consumer>
        {({ myUser }) => (
          <NavigationContainer>
            <Stack.Navigator>
              {!myUser ?
                <Stack.Screen name="Auth" component={AuthStackScreen} options={{ headerShown: false }} /> : (
                  <Stack.Screen
                    name="BottomNavigationTabs"
                    component={BottomNavigationTabs}
                    options={{ headerShown: false }}
                  />)
              }
              <Stack.Screen
                name="BillScreen"
                component={BillScreen}
                options={{ headerShown: false }} />
              <Stack.Screen
                name="BudgetScreen"
                component={BudgetScreen}
                options={{ headerShown: false }} />
              <Stack.Screen
                name="DatePickerScreen"
                component={DatePickerScreen}
                options={{ headerShown: true }} />
            </Stack.Navigator>
          </NavigationContainer>
        )}
      </StoreContext.Consumer>
    </StoreContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
