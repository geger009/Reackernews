import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import ShowStories from '../pages/ShowStories'
import UserDetail from '../pages/UserDetail'
import PageNotFound from '../pages/PageNotFound'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />

      <Container className="pt-4">
        <Switch>
          <Route path="/" render={() => <Redirect to="/top" />} exact={true} />
          <Route
            path="/:type"
            render={({ match }) => {
              const { type } = match.params;
              if (!['top', 'new', 'best', 'ask', 'show', 'job'].includes(type)) {
                return <Redirect to="/" />;
              }
              return <ShowStories type={ type } />;
            }}
            exact={ true }
          />
          <Route path="/user/:userid" component={ UserDetail } exact={ true } />
          <Route component={ PageNotFound } />
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default AppRouter