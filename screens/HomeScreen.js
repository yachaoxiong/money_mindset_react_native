import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import AppHeader from '../components/ui/AppHeader'
import AppTransaction from '../components/ui/AppTransaction'
import styles from './styles/useHomeStyle'
export default HomeScreen = () => {

    const mockUpDate = [
        {
            date:"02-15",
            year:"2023",
            income: "150",
            expense: "80",
            transactions:[
                {activity:"Phone",cost:"-150"},
                {activity:"Part-time",cost:"200"},
            ]
        },
        {
            date:"02-16",
            year:"2023",
            income: "50",
            expense: "100",
            transactions:[
                {activity:"Food",cost:"-150"},
            ]
        },
    ]

    return (
        <View style={styles.container}>
            <AppHeader />
            {/* <View style={styles.noDataContainer}>
                <Image
                    style={styles.nodata}
                    source={require('../assets/nodata.jpg')}
                />
                <Text style={{fontSize:25, fontWeight:'bold',marginTop:-60}}>No Data</Text>
            </View> */}
            {/* <AppTransaction/> */}
            <ScrollView style={styles.scrollView}>
                {mockUpDate.map((item,key)=>{
                    return <AppTransaction transaction={item}/>
                })}
            </ScrollView>
        </View>
    )
}

