import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAlbums} from '../../api/albumService';
import {setAlbums} from './albumSlice';
import {RootState} from '../../redux/store';
import NetInfo from '@react-native-community/netinfo';
import {albumListStyles as styles} from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '../../themes/ThemeContext';
import MarqueeText from '../../themes/marqueeText';
import { SafeAreaView } from 'react-native-safe-area-context';

const AlbumList = ({navigation}: any) => {
  const dispatch = useDispatch();
  const albums = useSelector((state: RootState) => state.albums.list);
  const {width} = useWindowDimensions();
  const [isGridView, setIsGridView] = useState(true);
  const numColumns = isGridView ? (width >= 768 ? 3 : 2) : 1;
  const {theme} = useTheme();

  useEffect(() => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        fetchAlbums().then(data => dispatch(setAlbums(data)));
      }
    });
  }, [dispatch]);

  const renderItem = ({item}: any) => (
    <TouchableOpacity
      style={isGridView ? styles.itemContainer : styles.itemContainerList}
      onPress={() => navigation.navigate('Album Details', {album: item})}>
      <Image
        source={{uri: item.artworkUrl100}}
        style={isGridView ? styles.albumImage : styles.albumImageList}
      />
      <View>
        {/* <Text
          style={[
            isGridView ? styles.albumTitle : styles.albumTitleList,
            {color: theme.text},
          ]}
          numberOfLines={2}>
          {item.collectionName}
        </Text> */}
        <MarqueeText
          text={item.collectionName}
          duration={10000}
          textStyle={{color: theme.text}}
          style={{ width: isGridView ? '' : '', marginTop: 4 }}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[{backgroundColor: theme.background}]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setIsGridView(!isGridView)}>
          <Icon
            name={isGridView ? 'view-list' : 'grid-view'}
            size={32}
            color={theme.icon}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={albums}
        renderItem={renderItem}
        keyExtractor={item => item.collectionId.toString()}
        numColumns={numColumns}
        contentContainerStyle={[styles.listContainer, { paddingBottom: 40 }]}
        key={isGridView ? 'grid' : 'list'}
      />
    </SafeAreaView>
  );
};

export default AlbumList;
