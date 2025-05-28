import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {albumDetailsStyles as styles} from './style';

const AlbumDetails = ({route}: any) => {
  const {album} = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.artist}>{album.artistName}</Text>
      <Image source={{uri: album.artworkUrl100}} style={styles.albumImage} />
      <Text style={styles.albumTitle}>{album.collectionName}</Text>
      <View style={styles.metaBoxContainer}>
        <View style={styles.metaBox}>
          <Text style={styles.metaLabel}>Release Date:</Text>
          <Text style={styles.metaValue}>
            {album.releaseDate?.split('T')[0] ?? 'N/A'}
          </Text>
        </View>

        <View style={styles.metaBox}>
          <Text style={styles.metaLabel}>Track Count:</Text>
          <Text style={styles.metaValue}>{album.trackCount ?? 'N/A'}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default AlbumDetails;
