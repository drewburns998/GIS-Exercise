import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

describe("App component", () => {
    test('loads and displays title', () => {
        render(<App />)
        const title = screen.getByText("Mobikit")

        expect(title).toBeInTheDocument();
    })
})
