# PortinariUiKeycloakLogin

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.5.

OpenID Connect Library: <https://www.npmjs.com/package/angular-auth-oidc-client>

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Docker Build Desenvolvimento

```bash
sudo docker build -f Dockerfile -t portinari-ui-keycloak-login:dev . && \
  sudo docker run -it --rm --name portinari-ui-keycloak-login-dev -p 4200:80 portinari-ui-keycloak-login:dev

  sudo docker run -it --rm --name portinari-ui-keycloak-login-dev -p 4200:80 -v /mnt/c/Sources/Samples/Portinari-UI/portinari-ui-keycloak-login/dist/portinari-ui-keycloak-login:/app portinari-ui-keycloak-login:dev
```

## Docker Build Produção

```bash
# Build
sudo docker build -f Dockerfile -t portinari-ui-keycloak-login:latest .

# Executar
sudo docker rm portinari-ui-keycloak-login -f
sudo docker run -d --name portinari-ui-keycloak-login --restart always -p 9001:80 portinari-ui-keycloak-login:latest

## Full
cd ~/sources/samples/portinari-ui-keycloak-login && \
  git pull && \
  sudo docker build -f Dockerfile -t portinari-ui-keycloak-login:latest . && \
  sudo docker rm portinari-ui-keycloak-login -f && \
  sudo docker run -d --name portinari-ui-keycloak-login --restart always -p 9001:80 portinari-ui-keycloak-login:latest
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
