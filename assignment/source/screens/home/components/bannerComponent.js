import React from 'react';
import { View, Text, Image } from 'react-native';
import Styling from '../styles';

const BannerComponent = (props) => {

    return <View style={[Styling.bannerContainer, { backgroundColor: props.backGroundColor, borderBottomColor: props.bottomColor }]}>
        <View style={Styling.flexHalfFullCenter}>
            {props.isTextOnLeft ? <BannerTextConatiner {...props} /> : <BannerImage {...props} />}
        </View>
        <View style={Styling.flexHalfFullCenter}>
            {!props.isTextOnLeft ? <BannerTextConatiner {...props} /> : <BannerImage {...props} />}
        </View>
    </View>

}

const BannerTextConatiner = (props) => {

    return <View style={[Styling.flexFullCenter]}>
        <Text style={[Styling.bannerTitleTextStyle, { color: props.bannerTitleColor }]}>Lorem Ipsum</Text>
        <Text style={Styling.bannerTextStyle}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
    </View>
}

const BannerImage = (props) => {
    return <Image source={props.bannerImage} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
}

export default BannerComponent