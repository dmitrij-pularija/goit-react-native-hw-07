import { Camera, CameraType } from 'expo-camera';
import React, { useState } from "react";
import { sendPhoto } from "../../redux/prestate/operations";
import { setTimeStamp } from "../../redux/prestate/slice";
import styles from "./CreatePhoto.styles.js";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import * as ImagePicker from "expo-image-picker";

import {
    Text,
    View,
    Button,
    TouchableOpacity,
  } from "react-native";

const CreatePhoto = ({ navigation }) => {
  const dispatch = useDispatch();
    const [camera, setCamera] = useState(null);
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
 
    const selectImage = async () => {    
      const { canceled, assets } = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: "Images",
          aspect: [4, 3],
          quality: 1,
        });
    
        handleImagePicked({ canceled, assets });
    };

    const takePhoto = async () => {
      const { canceled, assets } = await ImagePicker.launchCameraAsync({
        mediaTypes: "Images",
        aspect: [4, 3],
      });
    this.handleImagePicked({ canceled, assets });  
    };

    handleImagePicked = ({ canceled, assets }) => {
        if (canceled) {
          alert("Upload cancelled");
          return;
        } else {
    // const time = Date.now().toString();
    const { uri, fileName, base64 } = assets[0];
    console.log(uri, fileName, base64);

        // dispatch(setTimeStamp({time: fileName});
        // dispatch(sendPhoto({uri, time: fileName}));
    // navigation.navigate("Registr");
        }
    };


    // const takePhoto = async () => {
    //     const { uri } = await camera.takePictureAsync();
    //     const time = Date.now().toString();
    //     dispatch(setTimeStamp(time));
    //     dispatch(sendPhoto({uri, time}));
    // navigation.navigate("Registr");
    //   };

    const toggleCameraType = () => {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }    
    if (!permission ) return <View />;
    if (!permission.granted ) {
        return (
        <View style={styles.container}>
            <View style={styles.permission}>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
        </View>
      </View>
    );
    }
    
      return (
        <View style={styles.container}>
          <Camera
            style={styles.camera}
            type={type}
            ref={setCamera}
          >
            <View style={styles.photoView}>
            <View style={styles.buttonsBox}>
            <TouchableOpacity
                style={styles.libContainer}
                onPress={selectImage}
              >    
            <Feather name="image" size={48} color="#FFFFFF" />
            </TouchableOpacity>  
            <TouchableOpacity
                style={styles.takeContainer}
                onPress={takePhoto}
              >    
            <Feather name="circle" size={70} color="#FFFFFF" />
            </TouchableOpacity>

              <TouchableOpacity
                style={styles.flipContainer}
                onPress={toggleCameraType}
              >
                <Feather name="refresh-cw" size={32} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
            </View>
          </Camera>
        </View>
      );    
};

export default CreatePhoto;