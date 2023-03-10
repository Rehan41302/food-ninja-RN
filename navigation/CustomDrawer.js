import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { useSelector, useDispatch } from "react-redux";

import { selectNavigation, setSelectedTab } from "./slice";
import { MainLayout } from "../screens";
import {
  COLORS,
  SIZES,
  constants,
  icons,
  dummyData,
  FONTS,
} from "../constants";

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ icon, label, isFocused, onPress }) => (
  <TouchableOpacity
    style={{
      flexDirection: "row",
      height: 40,
      marginBottom: SIZES.base,
      alignItems: "center",
      paddingLeft: SIZES.radius,
      borderRadius: SIZES.base,
      backgroundColor: isFocused ? COLORS.transparentBlack1 : null,
    }}
    onPress={onPress}
  >
    <Image
      source={icon}
      style={{ width: 20, height: 20, tintColor: COLORS.white }}
    />
    <Text style={{ marginLeft: 15, color: COLORS.white, ...FONTS.h3 }}>
      {label}
    </Text>
  </TouchableOpacity>
);

const CustomDrawerContent = ({ navigation }) => {
  const { selectedTab } = useSelector(selectNavigation);
  const dispatch = useDispatch();

  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.radius,
        }}
      >
        {/* Close */}
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{ alignItems: "center", justifyContent: "center" }}
            onPress={() => navigation.closeDrawer()}
          >
            <Image
              source={icons.cross}
              style={{ width: 35, height: 35, tintColor: COLORS.white }}
            />
          </TouchableOpacity>
        </View>

        {/* Profile */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            alignItems: "center",
          }}
          onPress={() => console.log("Profile pressed!")}
        >
          <Image
            source={dummyData.myProfile.profile_image}
            style={{ width: 50, height: 50, borderRadius: SIZES.radius }}
          />
          <View
            style={{
              marginLeft: SIZES.radius,
            }}
          >
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
              {dummyData.myProfile.name}
            </Text>
            <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
              View your profile
            </Text>
          </View>
        </TouchableOpacity>

        {/* Drawer Item */}
        <View
          style={{
            flex: 1,
            marginTop: SIZES.padding,
          }}
        >
          <CustomDrawerItem
            label={constants.screens.home}
            icon={icons.home}
            isFocused={selectedTab === constants.screens.home}
            onPress={() => {
              dispatch(setSelectedTab(constants.screens.home));
              navigation.navigate("MainLayout");
            }}
          />
          <CustomDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.wallet}
          />
          <CustomDrawerItem
            label={constants.screens.notification}
            icon={icons.notification}
            isFocused={selectedTab === constants.screens.notification}
            onPress={() => {
              dispatch(setSelectedTab(constants.screens.notification));
              navigation.navigate("MainLayout");
            }}
          />
          <CustomDrawerItem
            label={constants.screens.favourite}
            icon={icons.favourite}
            isFocused={selectedTab === constants.screens.favourite}
            onPress={() => {
              dispatch(setSelectedTab(constants.screens.favourite));
              navigation.navigate("MainLayout");
            }}
          />

          {/* Line Divider */}
          <View
            style={{
              height: 1,
              marginVertical: SIZES.radius,
              marginLeft: SIZES.radius,
              backgroundColor: COLORS.lightGray1,
            }}
          />

          <CustomDrawerItem label="Track your Order" icon={icons.location} />
          <CustomDrawerItem label="Coupons" icon={icons.coupon} />
          <CustomDrawerItem label="Settings" icon={icons.setting} />
          <CustomDrawerItem label="Invite a Friend" icon={icons.profile} />
          <CustomDrawerItem label="Help Center" icon={icons.help} />
        </View>

        <View style={{ marginBottom: SIZES.padding }}>
          <CustomDrawerItem label="Logout" icon={icons.logout} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
  s;
};

const CustomDrawer = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}
    >
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerType: "slide",
          overlayColor: "transparent",
          drawerStyle: {
            flex: 1,
            width: "65%",
            paddingRight: 20,
            backgroundColor: "transparent",
          },
          sceneContainerStyle: {
            backgroundColor: "transparent",
          },
        }}
        drawerContent={(props) => (
          <CustomDrawerContent navigation={props.navigation} />
        )}
        initialRouteName="MainLayout"
      >
        <Drawer.Screen name="MainLayout">
          {(props) => <MainLayout {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;
