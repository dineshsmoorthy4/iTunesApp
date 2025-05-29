import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {albumDetailsStyles as styles} from './style';
import { useTheme } from '../../themes/ThemeContext';

const AlbumDetails = ({route}: any) => {
  const {album} = route.params;
  const { theme } = useTheme();

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.artist, { color: theme.text }]}>{album.artistName}</Text>
      <Image source={{uri: album.artworkUrl100}} style={styles.albumImage} />
      <Text style={[styles.albumTitle, { color: theme.text }]}>{album.collectionName}</Text>
      <View style={styles.metaBoxContainer}>
        <View style={styles.metaBox}>
          <Text style={[styles.metaLabel, { color: theme.text }]}>Release Date:</Text>
          <Text style={[styles.metaValue, { color: theme.text }]}>
            {album.releaseDate?.split('T')[0] ?? 'N/A'}
          </Text>
        </View>

        <View style={styles.metaBox}>
          <Text style={[styles.metaLabel, { color: theme.text }]}>Track Count:</Text>
          <Text style={[styles.metaValue, { color: theme.text }]}>{album.trackCount ?? 'N/A'}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default AlbumDetails;
