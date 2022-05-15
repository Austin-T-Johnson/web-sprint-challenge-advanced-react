import React from 'react';
import { render, screen, } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppClass from './AppClass';

// Write your tests here
test('sanity', () => {
    expect(true).toBe(true)
});

test('renders without errors', () => {
    render(<AppClass />)
});

test('header exists on class-based component', () => {
    render(<AppClass />)
    const header = screen.queryByText(/coordinates/i)
    expect(header).toBeInTheDocument();
})

test('left button text renders to screen', () => {
    render(<AppClass />)
    const leftButton = screen.queryByText(/left/i)
    expect(leftButton).toBeInTheDocument();
})

test('up button text renders to screen', () => {
    render(<AppClass />)
    const upButton = screen.queryByText(/up/i)
    expect(upButton).toBeInTheDocument();
})

test('down button text renders to screen', () => {
    render(<AppClass />)
    const downButton = screen.queryByText(/down/i)
    expect(downButton).toBeInTheDocument();
})

test('right button text renders to screen', () => {
    render(<AppClass />)
    const rightButton = screen.queryByText(/right/i)
    expect(rightButton).toBeInTheDocument();
})

test('reset button text renders to screen', () => {
    render(<AppClass />)
    const resetButton = screen.queryByText(/reset/i)
    expect(resetButton).toBeInTheDocument();
})
