import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchRecipeById } from '../actions/recipes/recipes'
import Title from '../components/Title'

export class RecipePage extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
  }

  componentWillMount() {
    this.props.fetchRecipeById(this.props.match.params.recipeId)
  }

  render() {
    const { title } = this.props

    if (!title) return null

    return(
      <div className="recipe page">
        <Title content={ title } />
      </div>
    )
  }
}

const mapStateToProps = ({ recipes }, { match }) => {
  const recipe = recipes.reduce((prev, next) => {
    if (next._id === match.params.recipeId) {
      return next
    }
    return prev
  }, {})

  return {
    ...recipe
  }
}

export default connect(mapStateToProps,{fetchRecipeById})(RecipePage)
