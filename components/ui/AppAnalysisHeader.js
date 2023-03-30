import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './styles/appAnalysisStyle';

export default AppAnalysisHeader = (props) => {

    const {setCurrentSection, currentSection} = props;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>setCurrentSection("Expense")} style={currentSection==="Expense"?styles.selected : styles.unselected}>
                    <Text style={currentSection==="Expense"?styles.selectedText : styles.unselectedText}>Expense</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {()=>setCurrentSection("Income")} style={currentSection==="Income"?styles.selected : styles.unselected}>
                    <Text style={currentSection==="Income"?styles.selectedText : styles.unselectedText}>Income</Text>
                </TouchableOpacity>
            </View>    
        </View>
    )
}