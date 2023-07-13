import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  userName: {
    fontSize: 31,
    fontWeight: 'bold',
    lineHeight: 36,
    color: '#525251',
    fontFamily: 'Raleway',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 16,
    color: '#525251',
    paddingTop: 8,
    fontFamily: 'Raleway',
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    paddingTop: 4,
    color: '#525251',
    fontFamily: 'Raleway',
  },
  container: {
    backgroundColor: 'white',
    height: 176,
    width: 228,
    marginHorizontal: 10,
    borderColor: '#2DACDC',
    borderWidth: 2,
    borderRadius: 12,
    flex: 1,
    padding: 16,
    marginBottom: 16,
  },
  shadowProp: {
    shadowColor: '#525251',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  separator: {
    height: 2,
    width: '100%',
    backgroundColor: '#525251',
    marginTop: 8,
  },
  containerAgeId: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
  },
});

export default styles;
