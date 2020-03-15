import React from 'react'
import { render } from '@testing-library/react'

import { Catalog } from './index'

describe('Catalog Component', () =>{
    test('create catalog component', () =>{
        expect(render(<Catalog />)).toBeTruthy()
    })
})