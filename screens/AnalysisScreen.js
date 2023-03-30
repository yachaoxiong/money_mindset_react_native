import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, Text } from 'react-native';
import AppAnalysisHeader from '../components/ui/AppAnalysisHeader';
import AppPeriodButton from '../components/ui/AppPeriodButton';
import AppAnalysisDetailsCard from '../components/ui/AppAnalysisDetailsCard';
import AppLeaderboardDetailsCard from '../components/ui/AppLeaderboardDetailsCard';
import { period } from '../utils/static';
import styles from './styles/useAnalysis';


// for test purpose
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faBank } from '@fortawesome/free-solid-svg-icons';
import useBills from '../hooks/useBill';

export default AnalysisScreen = () => {
    const [currentSection, setCurrentSection] = useState('Expense');
    const [currentPeriod, setCurrentPeriod] = useState('WEEK');
    const detailsData = useBills(currentPeriod.toLocaleLowerCase());

    // console.log(detailsData);

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <AppAnalysisHeader currentSection = {currentSection} setCurrentSection = {setCurrentSection}/>
                {/* ScrollView for the page */}
                <ScrollView style={styles.content}>
                    <View style={styles.periodButtonContainer}>
                        {period.map((title,index)=>{
                                return <AppPeriodButton key={index} title={title} currentPeriod={currentPeriod} setCurrentPeriod = {setCurrentPeriod}/>
                        })}
                    </View>
                    {/* Scroll View from period details */}
                    <ScrollView horizontal={true}>
                        {detailsData.map((item,index)=>{
                             return <AppAnalysisDetailsCard key={index} item={item} currentPeriod={currentPeriod} currentSection={currentSection}/>
                        })}
                    </ScrollView>
                    {/* Horizontal Line */}
                    <View style={styles.horizontalLine}></View>
                    {/* leaderBoard */}
                    <View style={styles.leaderboardContainer}>
                        <Text style={styles.leaderboardHeader_text}>{currentSection} Leaderboard</Text>
                        <View style={styles.leaderboardDetailsContainer}>
                            <AppLeaderboardDetailsCard icon = {faGift} type="Gift" rate={1}/>
                            <View style={styles.horizontalLine}></View>
                            <AppLeaderboardDetailsCard icon = {faBank} type="Bank" rate={0.5}/>
                            <View style={styles.horizontalLine}></View>
                            <AppLeaderboardDetailsCard icon = {faCar} type="Car" rate={0.25}/>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}
