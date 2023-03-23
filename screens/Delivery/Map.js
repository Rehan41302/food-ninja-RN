import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { LinearGradient } from "expo-linear-gradient";

import IconButton from "../../components/IconButton";
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  images,
  dummyData,
  constants,
} from "../../constants";
import { utils } from "../../utils";

// TODO: move this key to config
const API_KEY = "AIzaSyDxmlreoXf65r06Sy6hRfmmgUTWo-FSp_A";

const Map = ({ navigation }) => {
  const mapView = useRef(null);
  const [region, setRegion] = useState(null);
  const [toLoc, setToLoc] = useState(null);
  const [fromLoc, setFromLoc] = useState(dummyData.fromLocs[1]);
  const [angle, setAngle] = useState(0);

  const [isReady, setIsReady] = useState(false);
  const [duration, setDuration] = useState("30");

  useEffect(() => {
    let initialRegion = {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    };

    let destination = {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
    };

    setToLoc(destination);
    setFromLoc(dummyData.fromLocs[1]);

    setRegion(initialRegion);
  }, []);

  function renderMap() {
    return (
      <MapView
        ref={mapView}
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
      >
        {fromLoc && (
          <Marker
            key={"fromLoc"}
            coordinate={fromLoc}
            tracksViewChanges={false}
            icon={icons.navigator1}
            rotation={angle}
            anchor={{ x: 0.5, y: 0.5 }}
          />
        )}

        {toLoc && (
          <Marker
            key={"toLoc"}
            coordinate={toLoc ? toLoc : { longitude: 0, latitude: 0 }}
            tracksViewChanges={false}
            // icon={icons.location_pin}
            anchor={{ x: 0.5, y: 0.5 }}
          />
        )}

        <MapViewDirections
          origin={fromLoc}
          destination={toLoc}
          apikey={API_KEY}
          strokeWidth={5}
          strokeColor={COLORS.primary}
          optimizeWaypoints={true}
          onReady={(result) => {
            setDuration(Math.ceil(result.duration));
            if (!isReady) {
              // Fit the map based on the route
              mapView.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: SIZES.width * 0.1,
                  bottom: 400,
                  left: SIZES.width * 0.1,
                  top: SIZES.height * 0.1,
                },
              });

              // Reposition the Navigator
              if (result.coordinates.length >= 2) {
                let angle = utils.calculateAngle(result.coordinates);
                setAngle(angle);
              }

              setIsReady(true);
            }
          }}
        />
      </MapView>
    );
  }

  function renderHeaderButtons() {
    return (
      <>
        <IconButton
          icon={icons.back}
          containerStyle={{
            position: "absolute",
            top: SIZES.padding * 2,
            left: SIZES.padding,
            ...style.buttonStyle,
          }}
          iconStyle={{ width: 20, height: 20, tintColor: COLORS.gray2 }}
          onPress={() => navigation.goBack()}
        />

        <View
          style={{
            position: "absolute",
            top: SIZES.padding * 2,
            right: SIZES.padding,
          }}
        >
          <IconButton
            icon={icons.globe}
            containerStyle={style.buttonStyle}
            iconStyle={{ width: 20, height: 20, tintColor: COLORS.gray2 }}
          />
          <IconButton
            icon={icons.focus}
            containerStyle={{ marginTop: SIZES.radius, ...style.buttonStyle }}
            iconStyle={{ width: 20, height: 20, tintColor: COLORS.gray2 }}
          />
        </View>
      </>
    );
  }

  function renderInfo() {
    return (
      <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={[COLORS.transparent, COLORS.lightGray1]}
          style={{
            position: "absolute",
            top: -20,
            left: 0,
            right: 0,
            height: Platform.OS === "ios" ? 200 : 50,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        />

        <View
          style={{
            padding: SIZES.padding,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: COLORS.white,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={icons.clock}
              style={{ width: 40, height: 40, tintColor: COLORS.black }}
            />
            <View style={{ marginLeft: SIZES.padding }}>
              <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
                Your delivery time
              </Text>
              <Text style={{ ...FONTS.h3 }}>{duration} minutes</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: SIZES.padding,
            }}
          >
            <Image
              source={icons.focus}
              style={{ width: 40, height: 40, tintColor: COLORS.black }}
            />
            <View style={{ marginLeft: SIZES.padding }}>
              <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
                Your Address
              </Text>
              <Text style={{ ...FONTS.h3 }}>88, Jln Padungan, Kuching</Text>
            </View>
          </View>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              height: 70,
              marginTop: SIZES.padding,
              borderRadius: SIZES.radius,
              paddingHorizontal: SIZES.radius,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.primary,
            }}
          >
            <Image
              source={images.profile}
              style={{ width: 40, height: 40, borderRadius: 5 }}
            />

            <View style={{ flex: 1, marginLeft: SIZES.radius }}>
              <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
                MicroDevAssociation
              </Text>
              <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
                Delivery man
              </Text>
            </View>

            <View
              style={{
                height: 40,
                width: 40,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderRadius: 5,
                borderColor: COLORS.white,
                backgroundColor: COLORS.transparentPrimray,
              }}
            >
              <Image source={icons.call} style={{ width: 30, height: 30 }} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {renderMap()}
      {renderHeaderButtons()}
      {renderInfo()}
    </View>
  );
};

const style = StyleSheet.create({
  buttonStyle: {
    width: 40,
    height: 40,
    borderRadius: SIZES.radius,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.gray2,
    backgroundColor: COLORS.white,
  },
});

export default Map;
