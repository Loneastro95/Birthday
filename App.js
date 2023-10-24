import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={styles.text}> 
          JENNY’S<br/><Text style={styles.innerText}>BIRTHDAY</Text> <br/>  PARTY
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    backgroundColor: ' linear-gradient(180deg, #E19BFD 55.73%, rgba(6, 216, 245, 0.80) 100%)',
    width: '95%',
    height: '95%',
    textAlign: 'center'
  },
  text: {
    color: '#2668FF',
   fontFamily: 'Inter',
   fontSize: 32,
   fontStyle: normal,
   fontWeight: 618,
   lineHeight: normal,
  },
  innerText: {
    color: 'linear-gradient(80deg, #0084FD 11.63%, rgba(129, 59, 251, 0.80) 83%)',
    fontFamily: 'Inter',
    fontSize: 36,
    fontStyle: 'normal',
  fonWeight: 700,
  lineHeight: 'normal',
  }
});
