import axios from 'axios';
import { fetchAlbums } from '../src/api/albumService';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('albumService', () => {
  it('should fetch albums', async () => {
    const mockResponse = {
      data: {
        results: [
          { collectionId: 1, collectionName: 'Mock Album', artworkUrl100: '', artistName: 'Mock Artist' },
        ],
      },
    };

    mockedAxios.get.mockResolvedValue(mockResponse);

    const data = await fetchAlbums();
    expect(data).toEqual(mockResponse.data.results);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      'https://itunes.apple.com/search?term=jack+johnson&entity=album'
    );
  });
});
