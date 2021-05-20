import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform
} from 'react-native';


const App = () => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Hello</Text>
      { Platform.OS === "web" ?
        <div>
          <p>This is a div helllo it worked</p>
        </div>
        : null}
    </View>
  );
};

const styles = StyleSheet.create({

  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: Platform.OS === "web" ? "red" : "yellow"
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;