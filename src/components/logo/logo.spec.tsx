import React from 'react'
import { render } from '@testing-library/react'
import { Logo } from './logo'

describe('Logo component', () =>{
    test('create Header component', () =>{
        expect(render(<Logo />)).toBeTruthy()
    })
})