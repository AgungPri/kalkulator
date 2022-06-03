require("./../lib/swisscalc.lib.format.js");
require("./../lib/swisscalc.lib.operator.js");
require("./../lib/swisscalc.lib.operatorCache.js");
require("./../lib/swisscalc.lib.shuntingYard.js");
require("./../lib/swisscalc.display.memoryDisplay.js");
require("./../lib/swisscalc.display.numericDisplay.js");
require("./../lib/swisscalc.calc.calculator.js");

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CalcButton, CalcDisplay } from './../components';


export default class CalculatorScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            display: "0....",
        };
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.garisbawah}>
                    <View style={{ padiingTop: 50, margin: 50 }}>
                        <View style={{ marginTop: 100, marginBottom: 100 }}>
                            <Text style={{ fontSize: 50 }}>My Calculator </Text>
                        </View>
                        <CalcDisplay display={this.state.display} />

                        <View>
                            <Text>Hello Masih tahap proses pengembangan:), akan update di github AgungPri :) ditunggu prosesnya

                            </Text>
                        </View>
                        <View style={styles.buttonRow}>
                            <CalcButton style={styles.ukuranicon} title="7" color="red" backgroundColor="yellow" />
                            <CalcButton title="8" color="red" backgroundColor="yellow" />
                            <CalcButton title="9" color="red" backgroundColor="yellow" />
                            <CalcButton title="<x" color="red" backgroundColor="yellow" />
                        </View>
                        <View style={styles.buttonRow}>
                            <CalcButton title="4" color="red" backgroundColor="yellow" />
                            <CalcButton title="5" color="red" backgroundColor="yellow" />
                            <CalcButton title="6" color="red" backgroundColor="yellow" />
                            <CalcButton title="/" color="red" backgroundColor="yellow" />
                        </View>
                        <View style={styles.buttonRow}>
                            <CalcButton title="1" color="red" backgroundColor="yellow" />
                            <CalcButton title="2" color="red" backgroundColor="yellow" />
                            <CalcButton title="3" color="red" backgroundColor="yellow" />
                            <CalcButton title="x" color="red" backgroundColor="yellow" />
                        </View>
                        <View style={styles.buttonRow}>
                            <CalcButton title="0" color="red" backgroundColor="yellow" />
                            <CalcButton title="." color="red" backgroundColor="yellow" />
                            <CalcButton title="=" color="red" backgroundColor="yellow" />
                            <CalcButton title="-" color="red" backgroundColor="yellow" />
                            <CalcButton title="+" color="red" backgroundColor="yellow" />
                        </View>
                        <View style={styles.buttonRow}>
                            <Text style={{ backgroundColor: "#00FFAB", margin: 10, borderRadius: 10, fontSize: 20, padding: 15, fontWeight: "bold" }}>
                                Hitung
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonRow: { flexDirection: "row", justifyContent: "space-between" },
    garisbawah: { marginBottom: 200 }
});
