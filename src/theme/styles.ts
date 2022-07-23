import { StyleSheet } from 'react-native';

const primaryColor = '#b180f0';
const secondaryColor = '#ccc';
const defaultColor = '#ededed';


const appStyles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,  
    flex: 1,
  },
});

const globalStyles = StyleSheet.create({
  pressedItem: {
    opacity: 0.5,
  },
  rippleColor: {
    color: '#210644',
  },
  buttonDefault: {
    backgroundColor: defaultColor,
    color: 'black',
  },
  buttonPrimary: {
    backgroundColor: primaryColor,
    color: defaultColor,
  },
  buttonSecondary: {
    backgroundColor: secondaryColor,
    color: 'white',
  }
});

export {
  appStyles as AppStyles,
  globalStyles as GlobalStyles 
};