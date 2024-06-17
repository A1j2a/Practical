import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';
import DeviceManager from '../../global/DeviceManager';
import {colors} from '../../assets/colors/colors';
import DeviceInfo from 'react-native-device-info';

const DeviceDetailsScreen = (props: any) => {
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [freeDiskStorage, setFreeDiskStorage] = useState(null);
  const [totalDiskCapacity, setTotalDiskCapacity] = useState(null);
  useEffect(() => {
    fetchBatteryLevel();
    DeviceSpace();
    const interval = setInterval(() => {
      fetchBatteryLevel();
    }, 60000); // Update every 60 seconds

    return () => clearInterval(interval);
  }, []);

  const fetchBatteryLevel = async () => {
    try {
      const level = await DeviceInfo.getBatteryLevel();
      // Convert battery level to percentage
      const batteryPercentage: any = Math.round(level * 100);
      setBatteryLevel(batteryPercentage);
    } catch (error) {
      console.error('Failed to fetch battery level', error);
      setBatteryLevel(null);
      // Handle error case if necessary
    }
  };

  const DeviceSpace = () => {
    // Get the available disk storage
    DeviceInfo.getFreeDiskStorage()
      .then((freeDisk: any) => {
        setFreeDiskStorage(freeDisk);
      })
      .catch(error => {
        console.error(error);
      });

    // Get the total disk capacity
    DeviceInfo.getTotalDiskCapacity()
      .then((totalDisk: any) => {
        setTotalDiskCapacity(totalDisk);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const formatDiskSpace = (spaceInBytes: any) => {
    const spaceInMB = spaceInBytes / (1024 * 1024);
    if (spaceInMB > 1024) {
      return (spaceInMB / 1024).toFixed(2) + ' GB';
    } else {
      return spaceInMB.toFixed(2) + ' MB';
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.globalColor} barStyle={'light-content'} />
      <View style={styles.vwHeader}>
        <Text  style={styles.lblHeaderTitle}>{'Device Details'}</Text>
      </View>
      <Text style={styles.lblTitleOfKey}>
        {'App Version: '}
        <Text style={styles.lblkeyofTitles}>
          {DeviceManager.applicationVersion}
        </Text>
      </Text>
      <Text style={styles.lblTitleOfKey}>
        {'Build Version: '}
        <Text style={styles.lblkeyofTitles}>{DeviceManager.buildVersion}</Text>
      </Text>
      <Text style={styles.lblTitleOfKey}>
        {'Bundle Identifier: '}
        <Text style={styles.lblkeyofTitles}>{DeviceManager.bundleId}</Text>
      </Text>
      <Text style={styles.lblTitleOfKey}>
        {'Battery Level: '}
        <Text style={styles.lblkeyofTitles}>
          {batteryLevel !== null ? `${batteryLevel}%` : 'Fetching...'}
        </Text>
      </Text>
      <Text style={styles.lblTitleOfKey}>
        {'Free Disk Storage: '}
        <Text style={styles.lblkeyofTitles}>
          {freeDiskStorage ? formatDiskSpace(freeDiskStorage) : 'Loading...'}
        </Text>
      </Text>
      <Text style={styles.lblTitleOfKey}>
        {'Total Disk Capacity: '}
        <Text style={styles.lblkeyofTitles}>
          {totalDiskCapacity
            ? formatDiskSpace(totalDiskCapacity)
            : 'Loading...'}
        </Text>
      </Text>
    </View>
  );
};

export default DeviceDetailsScreen;
