import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ padding: 49, color: 'white'}}>Lab 1: Spinning Up React Native App! </Text>
      <Text style={{ padding: 49, color: 'white'}}>Incredible Todo List App </Text>
      <Text style={{ padding: 49, color: 'white'}}>My name is Muhabat Rahiq. </Text>
 <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d81aa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
