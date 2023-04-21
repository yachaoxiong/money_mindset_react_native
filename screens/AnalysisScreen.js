import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, Text } from 'react-native';
import AppAnalysisHeader from '../components/ui/AppAnalysisHeader';
import AppPeriodButton from '../components/ui/AppPeriodButton';
import AppAnalysisDetailsCard from '../components/ui/AppAnalysisDetailsCard';
import AppLeaderboardDetailsCard from '../components/ui/AppLeaderboardDetailsCard';
import { period, iconMap } from '../utils/static';
import { groupbillTypeAmountByPeriod } from '../utils/functions';
import useBills from '../hooks/useBill';
import styles from './styles/useAnalysis';

export default AnalysisScreen = () => {
    const [currentSection, setCurrentSection] = useState('Expense');
    const [currentPeriod, setCurrentPeriod] = useState('WEEK');
    const { bills } = useBills(currentPeriod.toLocaleLowerCase());
    const [leaderBoardValues,totalExpense] = groupbillTypeAmountByPeriod(bills,currentSection);

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <AppAnalysisHeader currentSection = {currentSection} setCurrentSection = {setCurrentSection}/>
                {/* ScrollView for the page */}
                <View style={styles.content}>
                    <View style={styles.periodButtonContainer}>
                        {period && period?.map((title,index)=>{
                                return <AppPeriodButton key={index} title={title} currentPeriod={currentPeriod} setCurrentPeriod = {setCurrentPeriod}/>
                        })}
                    </View>
                    {/* Scroll View from period details */}
                    <View style={{height:130}}>
                        <ScrollView horizontal={true}>
                            {bills&&bills?.map((item,index)=>{
                                return <AppAnalysisDetailsCard key={index} item={item} currentPeriod={currentPeriod} currentSection={currentSection}/>
                            })}
                        </ScrollView>
                    </View>
                    {/* Horizontal Line */}
                    <View style={styles.horizontalLine}></View>
                    {/* leaderBoard */}
                    <ScrollView style={styles.leaderboardContainer}>
                        <Text style={styles.leaderboardHeader_text}>{currentSection} Leaderboard</Text>
                        <View style={styles.leaderboardDetailsContainer}>
                            {leaderBoardValues && leaderBoardValues?.map((item,index)=>{
                                 return <AppLeaderboardDetailsCard key={index} amount={item.value} icon = {iconMap.get(item.key)} type={iconMap.key} rate={item.value/totalExpense}/>
                            })}
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </View>
    )
}
