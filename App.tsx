import { format } from "date-fns";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { DatePicker } from "./src/components";

const App = () => {
  const [date, setDate] = useState<string>(format(new Date(), "dd-MM-yyyy"));
  const [show, setShow] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Select Date</Text>
      <TouchableOpacity activeOpacity={1} onPress={() => setShow(true)}>
        <Text style={styles.dateButton}>
          {format(new Date(), "dd-MM-yyyy")}
        </Text>
      </TouchableOpacity>
      <DatePicker visible={show} onCancel={() => setShow(false)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: "center",
  },
  text: { marginBottom: 10 },
  dateButton: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderColor: "gray",
    borderWidth: 1,
  },
});

export default App;
