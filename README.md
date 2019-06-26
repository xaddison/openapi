# @zeit/openapi

This package contains the master copy of ZEIT OpenAPI spec and all of its related projects. The main package is `projects/open-api` which includes a `swagger.yaml` file that holds the spec. This same package publishes a JSON version to [npm]() so it can be versioned and used from other projects and from any outside project.

To get started you just need to clone the repository and run:

```sh
$ yarn install
```

Since the monorepo is based on [yarn workspaces]() you must need use `yarn`.
