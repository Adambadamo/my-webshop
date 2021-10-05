import React from "react";
import { Route,Switch } from "react-router";
import Product from "../Product/Product";

const Routes = ({productItems}) => {
    return(
        <Switch>
            <Route path="/" exact>
                <Product productItems={productItems}/>
            </Route>
        </Switch>
    )
}

export default Routes;