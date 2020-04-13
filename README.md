# DrugSearch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2 and updated to 9 in 2020. Tailwind was added to the project based on instructions from: https://dev.to/beavearony/building-tailwind-css-in-an-angular-cli-project-e04

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Dockerize the Application

To build docker image,

* `ng build --prod`
* `[sudo] docker image build -t drug-search .`

To run the docker,

* `[sudo] docker run -p 4500:80 --rm drug-search` 

To build docker image for local minikube,

* `ng build --prod`
* `eval $(minikube docker-env)`
* `docker image build -t drug-search .`

## Build and Deploy to Openshift on-line

* `oc login`
* `ng build --prod`
* `npx nodeshift --strictSSL=false --dockerImage=bucharestgold/centos7-s2i-web-app --imageTag=10.x --build.env OUTPUT_DIR=dist/drug-search --expose`

## Build and Deploy to Local Minishift

* `ng build --prod`
* `minishift oc-env` and follow instructions to configure shell for the os
* `eval #(minishift oc-env)` - ubuntu/linux instruction
* `oc login`  (developer/developer)
* `[sudo] npx nodeshift --strictSSL=false --dockerImage=bucharestgold/centos7-s2i-web-app --imageTag=10.x --build.env OUTPUT_DIR=dist/drug-search --expose`