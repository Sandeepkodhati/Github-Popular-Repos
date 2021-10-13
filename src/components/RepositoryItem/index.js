// Write your code here
import './index.css'

const RespositoryItem = props => {
  const {respositoryData} = props
  const {name, avatarUrl, starsCount, forksCount, issuesCount} = respositoryData
  return (
    <li className="repos-details-container">
      <img src={avatarUrl} className="repos-image" alt="repos" />
      <h1 className="repos-heading">{name}</h1>
      <div className="row-styling">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png "
          alt="stars"
          className="repos-images"
        />
        <p className="repos-details">{starsCount} stars</p>
      </div>
      <div className="row-styling">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png "
          alt="forks"
          className="repos-images"
        />
        <p className="repos-details">{forksCount} forks</p>
      </div>
      <div className="row-styling">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="repos-images"
        />
        <p className="repos-details">{issuesCount} stars</p>
      </div>
    </li>
  )
}

export default RespositoryItem
