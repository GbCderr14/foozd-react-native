import {View,Text,StyleSheet} from 'react-native';

function Header() {
  return (
    <View style={styles.Header}>
      <Text style={styles.text}>Welcome to Foozd !!!!!</Text>
    </View>
  );
}
export default Header;

const styles = StyleSheet.create({
        Header:{
            width:'90%',
            height:115,
            borderRadius:10,
            backgroundColor:'#0B0CB0',
            alignItems:'center',
            justifyContent:'center',
            marginBottom:40,
            marginTop:10
        },
        text:{
            textAlign:"center",
            color:'white',
            fontSize:30,
            fontWeight:'bold',
            padding:20,
            borderRadius:10,
            alignItems:'center',
        }
    });

