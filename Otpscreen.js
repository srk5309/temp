import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import otp1 from '../assets/otp1.png' 
import back1 from '../assets/back1.png'
// import OTPInputView from '@twotalltotems/react-native-otp-input'

const Otpscreen = ({navigation})=> {
    return (
        <View style={styles.maincontainer}>
            <View style={styles.backimgcontainer}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image style={styles.backimage} source={back1}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.imagecontainer}>
                <Image source={otp1}></Image>
            </View>
            <View style={styles.txtcontainer}>
                <Text style={styles.txt}>Enter OTP</Text>
                <Text style={styles.txt}>Sent on your mobile number</Text>
            </View>
            
            <View style={styles.infocontainer}>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                    <Text style={styles.btntxt}>VALIDATE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Otpscreen


const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
        backgroundColor:'#23287D',
    },
    imagecontainer:{
        flex:0.60,
        backgroundColor:'#23287D',
        justifyContent:'center',
        alignItems:'center'
    },
    infocontainer:{
        flex:0.40,
        backgroundColor:'#23287D',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        margin:20
    },
    btntxt:{
        fontFamily:'Roboto-Regular',
        color:'white',
        backgroundColor:'#F19922',
        fontSize:16,
        borderColor:'#F19922',
        padding:10,
        paddingHorizontal:20,
        borderRadius:20
    },


    borderStyleBase: {
        width: 30,
        height: 45
      },
    
      borderStyleHighLighted: {
        borderColor: "#03DAC6",
      },
    
      underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
      },
    
      underlineStyleHighLighted: {
        borderColor: "#03DAC6",
      },
      txtcontainer:{
        justifyContent:'center',
        alignItems:'center'
      },
      txt:{
          color:'white'
      },
      backimgcontainer:{

    },
    backimage:{
        margin:15
    }
})























