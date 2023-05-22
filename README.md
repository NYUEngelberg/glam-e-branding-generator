# Glam e Lab Logo Generator

## Prerequisites
### Authenticating to Github Packages
The project uses `@ccmdesign/ccm-ds` which is a private package published in Github Packages. In order to install it, you'll need to create a [Github personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

### Authentication in development
Export the created token into your terminal session.

On the terminal, where you'll run the project, run the following command replacing `<token>` with the personal access token you just created:

```
export NPM_TOKEN="<token>"
```

You have to do this everytime you open a new terminal session. To avoid it, you can add the environment variable to your shell configuration file.

### Authentication in production
- Add the token to the environment variables with the name `NPM_TOKEN` and run the build as usual.

### Other Github Packages authentication options
#### Option 1:
- Edit the .npmrc file replacing `${NPM_TOKEN}` on line `//npm.pkg.github.com/:_authToken=${NPM_TOKEN}` with the personal access token.

**WARNING**: Do not commit your changes to `.npmrc` file with your personal token!

#### Option 2:
- On your terminal, log in npm with the following command:

```
npm login --scope=@ccmdesign --registry=https://npm.pkg.github.com
```

It will ask for your login credentials as follow:
- `Username` will be your Github username;
- `Password` will be your personal access token created previously;
- `Email` is your public email address.

## Getting started
To get started with this project, clone the repository and install the dependencies:

```
git clone git@github.com:ccmdesign/glam-e-lab-logo-generator.git
cd glam-e-lab-logo-generator
npm install
```

You can then start a development server with the following command:

```
npm run dev
```

The development server should be accessible at `http://localhost:3000`. You can also build the project for production with the following command:

```
npm run generate
```

This will generate a production-ready build of your application in the `dist` directory.

### References
- https://docs.npmjs.com/using-private-packages-in-a-ci-cd-workflow
- https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token
