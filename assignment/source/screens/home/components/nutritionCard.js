import React from 'react';
import { View, Text } from 'react-native';
import Styling from '../styles';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const NutritionCard = (props) => {
      return (
            <View style={Styling.nutritionCardStyle}>
                  <View>
                        <Text style={Styling.cardTitleTextStyle}>Nutrition Fact</Text>
                  </View>
                  <TextRow leftText="Serving size" rightText="100g" isBottomBorder={true} />
                  <TextRow leftText="Amount per serving" />
                  <TextRow
                        leftText="Calories"
                        rightText="89"
                        isBottomBorder={true}
                        leftFontSize={hp('4%')}
                        rightFontSize={hp('3%')}
                  />
                  <TextRow rightText="% Daily value *" isBottomBorderLight={true} />
                  <TextRow leftText="Total fat " weight="0.02g" rightText="0%" isBottomBorderLight={true} />
                  <SubTextRow leftText="Saturated fat 0.3g" rightText="0%" isBottomBorderLight={true} isSubText={true} />
                  <TextRow leftText="Sodium " weight="1mg" rightText="0%" isBottomBorderLight={true} />
                  <TextRow leftText="Total carbohydrate " weight="23g" rightText="8%" isBottomBorderLight={true} />
                  <SubTextRow leftText="Dietary fiber 2.6g" rightText="9%" isBottomBorderLight={true} isSubText={true} />
                  <SubTextRow leftText="Sagar 12g" isBottomBorderLight={true} isSubText={true} />
                  <TextRow leftText="Protein " weight="1.1g" rightText="2%" isBottomBorder={true} />
                  <SubTextRow leftText="Vitamin D 0.00mcg" rightText="0%" isBottomBorderLight={true} />
                  <SubTextRow leftText="Calcium 5.00mg" rightText="0%" isBottomBorderLight={true} />
                  <SubTextRow leftText="Iron 0.26mg" rightText="0%" isBottomBorderLight={true} />
                  <SubTextRow leftText="Potassium 358mg" rightText="0%" isBottomBorder={true} />
                  <SubTextRow leftText="The % Daily value (DV) tells you how much nutrion you are consuming" />
            </View>
      );
};

const TextRow = (props) => {
      return (
            <View style={[
                  Styling.rowContainer,
                  props.isBottomBorder ? Styling.borderBottom : null,
                  props.isBottomBorderLight ? Styling.borderBottomLight : null,
            ]}>
                  <Text style={[
                        Styling.rowTextStyle,
                        props.leftFontSize ? { fontSize: props.leftFontSize } : null,
                  ]}>
                        {props.leftText}
                        {props.weight ? <Text style={[Styling.rowTextStyle, { color: '#999' }]}>{props.weight}</Text> : null}
                  </Text>
                  <Text style={[
                        Styling.rowTextStyle,
                        props.rightFontSize ? { fontSize: props.rightFontSize } : null,
                  ]}>
                        {props.rightText}
                  </Text>
            </View>
      );
};

const SubTextRow = (props) => {
      return (
            <View style={[
                  Styling.rowContainer,
                  props.isBottomBorder ? Styling.borderBottom : null,
                  props.isBottomBorderLight ? Styling.borderBottomLight : null,

            ]}>
                  <Text style={[
                        Styling.rowTextStyle,
                        { color: '#999' },
                        props.isSubText ? { marginLeft: hp('1%') } : null,
                        props.leftFontSize ? { fontSize: props.leftFontSize } : null,
                  ]}>
                        {props.leftText}
                  </Text>
                  <Text style={[
                        Styling.rowTextStyle,
                        { color: '#999' },
                        props.rightFontSize ? { fontSize: props.rightFontSize } : null,
                  ]}>
                        {props.rightText}
                  </Text>
            </View>
      );
};

export default NutritionCard;
