import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,  
    flex: 1,
  },

  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#311b6b',
  },

  buttonContainer: {
    flexDirection: 'row',
  },

  button: {
    width: '30%',
    marginHorizontal: 8,
    marginTop: 16,
  },

  primaryButton: {
    color: '#b180f0'
  },

  dangerButton: {
    color: '#f31282'
  },

  goalsContainer: {
    flex: 5,
  },

  text: {
    marginTop: 5,
    marginBottom: 5,
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderRadius: 5,
    color: '#120438',
    width: '100%',
    padding: 8,
  },

  goalItem: {
    margin: 8,
    borderRadius: 3,
    backgroundColor: '#5e0acc',
  },
  
  goalItemText: {
    padding: 8,
    color: '#fff',
  },

  image: {
    width: 140,
    height: 140,
    margin: 20,
  }
});

export {
  styles as GoalStyles,
};
