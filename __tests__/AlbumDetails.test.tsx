import React from 'react';
import { render } from '@testing-library/react-native';
import AlbumDetails from '../src/features/albums/AlbumDetails';

const album = {
  collectionId: 1,
  collectionName: 'Sample Album',
  artworkUrl100: '',
  artistName: 'Sample Artist',
};

describe('AlbumDetails', () => {
  it('renders album details', () => {
    const { getByText } = render(<AlbumDetails route={{ params: { album } }} />);
    expect(getByText('Sample Album')).toBeTruthy();
    expect(getByText('Sample Artist')).toBeTruthy();
  });
});
