import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Styling from './styles'
import HeaderComponent from './components/headerComponent';
import BannerComponent from './components/bannerComponent';
import NutritionCard from './components/nutritionCard';
import BottomComponent from './components/bottomComponent'
import FruitsImage from '../../assets/images/fruitsImage.png'
import { heightPercentageToDP } from 'react-native-responsive-screen';
const HomeScreen = (props) => {

    return <ScrollView style={Styling.mainContainer}>
        <HeaderComponent />
        <BannerComponent
            backGroundColor="#FCB534"
            bottomColor="#B28F36"
            bannerTitleColor="#AD5E49"
            bannerImage={FruitsImage}
            isTextOnLeft={true} />
        <BannerComponent
            backGroundColor="transparent"
            bottomColor="#4F9337"
            bannerTitleColor="#6EBF4D"
            bannerImage={FruitsImage}
            isTextOnLeft={false} />
        <BannerComponent
            backGroundColor="#71BC51"
            bottomColor="#96D7C9"
            bannerTitleColor="#FDEE68"
            bannerImage={FruitsImage}
            isTextOnLeft={true} />
        <View style={Styling.homeNutriConatiner}>
            <NutritionCard />
        </View>
        <BottomComponent />
    </ScrollView>
}

export default HomeScreen