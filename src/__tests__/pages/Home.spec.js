import React from "react";
import { render, waitFor, screen } from '@testing-library/react'
import Home from '../../pages/Home'
import api from "../../services/api";
import MockAdapter from "axios-mock-adapter";

const apiMock = new MockAdapter(api)

describe('Home Page', () => {
    it('should be able to list tasks', async () => {
        apiMock.onGet('/tasks').replyOnce(200, [{
            id: "a5f40db4-f42b-4411-9aec-6068f88af5ad",
            description: "teste",
            completed: false
        }])
        render(<Home />)

        const cards = screen.getByTestId('tasks-container')

        await waitFor(() => {
            expect(cards).toHaveTextContent('teste')
        })
    })
})