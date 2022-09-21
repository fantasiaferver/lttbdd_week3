import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.class1}>
      <Text style={{fontSize:60, fontWeight:'bold'}}>CODE</Text>
    </View>
    <View style={styles.class2}>
      <Text style={{fontSize:20,fontWeight:'bold'}}>VARIFICATION</Text>
    </View>
    <View style={styles.class3}>
      <Text>Enter ontime password sent on ++849092605798</Text>
    </View>
    <View style={styles.class4}>
      <TextInput style={{borderColor:'black', borderWidth:1,padding:5}}></TextInput>
      <TextInput style={{borderColor:'black', borderWidth:1,padding:5}}></TextInput>
      <TextInput style={{borderColor:'black', borderWidth:1,padding:5}}></TextInput>
      <TextInput style={{borderColor:'black', borderWidth:1,padding:5}}></TextInput>
      <TextInput style={{borderColor:'black', borderWidth:1,padding:5}}></TextInput>
      <TextInput style={{borderColor:'black', borderWidth:1,padding:5}}></TextInput>
    </View>
    <View style={styles.class5}>
      <Button title='VERIFI CODE'></Button>
    </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: '#EEF1FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  class1: {
    flex:1,
    alignItems:'center',
    justifyContent:'flex-end',
    paddingTop:100
  },
  class2: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  class3: {
    flex:1,
    alignItems:'center',
    // justifyContent:'center'
  },
  class4: {
    flex:1,
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'center'
  },
  class5: {
    flex:1,
    paddingBottom:100
    // alignItems:'center',
    // justifyContent:'center'
  },
});
