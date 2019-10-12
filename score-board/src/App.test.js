import React from 'react';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App';

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const wrapper = rtl.render(<App />);
  const hasStrikeTxt = wrapper.queryByText(/strikes/i);
  expect(hasStrikeTxt).toBeInTheDocument;
});


it('Strike button clicked with correct count', () => {
    const wrapper = rtl.render(<App />);
    const strikeBtn = wrapper.getByTestId('strikebtn');
    const strikeCount = wrapper.getByTestId('strikecount');
    rtl.fireEvent.click(strikeBtn);
    expect(strikeCount.textContent).toBe('Strikes: 1')
    rtl.fireEvent.click(strikeBtn);
    expect(strikeCount.textContent).toBe('Strikes: 2')
    rtl.fireEvent.click(strikeBtn);
    expect(strikeCount.textContent).toBe('Strikes: 0')
});