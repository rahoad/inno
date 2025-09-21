import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import TherapistListScreen from './screens/TherapistListScreen';
import TherapistDetailScreen from './screens/TherapistDetailScreen';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();


export default function App() {
return (
<NavigationContainer>
<Tab.Navigator
screenOptions={({ route }) => ({
tabBarIcon: ({ color, size }) => {
let iconName;
if (route.name === 'Home') iconName = 'home';
else if (route.name === 'List') iconName = 'list';
else if (route.name === 'Detail') iconName = 'person';
return <Ionicons name={iconName} size={size} color={color} />;
},
tabBarActiveTintColor: '#2563eb',
tabBarInactiveTintColor: 'gray',
})}
>
<Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Start' }} />
<Tab.Screen name="List" component={TherapistListScreen} options={{ title: 'Behandlere' }} />
<Tab.Screen name="Detail" component={TherapistDetailScreen} options={{ title: 'Profil' }} />
</Tab.Navigator>
</NavigationContainer>
);
}