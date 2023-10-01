import { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";

export default function f() {
    return (

        <View style={rec25.container2}>
            <Image
                source={require('./Image/Ellipse 8.png')}
                style={rec25.img}
            />
            <Text style={rec25.text1}>GROW{'\n'}YOUR BUSINESS</Text>
            <Text style={rec25.text2}>We will help you to grow your business using online server</Text>
            <View style={gro12.container_gro12}>
                <TouchableOpacity style={gro12.btnLogin}>
                    <Text style={gro12.textLogin}>LOGIN</Text>
                </TouchableOpacity>
            </View>

            <View style={gro13.container_gro13}>
                <TouchableOpacity style={gro13.btnSignUp}>
                    <Text style={gro13.textSignUp}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
var gro12 = StyleSheet.create({
    container_gro12: {
        width: '119px',
        height: '48px',
        top: '498px',
        left: '29px',
        borderRadius: '10px',
    },
    btnLogin: {
        width: '119px',
        height: '48px',
        top: '498px',
        left: '29px',
        borderRadius: '10px',
        backgroundColor: '#E3C000'
    },

    textLogin: {
        width: '58px',
        height: '23px',
        top: '511px',
        left: '59px',
        fontFamily: 'Roboto',
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '23.44px',
        textAlign: 'center',
        color: '#000000',
        alignSelf: 'center'
    }
})
var gro13 = StyleSheet.create({
    container_gro13: {
        width: '119px',
        height: '48px',
        top: '498px',
        left: '204px',
        borderRadius: '10px',
    },
    btnSignUp: {
        width: '119px',
        height: '48px',
        top: '498px',
        left: '204px',
        borderRadius: '10px',
        backgroundColor: '#E3C000'
    },
    textSignUp: {
        width: '77px',
        height: '23px',
        top: '511px',
        left: '225px',
        fontFamily: 'Roboto',
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '23.44px',
        textAlign: 'center',
        color: '#000000',
        alignSelf: 'center'

    },
})
// var styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         width: '360px',
//         height: '640px',
//         top: '-518px',
//         left: '-904px',
//         backgroundColor: '#FFFFFF'
//     }
// })
var rec25 = StyleSheet.create({
    container2: {
        width: '360px',
        height: '640px',
        
        backgroundColor: '#00CCF9'
    },
    img: {
        width: '140px',
        height: '140px',
        top: '105px',
        left: '110px',
        border: '15px',
    },
    text1: {
        width: '189px',
        height: '58px',
        top: '297px',
        left: '86px',
        fontFamily: 'Roboto',
        fontSize: '25px',
        fontWeight: '700',
        lineHeight: '29.3px',
        textAlign: 'center'
    },
    text2: {
        width: '302px',
        height: '36px',
        top: '417px',
        left: '29px',
        fontFamilyamily: 'Roboto',
        fontSize: '15px',
        fontWeight: '700',
        lineHeight: '17.58px',
        textAlign: 'center'

    }
    /*img: {
        width: '140px',
        height: '140px',
        top: '105px',
        left: '110px',
        border: '15px',
    },
    text1: {
        width: '189px',
        height: '58px',
        top: '297px',
        left: '86px',
        fontFamily: 'Roboto',
        fontSize: '25px',
        fontWeight: '700',
        lineHeight: '29.3px',
        textAlign: 'center'
    },
    text2: {
        width: '302px',
        height: '36px',
        top: '417px',
        left: '29px',
        fontFamilyamily: 'Roboto',
        fontSize: '15px',
        fontWeight: '700',
        lineHeight: '17.58px',
        textAlign: 'center'

    }
    btnSignUp: {
        width: '119px',
        height: '48px',
        top: '498px',
        left: '204px',
        borderRadius: '10px',
        backgroundColor: '#E3C000'
      },
      textSignUp:{
        width: '77px',
        height: '23px',
        top: '511px',
        left:'225px',
        fontFamily: 'Roboto',
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '23.44px',
        textAlign: 'center',
        color: '#000000',
        alignSelf: 'center'
  
      },
      btnLogin: {
        width: '119px',
        height: '48px',
        top: '498px',
        left: '29px',
        borderRadius: '10px',
        backgroundColor: '#E3C000'
      },
  
      textLogin:{
        width: '58px',
        height: '23px',
        top: '511px',
        left:'59px',
        fontFamily: 'Roboto',
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '23.44px',
        textAlign: 'center',
        color: '#000000',
        alignSelf: 'center'
      },
    img: {
        width: '140px',
        height: '140px',
        top: '105px',
        left: '120px',
        border: '15px',
    },

    text1: {
        width: '189px',
        height: '58px',
        top: '150px',
        left: '95px',
        fontFamily: 'Roboto',
        fontSize: '23px',
        fontWeight: '700',
        lineHeight: '29.3px',
        textAlign: 'center'
    },

    text2: {
        width: '302px',
        height: '36px',
        top: '200px',
        left: '50px',
        fontFamilyamily: 'Roboto',
        fontSize: '15px',
        fontWeight: '700',
        lineHeight: '18px',
        textAlign: 'center'

    },

    text3: {
        width: '302px',
        height: '53px',
        top: '245px',
        left: '47px',
        fontFamilyamily: 'Roboto',
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '21px',
        textAlign: 'center'
    },

    btnLogin: {
        width: '119px',
        height: '48px',
        top: '250px',
        left: '50px',
        borderRadius: '10px',
        backgroundColor: '#E3C000'
    },
    textLogin: {
        width: '90px',
        height: '23px',
        top: '15px',
        fontFamily: 'Roboto',
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '23px',
        textAlign: 'center',
        color: 'black',
        alignSelf: 'center'

    },

    btnSignUp: {
        width: '119px',
        height: '48px',
        top: '200px',
        left: '220px',
        borderRadius: '10px',
        backgroundColor: '#E3C000'
    },

    textSignUp: {
        width: '90px',
        height: '23px',
        top: '15px',
        fontFamily: 'Roboto',
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '23px',
        textAlign: 'center',
        color: 'black',
        alignSelf: 'center'

    }*/
});