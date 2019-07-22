import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View
                style={styles.container}>
                <ImageBackground imageStyle={{ borderRadius: 40 }} style={styles.background} source={this.props.source} >
                    <View style={{ flex: 1, flexDirection: "column" }}>
                        <CardHeader />
                        <View style={{ flex: 0.7, flexDirection: "row", padding: 30, alignItems: "center" }} >
                            <Image source={require('../../assets/images/play.png')} style={{ width: 60, height: 60, borderRadius: 60 }} />
                            <View style={{
                                flexDirection: "column", marginLeft: 12,
                            }}>
                                <Text style={styles.cardTitle}>Japan’s second largest metropolitan area</Text>
                                <Text style={styles.cardsubTitle}>OSAKA , JAPAN</Text>
                            </View>

                        </View>
                    </View>
                </ImageBackground>
                <CardFooter style={styles.cardFooter} />
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        height: 260,
        marginVertical: 10

    },
    background: {
        position: "absolute",
        width: 350,
        height: 235,
        alignSelf: "center",
        borderRadius: 50
    }, cardTitle: {
        fontFamily: "Montserrat-Bold",
        fontSize: 18,
        color: "white",
    }, cardsubTitle: {
        fontFamily: "Montserrat-Bold",
        fontSize: 9,
        color: "#C5C5C5",
    }
});