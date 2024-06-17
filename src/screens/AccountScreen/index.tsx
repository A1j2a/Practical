import {
  Button,
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import React, {useState} from 'react';
import {colors} from '../../assets/colors/colors';
import moment from 'moment';
import GImagePicker from '../../global/GImagePicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {images} from '../../assets/Images';
import {
  getHeight,
  opacity,
  showError,
  showSuccess,
} from '../../global/GConstant';
import {Email} from '../../global/Validation';
import {PERMISSIONS, check, request} from 'react-native-permissions';
const AccountScreen = (props: any) => {
  const [formData, setFormData] = useState({
    textField: '',
    selectedValue: '',
    date: new Date(),
    time: new Date(),
    imageUri: '',
    showDatePicker: false,
    showTimePicker: false,
    image: '',
    firstName: '',
    lastName: '',
    emails: '',
    password: '',
    confirmpassword: '',
    isShowCreateP: false,
    isShowConfirm: false,
  });

  const pickImage = async () => {
    const permission: any = Platform.select({
      android: PERMISSIONS.ANDROID.CAMERA,
      ios: PERMISSIONS.IOS.CAMERA,
    });

    const result = await check(permission);
    console.log(result);

    if (result !== 'granted') {
      await request(permission);
    } else {
      try {
        const image: any = await GImagePicker();
        setFormData({...formData, imageUri: image.url});
      } catch (error) {
        console.log('Image picker error:', error);
        // Handle error (e.g., user canceled image selection)
      }
    }
  };

  const validation = () => {
    if (formData.imageUri == '') {
      showError('Please upload profile image');
    } else if (formData.firstName == '') {
      showError('Please enter first name');
    } else if (formData.lastName == '') {
      showError('Please enter last name');
    } else if (formData.emails == '') {
      showError('Please enter email');
    } else if (!Email.test(formData.emails)) {
      showError('Please enter valid email');
    } else if (formData.password == '') {
      showError('Please enter password');
    } else if (formData.password.length < 8) {
      showError('Password should contain at least 8 characters');
    } else if (formData.confirmpassword == '') {
      showError('Please enter confirm password');
    } else if (formData.confirmpassword != formData.password) {
      showError('Please enter valid confirm password');
    } else {
      showSuccess('Success');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.globalColor}
        barStyle={'light-content'}
      />
      <View style={styles.vwHeader}>
        <Text style={styles.lblHeaderTitle}>{'Account'}</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          activeOpacity={opacity}
          style={styles.vWUploadImage}
          onPress={() => pickImage()}>
          {formData.imageUri ? (
            <Image source={{uri: formData.imageUri}} style={styles.image} />
          ) : (
            <>
              <Text style={styles.lblUploadImage}>{'Upload Image'}</Text>
              <Image source={images.UploadImage} />
            </>
          )}
        </TouchableOpacity>
        <Text
          style={[
            styles.lblEmail,
            {
              marginTop: getHeight(30),
            },
          ]}>
          {'First name'}
        </Text>
        <View style={styles.vwTextInpute}>
          <Image source={images.Person} />
          <View style={styles.vwTextInputeContainer}>
            <TextInput
              placeholder="First name"
              value={formData.firstName}
              onChangeText={(text: any) => {
                setFormData({...formData, firstName: text.trim()});
              }}
              style={styles.input}
            />
          </View>
        </View>
        <Text style={[styles.lblEmail]}>{'Last name'}</Text>
        <View style={styles.vwTextInpute}>
          <Image source={images.Person} />
          <View style={styles.vwTextInputeContainer}>
            <TextInput
              placeholder="Last name"
              value={formData.lastName}
              onChangeText={(text: any) => {
                setFormData({...formData, lastName: text.trim()});
              }}
              style={styles.input}
            />
          </View>
        </View>
        <Text style={[styles.lblEmail]}>{'Email address'}</Text>
        <View style={styles.vwTextInpute}>
          <Image source={images.Email} />
          <View style={styles.vwTextInputeContainer}>
            <TextInput
              placeholder="Email"
              value={formData.emails}
              onChangeText={(text: any) => {
                setFormData({...formData, emails: text.trim()});
              }}
              style={styles.input}
            />
          </View>
        </View>
        <Text style={[styles.lblEmail]}>{'Create password'}</Text>
        <View style={styles.vwTextInpute}>
          <Image source={images.Lock} />
          <View style={styles.vwTextInputeContainer}>
            <TextInput
              placeholder="Create password"
              maxLength={10}
              value={formData.password}
              onChangeText={(text: any) => {
                setFormData({...formData, password: text.trim()});
              }}
              secureTextEntry={formData.isShowCreateP}
              style={styles.input}
            />
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                setFormData({
                  ...formData,
                  isShowCreateP: !formData.isShowCreateP,
                });
              }}>
              <Image
                style={{height: 18, aspectRatio: 1}}
                source={
                  formData.isShowCreateP ? images.CloseEye : images.eyeOpen
                }
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={[styles.lblEmail]}>{'Confirm password'}</Text>
        <View style={styles.vwTextInpute}>
          <Image source={images.Lock} />
          <View style={styles.vwTextInputeContainer}>
            <TextInput
              placeholder="Confirm password"
              maxLength={10}
              value={formData.confirmpassword}
              onChangeText={(text: any) => {
                setFormData({...formData, confirmpassword: text.trim()});
              }}
              secureTextEntry={formData.isShowConfirm}
              style={styles.input}
            />
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                setFormData({
                  ...formData,
                  isShowConfirm: !formData.isShowConfirm,
                });
              }}>
              <Image
                style={{height: 18, aspectRatio: 1}}
                source={
                  formData.isShowConfirm ? images.CloseEye : images.eyeOpen
                }
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={[styles.lblEmail]}>{'Date picker'}</Text>
        <View style={styles.vwTextInpute}>
          <Image source={images.Calendar} />
          <View style={styles.vwTextInputeContainer}>
            <TextInput
              placeholder="Select Date"
              value={moment(formData.date).format('DD MMM YYYY')}
              onChangeText={(text: any) => {
                setFormData({...formData, confirmpassword: text.trim()});
              }}
              // editable={false}
              style={styles.input}
            />
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setFormData({...formData, showDatePicker: true})}>
              <Text>{'Pick'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={[styles.lblEmail]}>{'Time picker'}</Text>
        <View
          style={[
            styles.vwTextInpute,
            {
              marginBottom: getHeight(30),
            },
          ]}>
          <Image source={images.Stopwatch} />
          <TouchableOpacity
            activeOpacity={opacity}
            onPress={() => setFormData({...formData, showTimePicker: true})}
            style={styles.vwTextInputeContainer}>
            <TextInput
              placeholder="Select Time"
              value={moment(formData.time).format('HH:mm a')}
              onChangeText={(text: any) => {
                setFormData({...formData, time: text.trim()});
              }}
              // editable={false}
              style={styles.input}
            />
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setFormData({...formData, showTimePicker: true})}>
              <Text>{'Pick'}</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        {formData.showTimePicker && (
          <DateTimePicker
            value={formData.time}
            mode="time"
            is24Hour
            display="default"
            onChange={(event, selectedTime) => {
              setFormData({
                ...formData,
                time: selectedTime || formData.time,
                showTimePicker: false,
              });
            }}
          />
        )}
        {formData.showDatePicker && (
          <DateTimePicker
            value={formData.date}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setFormData({
                ...formData,
                date: selectedDate || formData.date,
                showDatePicker: false,
              });
            }}
          />
        )}
      </ScrollView>
      <Button title="Update" color={colors.globalColor} onPress={validation} />
    </View>
  );
};

export default AccountScreen;
