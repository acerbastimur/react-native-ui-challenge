import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HamburgerMenu from './HamburgerMenu';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.header}>
                <View style={styles.bar}>
                    <HamburgerMenu style={styles.hamburger} />
                    <Text style={styles.headerText}><View style={styles.textBox} />Discover.</Text>
                    <Icon name="md-search" size={24} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        flex: 0.1,
        paddingHorizontal: 25,

    }, bar: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 6
    }, hamburger: {
    }, headerText: {
        fontFamily: "Montserrat-Medium",
        fontSize: 30,
        lineHeight: 30
    }, textBox: {
        width: 10,
        height: 10,
        backgroundColor: '#FF4848',
        position: "absolute",
        top: 0
    }
});
