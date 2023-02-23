import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import {calendarMonths} from '../../utils/static'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import TabsBarMenu from '../home/TabsBarMenu';
import { homeTabs } from '../../data/home';
import AppTextAmount from './AppTextAmount';
import styles from './styles/appHomeHeaderStyle';

export default AppHomeHeader = (props) => {

    const [selectedListItem, setSelectedListItem] = React.useState("");

    return (
        <View style={styles.container}>
            {/* logo */}
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/moneymindsetlogo.jpg')}
                    style={styles.logo} />
            </View>
            {/* left part */}
            <View style={styles.infoContainer}>
                <View style={styles.leftContainer}>
                    <Text style={styles.text}>2023</Text>
                    <SelectList
                        setSelected={(val) => setSelectedListItem(val)}
                        data={calendarMonths}
                        search={false}
                        save="value"
                        arrowicon={<FontAwesomeIcon icon={faCaretDown} size={15} color="#FFF" />}
                        boxStyles={styles.boxStyle}
                        inputStyles={styles.inputStyle}
                        dropdownStyles={styles.dropdownStyle}
                        dropdownItemStyles={styles.dropdownItemStyle}
                        dropdownTextStyles={styles.dropdownTextStyle}
                        defaultOption={{ key: '1', value: '01' }}
                    />
                </View>
                {/* dividingLine */}
                <View style={styles.dividingLine}></View>
                {/* right part */}
                <View style={styles.rightContainer}>
                    <View style={styles.incomeContainer}>
                        <Text style={styles.label}>Income</Text>
                        <AppTextAmount amount={12.00}  />
                    </View>
                    <View style={styles.expenseContainer}>
                        <Text style={styles.label}>Expense</Text>
                        <AppTextAmount amount={122222.00} />
                    </View>
                </View>
            </View>
        </View>
    )
}