import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { DatePicker } from "./src/components";

const App = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dateButtonContainer}>
        <Button title="Open Date Picker" onPress={() => setShow(true)} />
      </View>
      <DatePicker
        date={new Date()}
        visible={show}
        onCancel={setShow}
        onConfirm={setDate}
      />
      <View style={{ marginTop: 20 }}>
        <Text style={styles.text}>Selected Date</Text>
        <Text style={styles.text}>{date.toString()}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#CCCCCC",
  },
  text: { color: "#000000", textAlign: "center" },
  dateButtonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
