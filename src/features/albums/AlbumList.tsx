// src/features/albums/AlbumList.tsx

import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbums } from '../../api/albumService';
import { setAlbums } from './albumSlice';
import { RootState } from '../../redux/store';
import NetInfo from '@react-native-community/netinfo';
import { albumListStyles as styles } from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AlbumList = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const albums = useSelector((state: RootState) => state.albums.list);
  const { width } = useWindowDimensions();
  const [isGridView, setIsGridView] = useState(true);
  const numColumns = isGridView ? (width >= 768 ? 3 : 2) : 1;

  useEffect(() => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        fetchAlbums().then(data => dispatch(setAlbums(data)));
      }
    });
  }, [dispatch]);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={isGridView ? styles.itemContainer : styles.itemContainerList}
      onPress={() => navigation.navigate('Album Details', { album: item })}
    >
      <Image
        source={{ uri: item.artworkUrl100 }}
        style={isGridView ? styles.albumImage : styles.albumImageList}
      />
      <View>
        <Text
          style={isGridView ? styles.albumTitle : styles.albumTitleList}
          numberOfLines={2}
        >
          {item.collectionName}
        </Text>
        {/* <Text
          style={isGridView ? styles.artistName : styles.artistNameList}
          numberOfLines={1}
        >
          {item.artistName}
        </Text> */}
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setIsGridView(!isGridView)}>
          <Icon
            name={isGridView ? 'view-list' : 'grid-view'}
            size={32}
            color="#333"
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={albums}
        renderItem={renderItem}
        keyExtractor={item => item.collectionId.toString()}
        numColumns={numColumns}
        contentContainerStyle={styles.listContainer}
        key={isGridView ? 'grid' : 'list'}
      />
    </View>
  );
};

export default AlbumList;
