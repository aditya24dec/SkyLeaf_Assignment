import React from 'react';
import { View, Text } from 'react-native'
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Styling from '../styles'
const BottomComponent = (props) => {
    return <View style={Styling.bottomContainer}>
        <View style={[Styling.delTextConatiner, Styling.borderBottom]}>
            <View style={Styling.leftDotConatiner}>
                <View style={Styling.leftDotStyle}></View>
            </View>
            <View style={Styling.delTextFlex}>
                <Text style={Styling.delTextStyle}>Delivering with love and care for you to relish</Text>
            </View>
        </View>
        <View style={[Styling.bottomTextContainer,Styling.borderBottom]}>
            <View style={Styling.contentTextContainer}>
                <Text style={Styling.bottomTextStyle}>About Demo Group</Text>
            </View>
            <View style={Styling.contentTextContainer}>
                <Text style={[Styling.bottomTextStyle,{color:'#999'}]}>Leading the Crops Divsion for Demo Group is india's best branded fruit company and a market leader in controlled cultivation and marketing on high-quality fruits for domestic and international customers in socially responsible manner.</Text>
            </View>
            <View style={Styling.contentTextContainer}>
                <Text style={[Styling.bottomTextStyle,{color:'#999'}]}>We are happy to server fresh and delicious fruits</Text>
            </View>
        </View>

    </View>
}

export default BottomComponent