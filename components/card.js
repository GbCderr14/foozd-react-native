import Header from "./Header";
import firestore from '@react-native-firebase/firestore';
import { useEffect, useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { View, Text, StyleSheet,ScrollView, Button,TextInput ,Modal,Image,Pressable} from "react-native";
import { firebase } from "../config";
import React from "react";
function Card() {
     const todoref=firebase.firestore().collection('Users')
    const [date, setDate] = useState('');
    const[datecontent,setDateContent]=useState('');
    const [firstname,setFirstName]=useState('');
    const [lastname,setLastName]=useState('');
    const [company,setCompany]=useState('');
    const [occupation,setOccupation]=useState('');
    const [age,setAge]=useState('');
    const [formIsValid,setFormIsValid]=useState(false);
    const [modalIsVisible,setModalIsVisible]=useState(false);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [content,setContent]=useState("");
    const cancelGoalHandler=()=>{
         setModalIsVisible(false);
    }
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      setDate(date);
      console.log((date));
        setDateContent(date.toDateString());
      hideDatePicker();
    };
    function submitHandler(){
        // console.log()
        setModalIsVisible(true);
        var dob = new Date(date);
        var month_diff = Date.now() - dob.getTime();
        var age_dt = new Date(month_diff); 
        var year = age_dt.getUTCFullYear();
        var age = Math.abs(year - 1970);
        setAge(age);
        let string=firstname+ " "+lastname +" is "+age+" years old and works as a "+occupation+" at "+company;
        console.log(string);
        setContent(string);
        todoref.add({
            firstname:firstname,
            lastname:lastname,
            company:company,
            occupation:occupation,
            age:age,
        })
        .then(()=>{
            console.log("Data added");
            setFirstName('');
            setLastName('');
            setCompany('');
            setOccupation('');
            setDate('');
            setDateContent('');
        })
    }
    useEffect(()=>{
    if(firstname!==''&&lastname!==''&&company!==''&&occupation!=='')
    {
        setFormIsValid(true);
    }
    else{
        setFormIsValid(false);
    }
},[firstname,lastname,company,occupation]);
  return (
      <View style={styles.card}>

      <Header />
      <Modal visible={modalIsVisible} animationType="slide" >
        <View style={styles.modal}>

        <Header />
        <Text style={styles.modalText}>{content}</Text>
        <View style={styles.cont}>
      <Button title="Okk !!" onPress={cancelGoalHandler} color="#0B0CB0"/></View>
        </View>
    </Modal>
      <View style={styles.control}>
        <Text style={styles.label}>FirstName</Text>
        <TextInput style={styles.field} placeholder="Enter your firstname" onChangeText={(text)=>{setFirstName(text)}} value={firstname}/>
        {/* <Input placeholder="Enter your firstname" /> */}
      </View>
      <View style={styles.control}>
        <Text style={styles.label}>LastName</Text>
        <TextInput style={styles.field}  placeholder="Enter your lastname" onChangeText={(text)=>setLastName(text)} value={lastname}/>
      </View>
      <View style={styles.control}>
        <Text style={styles.label}>Date of Birth</Text>
        {/* <Date style={styles.field}/> */}
       <View  >
    <View style={styles.btn}>
    <TextInput style={styles.fieldd} value={datecontent} placeholder="(DAY YYYY-MM-DD)" onChangeText={(text)=>setDateContent(text)}/>
    <Pressable onPress={showDatePicker}><Image style={styles.img} source={require('../assets/calendar.png')} /></Pressable>
    </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
      </View>
      <View style={styles.control}>
        <Text style={styles.label}>Company</Text>
        <TextInput style={styles.field} placeholder="Company" onChangeText={(text)=>setCompany(text)} value={company}/>
      </View>
      <View style={styles.control}>
        <Text style={styles.label}>Occupation</Text>
        <TextInput style={styles.field} placeholder="Occupation" onChangeText={(text)=>setOccupation(text)} value={occupation}/>
      </View>
        <View style={styles.cont}>
      <Button title="Submit" color={formIsValid?"#0B0CB0":"red"} disabled={!formIsValid} onPress={submitHandler} ></Button>
        </View>
    </View>
  );
}
export default Card;

const styles = StyleSheet.create({
  card: {
    position:"absolute",
    top:60,
    flexDirection: "column",
    justifyContent:"flex-start",
    width: "90%",
    height: 720,
    borderRadius: 10,
    backgroundColor: "#F9F7E7",
    alignItems: "center",
    paddingTop: 30,
    marginTop:0
  },
  control: {
    // backgroundColor:"white",
    width: "100%",
    height: 60,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 10,
    display:"flex",
    flexDirection:"column",
    // justifyContent:"center",
    alignItems:"flex-start",
  },
    label: {
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        marginBottom:10,
        marginLeft:18,
        // fontFamily:"sans-serif-dark"
    },
    field:{
        width:'89%',
        height:50,
        borderRadius:5,
        backgroundColor:'white',
        fontSize:20,
        color:'black',
        marginLeft:10,
        borderColor:'black',
        borderWidth:0.5,
        paddingLeft:10,
        textAlign:"center"
    },
    fieldd:{
        width:'89%',
        height:40,
        borderRadius:5,
        backgroundColor:'white',
        fontSize:18,
        color:'black',
        // marginLeft:1,
        borderColor:'black',
        borderWidth:0.5,
        // paddingLeft:30,
        textAlign:"center",
        // paddingTop:5,
        // fontWeight:'100'
        fontWeight:'light'
    },
    cont:{
        width:'50%',
        marginTop:20,
        marginBottom:60,
        height:50,
        borderRadius:10,
        fontWeight:'bold',
    },
    btn:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        borderRadius:10,
        backgroundColor:'#C0C0C0',
        marginTop:0,
        marginBottom:5,
        width:320,
        // paddingLeft:8,
        borderColor:"black",
        height:30,
        backgroundColor:'white',
        marginLeft:10
    },
    img:{
        width:30,
        height:30,
    },
    modal:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        width:340,
        height:300,
        backgroundColor:"white",
        borderRadius:10,
        marginTop:200,
        marginLeft:26,
        borderColor:"black",
        backgroundColor:"#F9F7E7",
        height:300,
        paddingBottom:20,
        paddingTop:20
    },
    modalText:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        marginBottom:50,
        fontFamily:"sans-serif-dark",
        textAlign:"left"
    }
});
