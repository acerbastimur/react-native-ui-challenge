import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class CardHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.header}>
                <View style={styles.headerContainer}>
                    <View style={styles.avatarContainer}>
                        <Image style={styles.avatar} source={require('../../assets/images/user1.png')} />
                        <View style={{ flexDirection: "column", justifyContent: "center", marginLeft: 6 }}>
                            <Text style={styles.name} >ELY MARYA</Text>
                            <Text style={styles.lastSeen}>4 HOURS AGO</Text>
                        </View>
                    </View>
                    <Icon name="md-heart" color="#FF4848" size={24} style={{ margin: 24 }} />

                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    header: {
        height: 70,
        width: '100%',
    }, headerContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    }, avatarContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-start",
        padding: 12
    },
    avatar: {
        width: 40,
        height: 40,
        borderWidth: 2,
        borderColor: '#d6d7da',
        borderRadius: 40
    }, name: {
        fontFamily: "Montserrat-ExtraBold",
        fontSize: 12,
        color: "white",
    }, lastSeen: {
        fontFamily: "Montserrat-ExtraBold",
        fontSize: 7,
        color: "#B9B9B9",
    },
});