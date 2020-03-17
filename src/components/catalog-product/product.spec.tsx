import React from 'react'
import { render } from '@testing-library/react'

import { CatalogProduct } from './index'

describe('Catalog-Product Component', () =>{
    test('create Catalog product', () =>{
        expect(render(<CatalogProduct />)).toBeTruthy()
    })
})