import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Query from './Query';
import Subjects from './Subjects';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Subjects" component={Subjects} />
            <Tab.Screen name="Query" component={Query} />
        </Tab.Navigator>
    );
}
export default MyTabs;