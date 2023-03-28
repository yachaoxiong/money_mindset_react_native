import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import AppAnalysisHeader from '../components/ui/AppAnalysisHeader';
import AppPeriodButton from '../components/ui/AppPeriodButton';
import AppAnalysisDetailsCard from '../components/ui/AppAnalysisDetailsCard';
import AppLeaderboardDetailsCard from '../components/ui/AppLeaderboardDetailsCard';
import styles from './styles/useAnalysis';


// for test purpose
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faBank } from '@fortawesome/free-solid-svg-icons';

export default AnalysisScreen = () => {
    const [currentSection, setCurrentSection] = useState('Expense');
    const [currentTitle, setCurrentTitle] = useState('WEEK');
    const buttonTitle = ['WEEK','MONTH','YEAR'];
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <AppAnalysisHeader currentSection = {currentSection} setCurrentSection = {setCurrentSection}/>
                {/* ScrollView for the page */}
                <ScrollView style={styles.content}>
                    <View style={styles.periodButtonContainer}>
                        {
                            buttonTitle.map((title,index)=>{
                                return <AppPeriodButton key={index} title={title} currentTitle={currentTitle} setCurrentTitle = {setCurrentTitle}/>
                            })
                        }
                    </View>
                    {/* Scroll View from period details */}
                    <ScrollView horizontal={true}>
                        <AppAnalysisDetailsCard/>
                        <AppAnalysisDetailsCard/>
                        <AppAnalysisDetailsCard/>
                    </ScrollView>
                    {/* Horizontal Line */}
                    <View style={styles.horizontalLine}></View>
                    {/* leaderBoard */}
                    <View style={styles.leaderboardContainer}>
                        <Text style={styles.leaderboardHeader_text}>{currentSection} Leaderboard</Text>
                        <View style={styles.leaderboardDetailsContainer}>
                            <AppLeaderboardDetailsCard icon = {faGift} type="Gift" rate={1}/>
                            <AppLeaderboardDetailsCard icon = {faBank} type="Bank" rate={0.5}/>
                            <AppLeaderboardDetailsCard icon = {faCar} type="Car" rate={0.25}/>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}
