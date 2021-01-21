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
