import React, { PureComponent } from 'react'
import PropTypes from "prop-types"
import Pescatarian from "../images/pescatarian.svg"
import Vegan from "../images/vegan.svg"
import Vegetarian from "../images/vegetarian.svg"
import LikeButton from "../components/LikeButton"
import { Link } from 'react-router-dom'

class RecipeItem extends PureComponent {

  static propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    vegan: PropTypes.bool,
    vegetarian: PropTypes.bool,
    pescatarian: PropTypes.bool,
  }

  render() {

    const { _id, title, summary, vegan, vegetarian, pescatarian } = this.props

    return(
      <article className="recipe">

        <h1><Link  to={`/recipes/${_id}`}>
          { title }
        </Link></h1>

        <div>
          <p>{ summary }</p>
          <ul>
            { vegan && <li><img src={Vegan} alt="vegan" /></li> }
            { !vegan && vegetarian && <li><img src={Vegetarian} alt="vegetarian" /></li> }
            { pescatarian && <li><img src={Pescatarian} alt="pescatarian" /></li> }
          </ul>
          <LikeButton />
        </div>
      </article>
    )
  }
}

export default RecipeItem
