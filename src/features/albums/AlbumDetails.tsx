import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {albumDetailsStyles as styles} from './style';
import { useTheme } from '../../themes/ThemeContext';
import { Strings } from '../../constants/strings';

const AlbumDetails = ({route}: any) => {
  const {album} = route.params;
  const { theme } = useTheme();

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.artist, { color: theme.text }]}>{album.artistName || Strings.defaultArtistName}</Text>
      <Image source={{uri: album.artworkUrl100}} style={styles.albumImage} />
      <Text style={[styles.albumTitle, { color: theme.text }]}>{album.collectionName || Strings.defaultAlbumName}</Text>
      <View style={styles.metaBoxContainer}>
        <View style={styles.metaBox}>
          <Text style={[styles.metaLabel, { color: theme.text }]}>{Strings.ReleaseDate}</Text>
          <Text style={[styles.metaValue, { color: theme.text }]}>
            {album.releaseDate?.split('T')[0] ?? 'N/A'}
          </Text>
        </View>

        <View style={styles.metaBox}>
          <Text style={[styles.metaLabel, { color: theme.text }]}>{Strings.TrackCount}</Text>
          <Text style={[styles.metaValue, { color: theme.text }]}>{album.trackCount ?? 'N/A'}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default AlbumDetails;
