import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default class CitiesBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeCityName: 'Japan'
        };
    }

    setActiveCityName(name) {
        this.setState({
            activeCityName: name
        }, () => {
            console.log(this.state)
        })

    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView horizontal contentContainerStyle={styles.bar} style={{ marginHorizontal: 44 }} showsHorizontalScrollIndicator={false} >
                    <TouchableOpacity style={styles.cityName} onPress={() => this.setActiveCityName("Poulare")}>
                        <Text style={this.state.activeCityName == "Poulare" ? styles.active : styles.passive}>Poulare</Text>
                        <View style={this.state.activeCityName == "Poulare" ? styles.activeBar : ''} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cityName} onPress={() => this.setActiveCityName("Japan")}>
                        <Text style={this.state.activeCityName == "Japan" ? styles.active : styles.passive}>Japan</Text>
                        <View style={this.state.activeCityName == "Japan" ? styles.activeBar : ''} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cityName} onPress={() => this.setActiveCityName("Moscow")}>
                        <Text style={this.state.activeCityName == "Moscow" ? styles.active : styles.passive}>Moscow</Text>
                        <View style={this.state.activeCityName == "Moscow" ? styles.activeBar : ''} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cityName} onPress={() => this.setActiveCityName("London")}>
                        <Text style={this.state.activeCityName == "London" ? styles.active : styles.passive}>London</Text>
                        <View style={this.state.activeCityName == "London" ? styles.activeBar : ''} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cityName} onPress={() => this.setActiveCityName("Istanbul")}>
                        <Text style={this.state.activeCityName == "Istanbul" ? styles.active : styles.passive}>Istanbul</Text>
                        <View style={this.state.activeCityName == "Istanbul" ? styles.activeBar : ''} />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.12,
        backgroundColor: '#3E3E3E',
        borderRadius: 32,
        marginHorizontal: 10,
    }, bar: {
        flexDirection: "row",
        alignItems: "center",
    }, cityName: {
        paddingHorizontal: 16,
        flexDirection: "column",
        alignItems: "center",

    }, active: {
        fontFamily: "Montserrat-ExtraBold",
        color: "#FFFFFF",
        fontSize: 14

    }, passive: {
        fontFamily: "Montserrat-ExtraBold",
        fontSize: 14,
        color: "#5c5d5e",
    }, activeBar: {
        width: 30,
        height: 4,
        backgroundColor: "#FF4848",
        borderRadius: 4,
        marginTop: 6
    }
});