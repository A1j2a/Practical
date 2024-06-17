import {
  Image,
  Linking,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {colors} from '../../assets/colors/colors';
import {
  getHeight,
  getWidth,
  opacity,
  showError,
  showInfo,
} from '../../global/GConstant';
import {images} from '../../assets/Images';

const HomeScreen = (props: any) => {
  const [isShowModal, setShowModal] = useState(false);

  const makePhoneCall = (phoneNumber: any) => {
    let phoneNumberUrl = `tel:${phoneNumber}`;
    Linking.canOpenURL(phoneNumberUrl)
      .then(supported => {
        if (supported) {
          showInfo('Opening call log....')
          setTimeout(() => {
          Linking.openURL(phoneNumberUrl);
            
          }, 1000);
        } else {
          showError('Phone call feature is not supported on this device.');
        }
      })
      .catch(err => console.error('An error occurred', err));
  };
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.globalColor}
        barStyle={'light-content'}
      />
      <ScrollView
        onScroll={() => {
          setShowModal(false);
        }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.vwHeader}>
          <Text style={styles.lblHeaderTitle}>{'Dashboard'}</Text>
          <TouchableOpacity
            activeOpacity={opacity}
            onPress={() => {
              showInfo('Notifications');
            }}>
            <Image
              style={{
                height: getHeight(26),
                aspectRatio: 1,
                tintColor: colors.white,
              }}
              source={images.Notifications}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setShowModal(!isShowModal);
            }}
            style={{marginLeft: getWidth(20)}}
            activeOpacity={opacity}>
            <Image
              style={{
                height: getHeight(26),
                aspectRatio: 1,
                tintColor: colors.white,
              }}
              source={images.More}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.lblFieldTitle}>{'Upcoming consultations'}</Text>
        <View style={styles.vwComponent}>
          <View>
            <Text
              style={[
                styles.lblInnerContainerTitle,
                {
                  marginTop: 0,
                },
              ]}>
              {'Dr. Marta Juarez'}
            </Text>
            <Text style={styles.lblInnerContainerTitle}>
              {'Dr. Hans Jerhoff'}
            </Text>
          </View>
          <View style={styles.vwNumbers}>
            <Image
              style={{
                height: getHeight(70),
                width: getWidth(60),
                aspectRatio: 1,
                tintColor: colors.globalColor,
                marginBottom: getHeight(10),
              }}
              source={images.Stethoscope}
            />
            <Text style={styles.lblNumbers}>{'2'}</Text>
          </View>
        </View>
        <Text style={styles.lblFieldTitle}>{'Medical File'}</Text>
        <View style={[styles.vwComponent]}>
          <View>
            <Text
              style={[
                styles.lblInnerContainerTitle,
                {
                  marginTop: 0,
                },
              ]}>
              {'Dr. Marta Juarez'}
            </Text>
            <Text style={styles.lblInnerContainerTitle}>
              {'Dr. Hans Jerhoff'}
            </Text>
          </View>
          <View style={styles.vwNumbers}>
            <Image
              style={{
                height: getHeight(70),
                width: getWidth(60),
                aspectRatio: 1,
                tintColor: colors.globalColor,
                marginBottom: getHeight(10),
              }}
              source={images.medicalfiles}
            />
            <Text style={styles.lblNumbers}>{'7'}</Text>
          </View>
        </View>
        <View style={styles.vwBottom}>
          <TouchableOpacity
          onPress={()=>{
            showInfo('Schedule')
          }}
            style={styles.vwInnerBottomView}
            activeOpacity={opacity}>
            <Image
              style={{
                height: getHeight(80),
                aspectRatio: 1,
                tintColor: colors.globalColor,
              }}
              source={images.Plus}
            />
            <Text style={styles.lblBottom}>{'Schedule'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={() => makePhoneCall('1234567890')}
            style={styles.vwInnerBottomView}
            activeOpacity={opacity}>
            <Image
              style={{
                height: getHeight(80),
                aspectRatio: 1,
                tintColor: colors.globalColor,
              }}
              source={images.CallButton}
            />
            <Text style={styles.lblBottom}>{'Call'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {isShowModal && (
        <View style={styles.vwMoreModal}>
          <TouchableOpacity
            style={styles.vwinnerModal}
            onPress={() => {
              setShowModal(!isShowModal);
              showInfo('Setting');
            }}>
            <Text style={styles.lblInnerModal}>{'Setting'}</Text>
            <Image source={images.Setting} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setShowModal(!isShowModal);
              showInfo('Logout');
            }}
            style={[
              styles.vwinnerModal,
              {
                marginTop: getHeight(15),
              },
            ]}>
            <Text style={styles.lblInnerModal}>{'Logout'}</Text>
            <Image source={images.DrawerLeft} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
