import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class HamburgerMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.firstLine} />
                <View style={styles.secondLine} />
                <View style={styles.thirdLine} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 24,
        height: 24,
    },
    firstLine: {
        width: 24,
        height: 3,
        borderRadius: 4,
        backgroundColor: 'black',
        marginBottom: 4
    },
    secondLine: {
        width: 24,
        height: 3,
        borderRadius: 4,
        backgroundColor: 'black',
        marginBottom: 4
    },
    thirdLine: {
        width: 10,
        height: 3,
        borderRadius: 4,
        backgroundColor: 'black',
    }
});
