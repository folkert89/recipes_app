import React, { PureComponent } from 'react'
import './LikeButton.css'
import redHeart from "../images/red-heart.svg"
import greyHeart from "../images/grey-heart.svg"
import PropTypes from 'prop-types'

class LikeButton extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    liked: PropTypes.bool.isRequired,
  }
  classNames() {
    const { liked } = this.props
    let classes = 'like'

    if (liked) { classes += ' liked' }

    return classes
  }

  toggleLike() {
    this.props.onChange()
  }

  render() {
    const { liked } = this.props
    return (
      <div className={ this.classNames() }>
        <button onClick={ this.toggleLike.bind(this) }>
          <img className="heart" alt="heart" src={ liked ? redHeart : greyHeart } />
          <span className="copy">
            <img className="heart" alt="heart" src={ liked ? redHeart : greyHeart } />
          </span>
        </button>
        <span className="likes">{ liked ? 'You like this' : null }</span>
      </div>
    )
  }
}

export default LikeButton
