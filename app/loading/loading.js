import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';



export default class Loading extends Component {

    render() {
        return (
            <View style={styles.body}>
                <Image
                    source={require('../gif/6.gif')} />
                <Image
                    source={require('../gif/827.gif')} />
                <Image
                    source={require('../gif/279.gif')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    body: {
        flex: 3,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',

    },
    txt: {
        color: '#fff'
    }

});

