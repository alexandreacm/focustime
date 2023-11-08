import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

function NoItem() {
    return (
        <Text style={styles.noItem}>We have not focused on anything</Text>
    )
}

export default NoItem;

const styles = StyleSheet.create({
    noItem: {
        color: colors.noItem,
        textAlign: 'center',
        fontSize: 14,
    }
})