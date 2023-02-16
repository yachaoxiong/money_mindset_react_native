import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    height: 70, // fixed height
    marginBottom: -40,
    paddingHorizontal: 20,
    marginHorizontal: 28,
    borderRadius: 7,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  itemContainer: {
    flex: 1,
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
  },
});
