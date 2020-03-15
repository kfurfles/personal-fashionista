import React from 'react'
import { render } from '@testing-library/react'
import { Logo } from './index'

describe('Logo component', () =>{
    test('create Header component', () =>{
        expect(render(<Logo />)).toBeTruthy()
    })
})