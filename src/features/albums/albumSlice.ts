import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Album {
  collectionId: number;
  collectionName: string;
  artworkUrl100: string;
  artistName: string;
}

interface AlbumState {
  list: Album[];
}

const initialState: AlbumState = {
  list: [],
};

const albumSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    setAlbums(state, action: PayloadAction<Album[]>) {
      state.list = action.payload;
    },
  },
});

export const { setAlbums } = albumSlice.actions;
export default albumSlice.reducer;