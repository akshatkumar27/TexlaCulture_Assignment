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

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      {/* search bar  */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: window.width * 1,
          marginTop: window.width * 0.03,
        }}
      >
        <View style={{ width: window.width * 0.8 }}>
          <SearchBar
            placeholder="Search"
            onChangeText={(search) => setSearch(search)}
            value={search}
            containerStyle={{
              marginBottom: 0,
              marginTop: window.width * 0.02,
              backgroundColor: "#fff",
              borderRadius: 8,
              borderTopColor: "white",
              borderBottomColor: "white",
              marginHorizontal: window.width * 0.03,
              height: window.width * 0.12,
            }}
            inputContainerStyle={{
              backgroundColor: "#fff",
              borderRadius: 8,
              height: window.width * 0.09,
            }}
          />
        </View>

        <Ionicons name="chatbubble-sharp" color="green" size={35} />
      </View>
      {/* text */}
      <View
        style={{
          marginTop: window.width * 0.1,
          marginBottom: window.width * 0.07,
          width: window.width * 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          {" "}
          Announcements{" "}
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

      {/* scroll  */}

      <View
        style={{
          height: window.width * 0.25,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: window.width * 0.05,
          marginTop: window.width * 0.06,
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          {/* row  */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              paddingHorizontal: window.width * 0.05,
              backgroundColor: "#e1c9ae",
              width: window.width * 0.9,
              borderRadius: 15,
              height: window.width * 0.2,
            }}
          >
            {/* icon  */}
            <View
              style={{
                width: window.width * 0.1,
                height: window.width * 0.1,
                backgroundColor: "#ffdf67",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 8,
              }}
            >
              <Ionicons name="time-outline" color="orange" size={25} />
            </View>

            <View
              style={{
                flexDirection: "column",
                marginLeft: window.width * 0.01,
              }}
            >
              <Text style={{ color: "black", fontSize: 16 }}>
                Employees are expected to Clock...
              </Text>
              <Text style={{ color: "#898c8e" }}>1 hour ago</Text>
            </View>
          </View>
          {/* row  */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              paddingHorizontal: window.width * 0.05,
              backgroundColor: "#e1c9ae",
              width: window.width * 0.9,
              borderRadius: 15,
              height: window.width * 0.2,
              marginHorizontal: window.width * 0.01,
            }}
          >
            {/* icon  */}
            <View
              style={{
                width: window.width * 0.1,
                height: window.width * 0.1,
                backgroundColor: "#ffdf67",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 8,
              }}
            >
              <Ionicons name="time-outline" color="orange" size={25} />
            </View>

            <View
              style={{
                flexDirection: "column",
                marginLeft: window.width * 0.01,
              }}
            >
              <Text style={{ color: "black", fontSize: 16 }}>
                Employees are expected to Clock...
              </Text>
              <Text style={{ color: "#898c8e" }}>1 hour ago</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* line  */}

      <View style={styles.line} />
      {/* welcome text   */}

      <View style={styles.head1}>
        <Text style={styles.head}>Welcome</Text>
      </View>

      {/* scroll 2  */}
      <View
        style={{
          height: window.width * 0.7,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: window.width * 0.05,
          marginTop: window.width * 0.09,
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          {/* row  */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              paddingHorizontal: window.width * 0.05,
              marginHorizontal: window.width * 0.08,
              backgroundColor: "#fff8e9",
              width: window.width * 0.5,
              borderRadius: 15,
              height: window.width * 0.7,
              borderColor:"#ffeaac", 
              borderWidth:2,

              
            }}
          >
            
<View style={styles.outer}>

<Image
                    style={{
                        height:window.width*0.3,
                        width:window.width*0.3,}}
                    source={require("../assets/avt1.png")}
                  />
                  
                  <Text style={styles.head2}>Megha</Text>
                  <Text style={styles.head3}>UX Designer</Text>
                  <Text style={styles.head3}>Joined today</Text>
</View>
          </View>
          {/* row  */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              paddingHorizontal: window.width * 0.05,
              marginHorizontal: window.width * 0.08,
              backgroundColor: "#fff8e9",
              width: window.width * 0.5,
              borderRadius: 15,
              height: window.width * 0.7,
              borderColor:"#ffeaac", 
              borderWidth:2,

              
            }}
          >
            
<View style={styles.outer}>

<Image
                    style={{
                        height:window.width*0.3,
                        width:window.width*0.3,}}
                    source={require("../assets/avt1.png")}
                  />
                  
                  <Text style={styles.head2}>Megha</Text>
                  <Text style={styles.head3}>UX Designer</Text>
                  <Text style={styles.head3}>Joined today</Text>
</View>
          </View>
          {/* row  */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              paddingHorizontal: window.width * 0.05,
              marginHorizontal: window.width * 0.08,
              backgroundColor:"#fff8e9",
              width: window.width * 0.5,
              borderRadius: 15,
              height: window.width * 0.7,
              borderColor:"#ffeaac", 
              borderWidth:2,

              
            }}
          >
            
<View style={styles.outer}>

<Image
                    style={{
                        height:window.width*0.3,
                        width:window.width*0.3,}}
                    source={require("../assets/avt1.png")}
                  />
                  
                  <Text style={styles.head2}>Megha</Text>
                  <Text style={styles.head3}>UX Designer</Text>
                  <Text style={styles.head3}>Joined today</Text>
</View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
    outer:{ 
        justifyContent:"center",
        borderRadius:500,
        height:window.width*0.4,
        width:window.width*0.4,
        alignItems:"center",

    },

  head3: {
    marginTop:window.width*0.01,
    fontWeight: "400",
    fontSize: 22, 
    color: "#898c8e",
  },
  head2: {
    fontWeight: "600",
    fontSize: 26, 
    color: "#bc8c01",
  },
  head: {
    fontWeight: "bold",
    fontSize: 36,
    fontStyle: "italic",
    color: "#f7b684",
  },
  head1: {
    justifyContent: "center",
    alignItems: "center",
    marginTop:window.width*0.05,
  },
  container: {
    backgroundColor: "#d9d8d8",
    height: window.height,
  },

  line: {
    width: window.width * 1,
    backgroundColor: "white",
    height: window.width * 0.01,
    marginVertical: window.width * 0.04,
  },
});
