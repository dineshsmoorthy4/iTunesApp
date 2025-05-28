import albumReducer, { setAlbums } from '../src/features/albums/albumSlice';

describe('albumSlice', () => {
  it('should return the initial state', () => {
    expect(albumReducer(undefined, { type: 'unknown' })).toEqual({ list: [] });
  });

  it('should handle setAlbums', () => {
    const sampleAlbums = [
      { collectionId: 1, collectionName: 'Album 1', artworkUrl100: '', artistName: 'Artist 1' },
    ];
    const newState = albumReducer({ list: [] }, setAlbums(sampleAlbums));
    expect(newState.list).toEqual(sampleAlbums);
  });
});
