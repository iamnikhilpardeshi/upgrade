import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SliderBox} from 'react-native-image-slider-box';

class ExploreScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('./assets/images/img1.jpg'),
        require('./assets/images/img2.jpg'),
        require('./assets/images/img3.jpg'),
        require('./assets/images/img4.jpg'),
      ],
    };
  }
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1}}>
        <Text style={styles.titleText}>gradeUp</Text>
        <View style={styles.container}>
          <SliderBox images={this.state.images} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
function LearnScreen() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Learn screen</Text>
    </View>
  );
}
function ProfileScreen() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile screen</Text>
    </View>
  );
}
const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Explore" component={ExploreScreen} />
      <HomeStack.Screen name="Learn" component={LearnScreen} />
      <HomeStack.Screen name="Profile" component={ProfileScreen} />
    </HomeStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Explore" component={HomeStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
