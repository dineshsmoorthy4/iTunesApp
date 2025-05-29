import { Dimensions, Platform, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');

export const albumListStyles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  itemContainer: {
    flex: 1,
    padding: 4,
    margin: 8,
    alignItems: 'center',
  },
  itemContainerList: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  albumImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  albumImageList: {
    width: 80,
    height: 80,
    marginRight: 12,
  },
  albumTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111',
    textAlign: 'center',
    maxWidth: 150,
    flexShrink: 1,
    overflow: 'hidden',
  },
  artistName: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
    textAlign: 'center',
  },  
  albumTitleList: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111',
    textAlign: 'left',
    flexShrink: 1,
    maxWidth: '85%',
    overflow: 'hidden',
  },
  artistNameList: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
    textAlign: 'left',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
    paddingVertical: 10
  }
});

export const albumDetailsStyles = StyleSheet.create({ 
  container: {
    alignItems: 'center',
    padding: 20,
    paddingBottom: 40,
  },
  albumImage: {
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: Platform.OS === 'ios' ? 0.25 : 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 6,
  },
  albumTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 20,
    textAlign: 'center',
    color: '#111',
  },
  artist: {
    fontSize: 22, 
    color: '#111',
    marginTop: 10,
    textAlign: 'center',
    fontWeight: '600',
    paddingBottom: 20
  },
  metaBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    width: '100%',
    paddingHorizontal: 40,
  },
  metaBox: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  metaLabel: {
    fontSize: 14,
    color: '#888',
  },
  metaValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginTop: 6,
  },
})