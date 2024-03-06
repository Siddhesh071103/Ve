import { Pressable, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Settings = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Pressable style={styles.header}>
                <View>
                    <Text style={{ fontSize: 20, marginTop: 10, marginRight: 235 }}>Add</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.replace('Screen')}>
                    <Feather style={{marginLeft: 40}} name="arrow-left" size={30} color="black" />
                </TouchableOpacity>
            </Pressable>

            <View style={styles.bottomTabs}>
                <Pressable style={styles.tabButton}>
                    <TouchableOpacity onPress={() => navigation.replace('Profile')}>
                        <AntDesign name="profile" size={30} color="white" />
                    </TouchableOpacity>
                </Pressable>

                <Pressable style={styles.tabButton}>
                    <TouchableOpacity onPress={() => navigation.replace('Additional')}>
                        <Ionicons name="add-circle-outline" size={35} color="white" />
                    </TouchableOpacity>
                </Pressable>

                <Pressable style={styles.tabButton}>
                    <TouchableOpacity onPress={() => navigation.replace('Settings')}>
                        <Feather name="settings" size={30} color="white" />
                    </TouchableOpacity>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flex: 1,
        top: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 35,
        backgroundColor: '#07FF',
        width: '100%',
        height: 50,
        flexDirection: 'row',
        paddingHorizontal: 15,
    },
    bottomTabs: {
        flex: 1,
        bottom: 0,
        marginBottom: 10,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: 50,
        backgroundColor: '#007FFF',
        borderRadius: 20,
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
    },
});

export default Settings;
