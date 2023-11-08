import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
// import Constants from 'expo-constants';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';

const isAndroid = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([]);

  // console.log('Rendered APP');

  const onTimerEnd = (subject) => {
    setHistory([...history, subject]);
  };

  const onClearSubject = () => {
    setCurrentSubject(null);
  }

  return (
    <>
      <StatusBar
        backgroundColor={ colors.blueDark}
        barStyle={'light-content'}
      />

      <SafeAreaView style={styles.container}>
        {!currentSubject ? (
          <>
            <Focus addSubject={setCurrentSubject} />
            <FocusHistory history={history} />
          </>
        ) : (
          <Timer
            focusSubject={currentSubject}
            onTimerEnd={onTimerEnd}
            clearSubject={onClearSubject}
          />
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isAndroid,
    backgroundColor: colors.blueDark,
  },
});
