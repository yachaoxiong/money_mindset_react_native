import React from 'react';
import {View,Text} from 'react-native';
import styles from './styles/appAssetsHeaderStyle';

export default AppAssetsHeader = (props) => {
    const {assets} = props;

    const balanceAndDebt = () => {
        let balance = 0;
        let debt = 0;

        assets.forEach((asset)=>{
            if(asset._id === 'Debt'){
                asset.assetsItems.forEach((item)=>{
                    debt+=Number(item.amount);
                })
            }else{
                asset.assetsItems.forEach((item)=>{
                    balance+=Number(item.amount);
                })
            }
        })

        return [balance,debt];
    }

    const [balance,debt] = balanceAndDebt();

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header_text}>Assets Management</Text>
            </View>
            {/* <View style={styles.balanceContainer}>
                <Text style={styles.balance_text}>Blance</Text>
                <Text style={styles.balanceAmount_text}>{balance.toFixed(2)}</Text>
            </View> */}
            <View style={styles.totalAndDebtContainer}>
                <View style={styles.totalContainer}>
                    <Text style={styles.blanceAndDebt_text}>Blance</Text>
                    <Text style={styles.balanceAmount_text}>{balance.toFixed(2)}</Text>
                </View>
                <View style={styles.verticalLine}></View>
                <View style={styles.debtContainer}>
                    <Text style={styles.blanceAndDebt_text}>Debt</Text>
                    <Text style={styles.totalAndDebtAmount_text}>{debt.toFixed(2)}</Text>
                </View>
            </View>
        </View>
    )
}