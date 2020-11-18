import React from 'react';;
import { render, fireEvent } from '@testing-library/react';
import Loading from '../components/Loading';

it("renders correctly", () => {
    const {queryByTestId} = render(<Loading/>)
    expect(queryByTestId("loading-text")).toBeTruthy()
    expect(queryByTestId("loading-spinner")).toBeTruthy()
    expect()
})