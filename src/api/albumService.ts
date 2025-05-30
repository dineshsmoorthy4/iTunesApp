import api from './../api/apiService';
import { Strings } from './../constants/strings';

export const fetchAlbums = async () => {
  try {
    const response = await api.get('/search?term=jack+johnson&entity=album');
    return response.data.results;
  } catch (error) {
    console.error(Strings.errorFetchingAlbums, error);
    throw new Error(Strings.errorFetchingAlbums);
  }
};