import React from 'react'
import { create } from 'react-test-renderer'
import { render } from '@testing-library/react'
import { Header } from './header'

describe('Header component', () =>{
    test('create Header component', () =>{
        expect(render(<Header />)).toBeTruthy()
    })
})