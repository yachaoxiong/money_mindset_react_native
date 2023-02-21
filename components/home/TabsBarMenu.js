import React from 'react'
import { View,TouchableOpacity, Text,Image } from 'react-native'
import styles from './styles/useTabsBarMenuStyle'
export default function TabsBarMenu(props) {

  const { menuItems} = props;
  const itemClick = (item,index) => {
  }
  const renderItems = menuItems.map((item, index) => {
    return (
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => itemClick(item,index)}
          key={index}
        >
          <View style={styles.iconContainer}>
            <Image 
              source={item.image}
              style={styles.imageIcon}
            />
            <Text style={styles.label}>{item.name}</Text>
          </View>
        </TouchableOpacity>
    )
  })

  return (
    <View style={styles.tabBarContainer}>        
      {renderItems}
    </View>
  )
}

