import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LanguageFilterItem from '../LanguageFilterItem'

import RespositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    repositoryList: [],
    activeReposId: 'ALL',
    isLoading: true,
  }

  componentDidMount() {
    this.getReposData()
  }

  setLanguagesData = activeReposId => {
    this.setState({activeReposId}, this.getReposData)
  }

  onFailureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png "
        alt="failure view"
      />
    </div>
  )

  getRepositoryDetailList = () => {
    const {repositoryList} = this.state
    return (
      <ul className="repository-container">
        {repositoryList.map(eachRepos => (
          <RespositoryItem respositoryData={eachRepos} key={eachRepos.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="ThreeDots" color="#00bfff" height={50} width={50} />
    </div>
  )

  getReposData = async () => {
    const {activeReposId} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeReposId}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.popular_repos.map(eachRepos => ({
        avatarUrl: eachRepos.avatar_url,
        forksCount: eachRepos.forks_count,
        id: eachRepos.id,
        issuesCount: eachRepos.issues_count,
        name: eachRepos.name,
        starsCount: eachRepos.stars_count,
      }))
      console.log(updatedData)
      this.setState({repositoryList: updatedData, isLoading: false})
    } else {
      this.onFailureView()
    }
  }

  render() {
    const {activeReposId, isLoading} = this.state
    return (
      <div className="main-container">
        <h1 className="main-heading">Popular</h1>
        <ul className="list-container">
          {languageFiltersData.map(eachData => (
            <LanguageFilterItem
              eachLanguageItem={eachData}
              key={eachData.id}
              isActive={activeReposId === eachData.id}
              setLanguagesData={this.setLanguagesData}
            />
          ))}
        </ul>
        {isLoading ? this.renderLoader() : this.getRepositoryDetailList()}
      </div>
    )
  }
}

export default GithubPopularRepos
