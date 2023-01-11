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
import Feather from "@expo/vector-icons/Feather";

const window = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

const Myspace = () => {
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
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              Announcements
            </Text>
            <Text
              style={{
                color: "green",
                textDecorationLine: "underline",
                fontSize: 16,
              }}
            >
              {" "}
              View All{" "}
            </Text>
          </View>
          {/* row  */}
          <View style={styles.major}>
            <Image
              style={{
                height: window.width * 0.15,
                width: window.width * 0.15,
              }}
              source={require("../assets/avt1.png")}
            />

            <Text style={{ fontSize: 18 }}> Rashmi </Text>
            <Text style={{ fontSize: 18, color: "#898c8e" }}> Trainee </Text>
            <View
              style={{
                borderRadius: 300,
                backgroundColor: "green",
                height: window.width * 0.03,
                width: window.width * 0.03,
              }}
            />
            <Text style={{ fontSize: 18, color: "#898c8e" }}> Present </Text>
          </View>
          {/* row  */}
          <View style={styles.major}>
            <Image
              style={{
                height: window.width * 0.15,
                width: window.width * 0.15,
              }}
              source={require("../assets/avt1.png")}
            />

            <Text style={{ fontSize: 18 }}> Rashmi </Text>
            <Text style={{ fontSize: 18, color: "#898c8e" }}> Trainee </Text>
            <View
              style={{
                borderRadius: 300,
                backgroundColor: "green",
                height: window.width * 0.03,
                width: window.width * 0.03,
              }}
            />
            <Text style={{ fontSize: 18, color: "#898c8e" }}> Present </Text>
          </View>
          {/* row  */}
          <View style={styles.major}>
            <Image
              style={{
                height: window.width * 0.15,
                width: window.width * 0.15,
              }}
              source={require("../assets/avt1.png")}
            />

            <Text style={{ fontSize: 18 }}> Rashmi </Text>
            <Text style={{ fontSize: 18, color: "#898c8e" }}> Trainee </Text>
            <View
              style={{
                borderRadius: 300,
                backgroundColor: "green",
                height: window.width * 0.03,
                width: window.width * 0.03,
              }}
            />
            <Text style={{ fontSize: 18, color: "#898c8e" }}> Present </Text>
          </View>
          {/* row  */}
          <View style={styles.major}>
            <Image
              style={{
                height: window.width * 0.15,
                width: window.width * 0.15,
              }}
              source={require("../assets/avt1.png")}
            />

            <Text style={{ fontSize: 18 }}> Rashmi </Text>
            <Text style={{ fontSize: 18, color: "#898c8e" }}> Trainee </Text>
            <View
              style={{
                borderRadius: 300,
                backgroundColor: "green",
                height: window.width * 0.03,
                width: window.width * 0.03,
              }}
            />
            <Text style={{ fontSize: 18, color: "#898c8e" }}> Present </Text>
          </View>
          {/* row  */}
          <View style={styles.major}>
            <Image
              style={{
                height: window.width * 0.15,
                width: window.width * 0.15,
              }}
              source={require("../assets/avt1.png")}
            />

            <Text style={{ fontSize: 18 }}> Rashmi </Text>
            <Text style={{ fontSize: 18, color: "#898c8e" }}> Trainee </Text>
            <View
              style={{
                borderRadius: 300,
                backgroundColor: "green",
                height: window.width * 0.03,
                width: window.width * 0.03,
              }}
            />
            <Text style={{ fontSize: 18, color: "#898c8e" }}> Present </Text>
          </View>
          {/* row  */}
          <View style={styles.major}>
            <Image
              style={{
                height: window.width * 0.15,
                width: window.width * 0.15,
              }}
              source={require("../assets/avt1.png")}
            />

            <Text style={{ fontSize: 18 }}> Rashmi </Text>
            <Text style={{ fontSize: 18, color: "#898c8e" }}> Trainee </Text>
            <View
              style={{
                borderRadius: 300,
                backgroundColor: "green",
                height: window.width * 0.03,
                width: window.width * 0.03,
              }}
            />
            <Text style={{ fontSize: 18, color: "#898c8e" }}> Absent </Text>
          </View>
          {/* row  */}
          <View style={styles.major}>
            <Image
              style={{
                height: window.width * 0.15,
                width: window.width * 0.15,
              }}
              source={require("../assets/avt1.png")}
            />

            <Text style={{ fontSize: 18 }}> Rashmi </Text>
            <Text style={{ fontSize: 18, color: "#898c8e" }}> Trainee </Text>
            <View
              style={{
                borderRadius: 300,
                backgroundColor: "green",
                height: window.width * 0.03,
                width: window.width * 0.03,
              }}
            />
            <Text style={{ fontSize: 18, color: "#898c8e" }}> Present </Text>
          </View>
        </ScrollView>
      </View>

      {/* links  */}
      <View style={styles.linkd}>
        <Text style={{fontSize:16,fontWeight:"bold"}}>Quick Links </Text>
        <View style={{ flexDirection: "row" }}>
            {/* original  */}
          <View
            style={{
              height: window.width * 0.15,
              width: window.width * 0.25,
              backgroundColor: "#dff7fa",
              borderRadius: 10,
              marginHorizontal:window.width * 0.02,
              padding: window.width * 0.02,
            }}
          >
            <Text style={{ width: window.width * 0.15 }}>Holiday Calendar</Text>
            <View
              style={{
                position: "absolute",
                marginLeft: window.width * 0.16,
              }}
            >
              <Feather name="arrow-up-right" color="black" size={25} />
            </View>
          </View>
          {/* dublicatie  */}
           <View
            style={{
              height: window.width * 0.15,
              width: window.width * 0.25,
              backgroundColor: "#dff7fa",
              borderRadius: 10,
              marginHorizontal:window.width * 0.02,
              padding: window.width * 0.02,
            }}
          >
            <Text style={{ width: window.width * 0.15 }}>Leave Policy</Text>
            <View
              style={{
                position: "absolute",
                marginLeft: window.width * 0.16,
              }}
            >
              <Feather name="arrow-up-right" color="black" size={25} />
            </View>
          </View>
          {/* dublicatie  */}
           <View
            style={{
              height: window.width * 0.15,
              width: window.width * 0.25,
              backgroundColor: "#dff7fa",
              borderRadius: 10,
              marginHorizontal:window.width * 0.005,
              padding: window.width * 0.02,
            }}
          >
            <Text style={{ width: window.width * 0.15 }}>Payroll Manual</Text>
            <View
              style={{
                position: "absolute",
                marginLeft: window.width * 0.16,
              }}
            >
              <Feather name="arrow-up-right" color="black" size={25} />
            </View>
          </View>


        </View>
      </View>
    </SafeAreaView>
  );
};

export default Myspace;

const styles = StyleSheet.create({
  linkd: {
    flex: 0.2,
    flexDirection: "column",
    paddingHorizontal: window.width * 0.02,
    justifyContent: "space-evenly",
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "#898c8e",
    margin: window.width * 0.05,
    // backgroundColor: "red",
  },
  major: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: window.width * 0.05,
  },
  head: {
    flex: 0.7,
    flexDirection: "column",
    borderWidth: 2,
    borderRadius: 30,
    margin: window.width * 0.05,
    borderColor: "#898c8e",
    paddingHorizontal: window.width * 0.025,
    paddingTop: window.width * 0.05,
  },
  container: {
    backgroundColor: "#fff",
    height: window.height,
  },
});
