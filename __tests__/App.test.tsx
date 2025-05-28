import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

jest.mock('react-native/Libraries/Utilities/useColorScheme', () => ({
  __esModule: true,
  default: () => 'light',
}));

describe('App.tsx', () => {
  it('renders App without crashing', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('app-root')).toBeTruthy();
  });
});
