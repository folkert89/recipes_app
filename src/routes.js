import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import RecipePage from './recipes/recipepage'
import RecipesContainer from './recipes/RecipesContainer'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={RecipesContainer} />
        <Route path="/recipes/:recipeId" component={RecipePage} />
      </div>
    )
  }
}
