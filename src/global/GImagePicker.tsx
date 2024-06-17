import { Alert, Platform, StyleSheet } from "react-native";
import ImagePicker from "react-native-image-crop-picker";

export const ImagePickerType = {
  CAMERA: 1,
  GALLERY: 2,
};

const showImagePicker = (type: any) => {
  const RequestObject = {
    mediaType: "photo",
    compressImageMaxHeight: 300,
    compressImageMaxWidth: 300,
  };
  console.log("showImagePicker_type1--->",type)

  switch (type) {
    case ImagePickerType.CAMERA:
      return ImagePicker.openCamera(RequestObject);
    case ImagePickerType.GALLERY:
      return ImagePicker.openPicker(RequestObject);
  }
};

const selectImage = (type: any, resolve: any, reject: any) => {
  console.log("showImagePicker_type--->",type)
  showImagePicker(type)
 
  .then((res: any) => {
      resolve({
        filename: res.filename,
        url: res.path,
      });
    })
    .catch(reject);
};

const GImagePicker = (RequestObject: any) => {
  return new Promise((resolve, reject) => {
    Alert.alert(
    "Select Image",
      "",
      Platform.select({
        android: [
          {
            text: 'Cancel',
            onPress: () => {
              reject("cancel selecting image");
            },
            style: "destructive",
          },
          {
            text: "Camera",
            onPress: () => selectImage(ImagePickerType.CAMERA, resolve, reject),
          },
          {
            text: "Gallery",
            onPress: () =>
              selectImage(ImagePickerType.GALLERY, resolve, reject),
          },
        ],
        ios: [
          {
            text: "Camera",
            onPress: () => selectImage(ImagePickerType.CAMERA, resolve, reject),
          },
          {
            text: "Gallery",
            onPress: () =>
              selectImage(ImagePickerType.GALLERY, resolve, reject),
          },
          {
            text:"Cancel",
            onPress: () => {
              // reject("cancel selecting image");
            },
            style: "destructive",
          },
        ],
      })
    );
  });
};
export { GImagePicker };
export default GImagePicker;
