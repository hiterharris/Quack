import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    Image,
    PanResponder,
} from 'react-native';
import profileImage from '../assets/images/yelp.png';
import console from 'console';

export default class Card extends Component {
    componentWillMount() {
        this.cardPanResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (e, gesture) => console.log('Move'),
            onPanResponderRelease: (e, gesture) => console.log('Released'),
        });
    }

    render() {
        return (
            <View
                {...this.cardPanResponder.panHandlers}
                style={styles.cardContainer}>
                <Image
                    style={styles.cardImage}
                    source={require('../assets/images/yelp.png')}
                />
                <View style={styles.cardDetails}>
                    <View style={styles.restaurantTitle}>
                        <Text style={styles.profileInfo}>Restaurant</Text>
                        <Text style={styles.profileInfo}>0.0 miles</Text>
                    </View>
                    <Text style={styles.profileBio}>Bio</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        overflow: 'hidden',
        backgroundColor: 'white',
        margin: 10,
        marginTop: 100,
        marginBottom: 100,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 8,
    },
    cardImage: {
        flex: 1,
        width: '100%',
    },
    cardDetails: {
        margin: 10,
    },
    restaurantTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    profileInfo: {
        fontSize: 20,
    },
    profileBio: {
        fontSize: 15,
        color: 'darkgrey',
    }
})
