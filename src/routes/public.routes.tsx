import React, { Suspense } from 'react'
import { Redirect, Route } from 'react-router-dom';

const PublicRoutes = ({Component,path}:any) => {
    
    const token = localStorage.getItem('pizto1');

    if(!token) {
        return <Route exact path={path}>
        <Suspense fallback={"Cargando"}>
          <Component />
        </Suspense>
      </Route>
    }

    return <Redirect to="/admin"/>
}

export default PublicRoutes
