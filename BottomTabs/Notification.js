import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";

import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "react-native-elements";
import Ionicons from "@expo/vector-icons/Ionicons";

const window = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

const Notification = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                marginTop: window.width * 0.012,
                marginBottom: window.width * 0.01,
              }}
            >
              Celebrations
            </Text>
          </View>
          {/* row  */}
          <View style={styles.major}>
            <Text style={{ fontSize: 18 }}> Birthdays </Text>

            <Image style={{}} source={require("../assets/avt1.png")} />

            <Text style={{ fontSize: 18, color: "#bf812a" }}> Yash </Text>

            <Ionicons name="chevron-forward-outline" color="black" size={25} />
          </View>
          <View style={styles.major}>
            <Text style={{ fontSize: 18 }}> Birthdays </Text>

            <Image style={{}} source={require("../assets/avt1.png")} />

            <Text style={{ fontSize: 18, color: "#bf812a" }}> Yash </Text>

            <Ionicons name="chevron-forward-outline" color="black" size={25} />
          </View>
          <View style={styles.major}>
            <Text style={{ fontSize: 18 }}> Birthdays </Text>

            <Image style={{}} source={require("../assets/avt1.png")} />

            <Text style={{ fontSize: 18, color: "#bf812a" }}> Yash </Text>

            <Ionicons name="chevron-forward-outline" color="black" size={25} />
          </View>
          <View style={styles.major}>
            <Text style={{ fontSize: 18 }}> Birthdays </Text>

            <Image style={{}} source={require("../assets/avt1.png")} />

            <Text style={{ fontSize: 18, color: "#bf812a" }}> Yash </Text>

            <Ionicons name="chevron-forward-outline" color="black" size={25} />
          </View>
          <View style={styles.major}>
            <Text style={{ fontSize: 18 }}> Birthdays </Text>

            <Image style={{}} source={require("../assets/avt1.png")} />

            <Text style={{ fontSize: 18, color: "#bf812a" }}> Yash </Text>

            <Ionicons name="chevron-forward-outline" color="black" size={25} />
          </View>
          <View style={styles.major}>
            <Text style={{ fontSize: 18 }}> Birthdays </Text>

            <Image style={{}} source={require("../assets/avt1.png")} />

            <Text style={{ fontSize: 18, color: "#bf812a" }}> Yash </Text>

            <Ionicons name="chevron-forward-outline" color="black" size={25} />
          </View>
          <View style={styles.major}>
            <Text style={{ fontSize: 18 }}> Birthdays </Text>

            <Image style={{}} source={require("../assets/avt1.png")} />

            <Text style={{ fontSize: 18, color: "#bf812a" }}> Yash </Text>

            <Ionicons name="chevron-forward-outline" color="black" size={25} />
          </View>
        </ScrollView>
      </View>

      <View style={styles.head2}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                marginTop: window.width * 0,
                marginBottom: window.width * 0.01,
              }}
            >
              My Tasks
            </Text>
          </View>
{/* task  */}
          <View style={styles.fia}>
            <View style={{ width: window.width * 0.45,fontSize: 22, }}>
              <Text style={{ fontSize: 18, }}>Leave</Text>
            </View>
            <Text style={{ fontSize: 18, color: "#898c8e",width: window.width * 0.2 }}>11 </Text>
            <Text
              style={{
                color: "green",
                textDecorationLine: "underline",
                fontSize: 18,
              }}
            >
              View{" "}
            </Text>
          </View>
          <View style={styles.fia}>
            <View style={{ width: window.width * 0.45,fontSize: 22, }}>
              <Text style={{ fontSize: 18, }}>Leave</Text>
            </View>
            <Text style={{ fontSize: 18, color: "#898c8e",width: window.width * 0.2 }}>11 </Text>
            <Text
              style={{
                color: "green",
                textDecorationLine: "underline",
                fontSize: 18,
              }}
            >
              View{" "}
            </Text>
          </View>
          <View style={styles.fia}>
            <View style={{ width: window.width * 0.45,fontSize: 22, }}>
              <Text style={{ fontSize: 18, }}>Leave</Text>
            </View>
            <Text style={{ fontSize: 18, color: "#898c8e",width: window.width * 0.2 }}>11 </Text>
            <Text
              style={{
                color: "green",
                textDecorationLine: "underline",
                fontSize: 18,
              }}
            >
              View{" "}
            </Text>
          </View>
          <View style={styles.fia}>
            <View style={{ width: window.width * 0.45,fontSize: 22, }}>
              <Text style={{ fontSize: 18, }}>Leave</Text>
            </View>
            <Text style={{ fontSize: 18, color: "#898c8e",width: window.width * 0.2 }}>11 </Text>
            <Text
              style={{
                color: "green",
                textDecorationLine: "underline",
                fontSize: 18,
              }}
            >
              View{" "}
            </Text>
          </View>
          <View style={styles.fia}>
            <View style={{ width: window.width * 0.45,fontSize: 22, }}>
              <Text style={{ fontSize: 18, }}>Leave</Text>
            </View>
            <Text style={{ fontSize: 18, color: "#898c8e",width: window.width * 0.2 }}>11 </Text>
            <Text
              style={{
                color: "green",
                textDecorationLine: "underline",
                fontSize: 18,
              }}
            >
              View{" "}
            </Text>
          </View>
        </ScrollView>
      </View>

      {/* ends  */}
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  fia: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderWidth: 2,
    borderColor: "#ffdba6",
    marginTop:window.width*0.05,
    padding:window.width*0.05,
    borderRadius:15
  },
  container: {
    backgroundColor: "#fff",
    height: window.height,
  },
  major: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: window.width * 0.05,
    height: window.width * 0.18,
    backgroundColor: "#ffdba6",
    borderRadius: 20,
    marginTop: window.width * 0.05,
  },
  head: {
    flex: 0.5,
    flexDirection: "column",
    borderWidth: 2,
    borderRadius: 20,
    margin: window.width * 0.05,
    borderColor: "#898c8e",
    paddingHorizontal: window.width * 0.025,
    paddingTop: window.width * 0.05,
  },
  head2: {
    flex: 0.45,
    flexDirection: "column",
    borderWidth: 2,
    borderRadius: 20,
    margin: window.width * 0.05,
    borderColor: "#898c8e",
    paddingHorizontal: window.width * 0.025,
    paddingTop: window.width * 0.05,
  },
});
