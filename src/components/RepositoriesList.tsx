import { useState } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('')
  const { searchRepositories } = useActions()
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  )

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    searchRepositories(term)
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        {/* detect form submission - when user submits the form call action creator
        that makes a request to the NPM API */}
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        {/* add state to track users text input */}
        <button>Search</button>
        {/* get redux state to render list of found packages */}
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  )
}

export default RepositoriesList
