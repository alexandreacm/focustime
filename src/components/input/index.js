import { React } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../../utils/colors';

function Input() {
  return (
    <View style={styles.inputContainer}>
      <Entypo name="home" size={24} color="#000" style={{ marginLeft: 10 }} />
      <TextInput style={styles.textInput} placeholder="Name" />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  textInput: {
    width: '85%',
    height: 50,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginTop: 10,
    borderRadius: 10,
  },
});
