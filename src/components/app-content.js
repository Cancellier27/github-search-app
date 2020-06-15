import React, { PropTypes } from 'react'

import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userinfo, repos, starred, handleSearch, viewRepos, viewStarred, isFetching }) => (
    <div className="app">
        <Search isDisabled={isFetching} handleSearch={handleSearch} />
        {isFetching && <h4>Loading...</h4>}
        {!!userinfo && <UserInfo userinfo={userinfo} />}
        {!!userinfo && <Actions viewRepos={viewRepos} viewStarred={viewStarred} />}

        {!!repos.length && <Repos className="repos"
            title="Repositories"
            repos={repos} />}

        {!!starred.length && <Repos className="starred"
            title="Starred"
            repos={starred} />}
    </div>
)

AppContent.propTypes = {
    userinfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired,
    handleSearch: PropTypes.func.isRequired,
    viewRepos: PropTypes.func.isRequired,
    viewStarred: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired
}

export default AppContent