import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Card from './components/card';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Header/> */}
      <Card/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: 'center',

  },
});
