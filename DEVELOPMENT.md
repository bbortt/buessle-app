# Project setup
The project is a simple Spring Boot application. It is split into front- and backend. The backend code
is located in `src/main/kotlin`. The frontend code in `src/main/webapp`.
Both parts support hot-reloading using their own tools. Spring-Boot uses its development tools when
started with `-Dspring.profiles.active=dev` and `npm run dev` starts a development server via `Next.js`.

# About our branches
`master` - contains the productive code
* Versioned (SemVer) according to [releases](https://github.com/bbortt/Buessle-App/releases)
* Tagged with the corresponding release version
* Tagged with the corresponding build

`develop` - the development or canary branch
* Contains the latest changes
* Pull-Requests will be merged into this branch
* Default branch of this repository

# Where can I submit my changes?
## Forking
Please fork this repository into your own GitHub space. Its' not that hard, just hit the "fork" button
on the main page of this project. This way, you won't impact anyone with your changes while developing
and eventually breaking anything. As soon as your done, create a pull-request (cross-fork) back into
this repository.
Please read the [pull-request guidelines](#pull-requests) as well.

## Branch naming
`feature/*` - for issues labeled with `documentation` or `enhancement`
* Prefix the branch name with `#[ISSUE_ID]` in order to allow a good tracking

`bugfix/*` - for issues labeled with `bug`
* Prefix the branch name with `#[ISSUE_ID]` in order to allow a good tracking

# Pull-Requests
Pull-Requests *always* require at least one review, ideally from code/project owners. Pushes to `master` are not allowed, to `development` are restricted to maintainers (but not recommended).
All builds must pass in order to be approved.
