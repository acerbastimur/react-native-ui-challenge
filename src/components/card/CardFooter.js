import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class CardFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.cardContainer}>
                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <Icon name="md-heart" size={18} color="#FF4848" />
                    <Text style={styles.active}>120.5k</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <Icon name="md-text" size={18} color="#C5C5C5" />
                    <Text style={styles.passive}>530</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <Icon name="md-share" size={18} color="#C5C5C5" />
                    <Text style={styles.passive}>22</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FFFFFF',
        width: 258,
        height: 60,
        zIndex: 9,
        position: "absolute",
        bottom: 6,
        borderRadius: 15,
        alignSelf: "center",
        elevation: 2,
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: "center"
    }, active: {
        fontFamily: "Montserrat-Medium",
        fontSize: 12,
        color: "#FF4848",
        marginLeft: 6
    }, passive: {
        fontFamily: "Montserrat-Medium",
        fontSize: 12,
        color: "#C5C5C5",
        marginLeft: 6
    }
});