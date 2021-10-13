// Write your code here

import './index.css'

const LanguageFilterItem = props => {
  const {eachLanguageItem, setLanguagesData, isActive} = props
  const {id, language} = eachLanguageItem

  const onClickTab = () => {
    setLanguagesData(id)
  }

  const activeClassName = isActive ? 'active' : ''

  return (
    <li className="list-item">
      <button
        type="button"
        className={`languages-button ${activeClassName}`}
        onClick={onClickTab}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
