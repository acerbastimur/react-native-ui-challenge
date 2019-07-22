import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/header/Header';
import CitiesBar from '../components/citiesBar/CitiesBar';
import Card from '../components/card/Card';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Header style={styles.header} />
                <CitiesBar style={styles.cities} />
                <ScrollView style={{ flex: 0.4 }}>
                    <Card source={require("../assets/images/04.png")} />
                    <Card source={require("../assets/images/05.png")} />
                    <Card source={require("../assets/images/03.png")} />
                    <Card source={require("../assets/images/02.png")} />
                    <Card source={require("../assets/images/01.png")} />

                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9',
        paddingTop: 60
    },
});
