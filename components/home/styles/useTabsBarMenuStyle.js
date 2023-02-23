import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent:'space-evenly' ,
    backgroundColor: '#FFF',
    height: 70, // fixed height
    marginBottom: -40,
    paddingHorizontal: 20,
    paddingVertical:5,
    marginHorizontal: 28,
    borderRadius: 7,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    zIndex:99
  },
  itemContainer: {
    flex: 1,
    width:67
  },
  selectedItemContainer:{
    flex: 1,
    width:67,
    backgroundColor:'#E5E7E9',
    borderRadius:5,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  imageIcon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
