import axios from 'axios'

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
    baseURL: GITHUB_URL,
    headers: { Authorization: `token ${GITHUB_TOKEN}`}
})

export const searchUsers = async (text) => {
    const params = new URLSearchParams({
        q: text,
    })

    const response = await github.get(`/search/users?${params}`)
    return response.data.items
    
}

export const getUserAndRepos = async(login) => {
    const params = new URLSearchParams({
        q: 'user:' + login,
        sort: 'stars',
        order_by: 'desc',
        per_page: 100
    })

    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/search/repositories?${params}`),
    ])

    return { user: user.data, repos: repos.data.items}
}