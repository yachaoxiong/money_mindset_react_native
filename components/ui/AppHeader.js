import React, { useState } from 'react'
import { View, Text, Image } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import calandarMonths from '../../utils/static'
import AppTabItem from '../../components/ui/AppTabItem'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import styles from './styles/appHeaderStyle';

export default AppHeader = () => {
    const [selected, setSelected] = React.useState("");

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
                        setSelected={(val) => setSelected(val)}
                        data={calandarMonths}
                        search={false}
                        save="value"
                        arrowicon={<FontAwesomeIcon icon={faArrowDown} size={15} color="#FFF" />}
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
                        <Text style={styles.text}>Income</Text>
                        <Text style={styles.text}>0.00</Text>
                    </View>
                    <View style={styles.expenseContainer}>
                        <Text style={styles.text}>Expense</Text>
                        <Text style={styles.text}>0.00</Text>
                    </View>
                </View>
            </View>
            {/* Menu */}
            <View style={styles.menuItemContainer}>
                <View style={styles.menuItem}>
                    <AppTabItem icon={faMoneyBill} size={25} color="red"/>
                    <Text style={styles.menuText}>Bill</Text>
                </View>
                <View style={styles.menuItem}>
                    <AppTabItem icon={faBalanceScale} size={25} color="red"/>
                    <Text style={styles.menuText}>Budget</Text>
                </View>
                <View style={styles.menuItem}>
                    <AppTabItem icon={faImage} size={25} color="red"/>
                    <Text style={styles.menuText}>Assets</Text>
                </View>
                <View style={styles.menuItem}>
                    <AppTabItem icon={faMessage} size={25} color="red"/>
                    <Text style={styles.menuText}>More</Text>
                </View>
            </View>
        </View>
    )
}