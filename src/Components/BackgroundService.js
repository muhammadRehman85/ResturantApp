import { View, Text, TouchableOpacity, Platform } from 'react-native';
import React, { useEffect } from 'react';
import BackgroundService from 'react-native-background-actions';

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
let shouldStop = false;

const veryIntensiveTask = async (taskDataArguments) => {
    const { delay } = taskDataArguments;
    var count = 0;

    try {
        while (!shouldStop) {
            console.log(count);
            count++;
            await sleep(delay);
        }
    } catch (error) {
        console.error('Error in veryIntensiveTask:', error);
    }
};

const options = {
    taskName: 'Counting',
    taskTitle: 'Counting',
    taskDesc: 'Counting is Started',
    taskIcon: {
        name: 'ic_launcher',
        type: 'mipmap',
    },
    color: '#ff00ff',
    linkingURI: 'yourSchemeHere://chat/jane',
    parameters: {
        delay: 1000,
    },
};

const BackgroundServices = () => {
    const startBackgroundService = async () => {
        try {
            console.log('Starting background service...');
            await BackgroundService.start(veryIntensiveTask, options);
            console.log('Background service started successfully.');
            await BackgroundService.updateNotification({ taskDesc: 'Counter is Running in Background'});
        } catch (error) {
            console.error('Failed to start background service:', error);
        }
    };
    const stopBackgroundService = async () => {
        shouldStop = true;  // Update the global flag to stop the task
    
        try {
            await BackgroundService.stop();
            console.log('Background service stopped successfully.');
        } catch (error) {
            console.error('Failed to stop background service:', error);
        }
    };
    return (
        <View>
            <TouchableOpacity style={{ marginTop: 100 ,width:200,height:50,borderRadius:10,backgroundColor:'teal',padding:10 }} onPress={startBackgroundService}>
                <Text>Start Background Service</Text>
            </TouchableOpacity> 
            
            <TouchableOpacity style={{ marginTop: 100 }} onPress={stopBackgroundService}>
                <Text>Stop Background Service</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BackgroundServices;
