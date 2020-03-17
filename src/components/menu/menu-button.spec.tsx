import React from 'react'
import { render } from '@testing-library/react'

import { MenuButton } from './index'

describe('MenuButton component', () =>{
    test('create MenuButton', () =>{
        const { container } = render(< MenuButton />)
        const input = container.querySelector('#menu-button') as HTMLInputElement
        const label = container.querySelector('label')

        label?.click()
        expect(input.checked).toBe(true)
    })
})