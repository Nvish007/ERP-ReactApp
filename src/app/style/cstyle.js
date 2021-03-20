import { responsiveWidth, responsiveHeight, responsiveFontSize } from "react-native-responsive-dimensions";

const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  container: {
    backgroundColor: "#fff",
    flex: 1
  },
  largerText: { fontSize: responsiveFontSize(5.5), fontFamily: 'DMSans-Regular', },
  enlarge: { fontSize: responsiveFontSize(8), fontFamily: 'DMSans-Regular', },
  largeText: {
    fontSize: responsiveFontSize(4.2),
    fontFamily: 'DMSans-Regular',
  },
  H1Text: {
    fontSize: responsiveFontSize(3),
  },
  regularFont: {
    fontFamily: 'DMSans-Regular',
  },
  mediumFont: {
    fontFamily: 'DMSans-Medium',
  },
  boldFont: {
    fontFamily: 'DMSans-Bold'
  },
  boldFontVery: {
    fontFamily: 'DMSans-BoldCondensed'
  },
  italicFont: {
    fontFamily: 'DMSans-Italic'
  },
  H2Text: {
    fontSize: responsiveFontSize(2.8),
  },
  H3Text: {
    fontSize: responsiveFontSize(2.6),
  },
  H4Text: {
    fontSize: responsiveFontSize(2.4),
  },
  H5Text: {
    fontSize: responsiveFontSize(2.2),
  },
  H6Text: {
    fontSize: responsiveFontSize(2),
  },
  H7Text: {
    fontSize: responsiveFontSize(1.8),
  },
  H8Text: {
    fontSize: responsiveFontSize(1.6)
  },
  smallText: {
    fontSize: responsiveFontSize(1.4),
  },
  smalltxt: {
    fontSize: responsiveFontSize(1.1)
  },
  leftAlign: {
    textAlign: 'left'
  },
  rightAlign: {
    textAlign: 'right'
  },
  centerAlign: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: "center",
  },
  underlineText: {
    textDecorationLine: 'underline'
  },
  colorText: {
    color: "#FFF",
  },
  greyColorText: {
    color: "#9da4b2",
  },
  blackColorText: {
    color: "#444444",
  },
  blueColorText: {
    color: '#0055A4'
  },
  spinnerTextStyle: {
    color: '#FFF'
  },
  validationErrorMessage: {
    color: 'red'
  },
  margin: {
    margin: 10
  },
  marginVertical: responsiveHeight(10),
  smallPadder: {
    paddingHorizontal: responsiveWidth(2.5)
  },
  padder: {
    paddingHorizontal: responsiveWidth(5)
  },
  extraPadder: {
    paddingHorizontal: responsiveWidth(10)
  },
  extraPadding: {
    paddingHorizontal: responsiveWidth(10),
    paddingVertical: responsiveHeight(5)
  },
  padding: {
    paddingTop: responsiveHeight(4)
  },
  connectionerror: {
    position: 'absolute',
    top: responsiveHeight(65)

  },
  darkColorText: {
    color: "#111111"
  },
  grayColorText1: {
    color: '#666'
  }
};

