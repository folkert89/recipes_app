import React, { PureComponent } from "react"
import Title from "../components/Title"
import RecipeItem from "./RecipeItem"
import { connect } from 'react-redux'
import RecipeEditor from './RecipeEditor'
import { fetchRecipes } from '../actions/recipes/recipes'

class RecipesContainer extends PureComponent {
  renderRecipe(recipe, index){
    return <RecipeItem key={index} { ...recipe } />
  }

  componentWillMount() {
    //this.props.dispatch(fetchRecipes())
    this.props.fetch() // see mapDispatchToProps below
  }

  render() {
    console.log(this.props.recipes)
    return(
      <div className="recipes wrapper">
        <header>
         <Title content="Recipes" />
         <RecipeEditor />
        </header>

        <main>
          { this.props.recipes.map(this.renderRecipe.bind(this))}
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ recipes }) => ({
  recipes
})
const mapDispatchToProps = { fetch: fetchRecipes }

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)
