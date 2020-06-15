import React, { PropTypes } from 'react'

const Actions = ({ viewRepos, viewStarred }) => (
    <div className="actions">
        <button onClick={viewRepos}>Repositories</button>
        <button onClick={viewStarred}>Starred Repos</button>
    </div>
)

Actions.propsTypes = {
    viewRepos: PropTypes.func.isRequired,
    viewStarred: PropTypes.func.isRequired
}

export default Actions