import "./styles.css";
import { StyleSheet, Text } from "react-native";
import HMSTimer from "./components/HMSTimer";
import DHMSTimer from "./components/DHMSTimer";

export default function App() {
  /*
   * Add 5 Days in now time. Just using this for demo purpose.
   * Use the string startDate instead.
   */
  // const startDate = `${new Date(
  //   new Date().getTime() + 5 * 24 * 60 * 60 * 1000
  // )}`;

  const startDate = "2022-12-08T08:46:00.493Z"; // Use https://time.lol/ to see this string formatted

  return (
    <div className="App">
      <small style={styles.infoText}>
        <b>startDate:</b> {startDate}
      </small>
      <br />
      <br />
      {/* Hours Minutes Seconds */}
      <HMSTimer
        startDate={startDate}
        onTimerFinished={() => {
          alert("HMSTImer Finished");
        }}
      />
      <Text style={styles.infoText}>Hours: Minutes : Seconds</Text>
      <hr />
      {/* Days Hours Minutes Seconds */}
      <DHMSTimer
        startDate={startDate}
        onTimerFinished={() => {
          alert("DHMSTImer Finished");
        }}
      />
      <Text style={styles.infoText}>Days : Hours: Minutes : Seconds</Text>
    </div>
  );
}

const styles = StyleSheet.create({
  infoText: {
    marginLeft: 4
  }
});
