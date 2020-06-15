import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content'

class App extends Component {
    constructor() {
        super(),
            this.state = {
                userinfo: null,
                repos: [],
                starred: [],
                isFetching: false
            }
    }

    getGiHubApi(username, type) {
        const internalUser = username ? username : ''
        const internalType = type ? `/${type}` : ''
        return `https://api.github.com/users/${internalUser}${internalType}`
    }

    handleSearch(e) {
        const value = e.target.value
        const ENTER = 13
        const key = e.which || e.keyCode

        if (key === ENTER) {
            this.setState({ isFetching: true })

            ajax().get(this.getGiHubApi(value))
                .then((result) => {
                    this.setState({
                        userinfo: {
                            username: result.name,
                            login: result.login,
                            photo: result.avatar_url,
                            repos: result.public_repos,
                            followers: result.followers,
                            following: result.following
                        },
                        repos: [],
                        starred: []
                    })
                }).always(() => this.setState({ isFetching: false }))
        }
    }

    viewRepos(type) {
        return (e) => {
            const user = this.state.userinfo.login
            ajax().get(this.getGiHubApi(user, type))
                .then((result) => {
                    this.setState({
                        [type]: result.map((repo) => ({
                            name: repo.name,
                            link: repo.html_url
                        }))
                    })
                })
        }
    }

    render() {
        return <AppContent
            userinfo={this.state.userinfo}
            repos={this.state.repos}
            starred={this.state.starred}
            isFetching={this.state.isFetching}
            handleSearch={(e) => this.handleSearch(e)}
            viewRepos={this.viewRepos('repos')}
            viewStarred={this.viewRepos('starred')}
        />
    }
}

export default App