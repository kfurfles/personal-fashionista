import React from 'react'
import { 
    Route,
    Switch
} from 'react-router-dom'

import { Catalog } from './../page'

export const Routes = () => {
    return (
        <main className="container">
            <div className="content">
                <Switch>
                    <Route path="/">
                        <Catalog />
                    </Route>
                </Switch>
            </div>
        </main>
    )
}