import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    PanResponder,
    Linking,
} from 'react-native';
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
                style={styles.cardContainer}>
                <Image
                    style={styles.cardImage}
                    source={require('../assets/images/sitti.png')}
                />
                <View style={styles.cardDetails}>
                    <View style={styles.restaurantDetails}>
                        <Text style={styles.restaurantTitle}>Sitti</Text>
                        <Text style={styles.restaurantDistance}>0.0 miles</Text>
                    </View>
                    <Text style={styles.restaurantCategory}>Middle Eastern</Text>
                    <View style={styles.restaurantReviews}>
                        <Image
                            style={styles.restaurantRating}
                            source={require('../assets/images/stars.png')}
                        />
                        <Text style={styles.reviewCount} onPress={() => Linking.openURL('https://www.yelp.com/biz/sitti-raleigh')}>707 Reviews</Text>
                    </View>
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
    },
    cardImage: {
        flex: 1,
        width: '100%',
    },
    cardDetails: {
        margin: 10,
        marginBottom: 0,
    },
    restaurantDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    restaurantTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    restaurantDistance: {
        fontSize: 20,
    },
    restaurantCategory: {
        fontSize: 15,
        color: 'darkgrey',
        marginBottom: 10,
    },
    restaurantReviews: {
        flexDirection: 'row',
        marginTop: 10,
    },
    restaurantRating: {
        width: '35%',
        height: '85%',
        // marginTop: 5,
        marginRight: 10,
    },
    reviewCount: {
        fontSize: 15,
        color: 'darkblue',
    }
});
