import React from "react";
import { render, screen } from '@testing-library/react'
import Input from '../../components/Input'

describe('Input Component', () => {
    test('should be able to render an input', () => {
        render(<Input name='task' placeholder='description' register={() => {}}/>)

        expect(screen.getAllByPlaceholderText('description')).toBeTruthy()
    })
})