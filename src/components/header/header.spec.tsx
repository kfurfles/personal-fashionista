import React from 'react'
import { render } from '@testing-library/react'
import { Header } from './index'

describe('Header component', () =>{
    test('create Header component', () =>{
        expect(render(<Header />)).toBeTruthy()
    })
})