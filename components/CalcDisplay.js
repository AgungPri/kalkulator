import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class CalcDisplay extends React.Component {

    static defaultProps = {
        display: "",
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.display}>{this.props.display}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {},
    dispplay: {},
})