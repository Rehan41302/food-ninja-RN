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
  const [duration, setDuration] = useState("");

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

  return <View style={{ flex: 1 }}>{renderMap()}</View>;
};

export default Map;
