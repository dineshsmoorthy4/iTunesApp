import React, { useEffect } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbums } from '../../api/albumService';
import { setAlbums } from './albumSlice';
import { RootState } from '../../redux/store';
import NetInfo from '@react-native-community/netinfo';

const AlbumList = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const albums = useSelector((state: RootState) => state.albums.list);

  useEffect(() => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        fetchAlbums().then(data => dispatch(setAlbums(data)));
      }
    });
  }, [dispatch]);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { album: item })}>
      <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
        <Image source={{ uri: item.artworkUrl100 }} style={{ width: 60, height: 60, marginRight: 10 }} />
        <Text style={{fontSize: 16, width: 320 }}>{item.collectionName}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={albums}
      keyExtractor={item => item.collectionId.toString()}
      renderItem={renderItem}
    />
  );
};

export default AlbumList;
