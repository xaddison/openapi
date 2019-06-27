# 📖 @zeit/openapi

This project contains the master copy of ZEIT OpenAPI spec and generated projects. The source of truth for the spec in located in `swagger.yaml`. To install the project and help us improving the spec just clone the repo and run:

```sh
$ yarn install
```

Then you can just edit the file `swagger.yaml` and preview the generated doc by running:

```sh
$ now dev
```

Also, if you are using a different util probably you can preview how the swagger doc looks like right from there, that's fine.

## Projects

Every time the package is published we will generate two different packages located under `/packages` folder. Those are:

#### @zeit/api-types

This project contains a Typescript namespace that you can use in API consumers written in Typescript to explore the shape of API responses and domain objects.

To use it you just need to `yarn add @zeit/api-types` and and import the package globally `@zeit/api-types`. Then `APIZeit` will be available to type your project.

#### @zeit/openapi

This is just a JSON version of the `swagger.yaml` that will be published to npm so it can be programatically used by consumers like the [docs project](https://github.com/zeit/docs) to show examples and to enumerate parameters.

## UI

It's a project located in the root that corresponds to the **Swagger UI** of the current spec. It will be built and deployed with **Now** in every commit / PR and alised to https://open-spec.zeit.sh. It's _unrelated_ to publishing.

## Publishing

To release a new version move to the `master` branch and pull. Then you can just run:

```
yarn publish-stable
```

And it will build and publish every package under the same version.
