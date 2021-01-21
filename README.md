App Design

- Fetch 'packages' from NPM
- 'package' is a reserved keyword in TS (like 'for', 'import', etc)
- Going to call NPM packages 'repositories'

Redux store

- Action Creators - searchRepositories(term)
- Actions: SearchRepositories, SearchRepositoriesSuccess & SearchRepositoriesError
- Action Types: 'search_repositories', 'search_repositories_success' & 'search_repositories_error'

Repositories (state - reducer):

- data; list of repos from NPM
- loading; true/false whether we are fetching data
- error; string, error message if one ocurred during fetch

Folder Structure

Components

- App.tsx
- RepositoriesList.tsx

index.ts (redux stuff)

- reducers
- action creators
- middle-wares

Issues and difficulties working with this project

- Imports between files can turn into a mess very quickly (made sure to import from root idex file inside state directory, not importing directly from other files or folders inside state directory)
- Communicating types over to the components can be challenging (had to create useTypedSelector folder inside hooks directory)
- Type def files for Redux, React-redux, and others are possibly over-engineered
