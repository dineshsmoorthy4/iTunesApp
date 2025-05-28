import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AlbumList from '../src/features/albums/AlbumList';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const mockNavigate = jest.fn();

const mockAlbums = [
  { collectionId: 1, collectionName: 'Test Album', artworkUrl100: '', artistName: 'Artist 1' },
];

describe('AlbumList', () => {
  it('renders albums and navigates on press', () => {
    const store = mockStore({ albums: { list: mockAlbums } });
    const { getByText } = render(
      <Provider store={store}>
        <AlbumList navigation={{ navigate: mockNavigate }} />
      </Provider>
    );

    expect(getByText('Test Album')).toBeTruthy();

    fireEvent.press(getByText('Test Album'));
    expect(mockNavigate).toHaveBeenCalledWith('Details', { album: mockAlbums[0] });
  });
});
