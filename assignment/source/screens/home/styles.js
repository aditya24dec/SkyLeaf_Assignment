import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Styles = StyleSheet.create({
  //Header styles
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: hp('2%'),
  },
  headerLeftFlex: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRightFlex: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  leftCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('4%'),
    width: hp('4%'),
    borderRadius: hp('4%') / 2,
    backgroundColor: '#515151',
  },
  headerTextStyle: {
    fontFamily: 'OpenSans-Regular',
    fontWeight: 'bold',
    fontSize: hp('2%'),
    color: '#515151',
    marginLeft: hp('2%'),
  },
  flexFullCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  //Banners Styles
  bannerContainer: {
    height: hp('22%'),
    flexDirection: 'row',
    borderBottomWidth: hp('.5%'),
    // backgroundColor: ''
  },
  bannerTitleTextStyle: {
    fontSize: hp('3%'),
    color: '#000',
  },
  bannerTextStyle: {
    fontSize: hp('1.5%'),
    color: '#000',
    textAlign: 'center',
  },
  flexHalfFullCenter: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  //NutrionCard Style
  homeNutriConatiner: {
    paddingHorizontal: hp('2%'),
    marginTop: -hp('2%'),
  },
  nutritionCardStyle: {
    backgroundColor: '#fff',
    borderRadius: hp('3%'),
    paddingVertical: hp('3%'),
    paddingHorizontal: hp('2%'),
    shadowColor: '#122E3C',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  cardTitleTextStyle: {
    fontSize: hp('2%'),
    color: '#122E3C',
    fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp('0.5%'),
  },
  rowTextStyle: {
    fontFamily: 'OpenSans-Regular',
    fontSize: hp('1.5%'),
    color: '#000',
  },
  borderBottom: {
    borderBottomColor: '#000',
    borderBottomWidth: hp('0.5%'),
  },
  borderBottomLight: {
    borderBottomColor: '#EEF0F1',
    borderBottomWidth: hp('0.2%'),
  },

  //Bottom container
  bottomContainer: {
    paddingHorizontal: hp('2%'),
    marginBottom: hp('3%'),
  },
  delTextConatiner: {
    flex: 1,
    paddingVertical: hp('3%'),
    flexDirection: 'row',
  },
  leftDotStyle: {
    height: hp('1%'),
    width: hp('1%'),
    borderRadius: hp('1%') / 2,
    backgroundColor: '#3086A1',
  },
  leftDotConatiner: {
    flex: 0.05,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  delTextFlex: {
    flex: 0.95,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  delTextStyle: {
    fontFamily: 'OpenSans-Regular',
    fontSize: hp('2%'),
    color: '#59B099',
    fontWeight: 'bold',
  },
  contentTextContainer: {
    flex: 1,
    paddingBottom: hp('2%'),
  },
  bottomTextStyle: {
    fontFamily: 'OpenSans-Regular',
    fontSize: hp('1.5%'),
  },
  bottomTextContainer: {
    paddingTop: hp('2%'),
    // paddingBottom: hp('2%'),
    paddingBottom: hp('2%'),
  },
});

export default Styles;
