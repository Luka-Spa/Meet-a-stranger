import React from 'react';;
import { render, fireEvent } from '@testing-library/react';
import Error from '../components/Error';

it("renders correctly", () => {
    const {queryByTestId, queryByAltText} = render(<Error/>)

    expect(queryByTestId("error-text")).toBeTruthy()
    expect(queryByAltText("error image")).toBeTruthy()
})