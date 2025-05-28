import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AlbumDetails = ({ route }: any) => {
  const { album } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: album.artworkUrl100 }} style={styles.image} />
      <Text style={styles.title}>{album.collectionName}</Text>
      <Text style={styles.artist}>{album.artistName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginTop: 50 },
  image: { width: 200, height: 200, borderRadius: 10 },
  title: { fontSize: 20, marginTop: 20, fontWeight: 'bold', paddingHorizontal: 20 },
  artist: { fontSize: 18, color: '#555', marginTop: 10 },
});

export default AlbumDetails;
