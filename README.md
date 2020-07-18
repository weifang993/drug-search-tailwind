# DrugSearch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2 and updated to 9 in 2020. Tailwind was added to the project.

Useful references:

* https://dev.to/beavearony/building-tailwind-css-in-an-angular-cli-project-e04. 
* https://codeburst.io/creating-a-modal-dialog-with-tailwind-css-42722c9aea4f

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

On Centos, the following was executed for max watcher error:
echo fs.inotify.max_user_watches=50288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Dockerize the Application

To build docker image,

* `ng build --prod`
* `[sudo] docker build -t drug-search .`
* `podman build -t drug-search .`

To run the docker,

* `[sudo] docker run -p 4500:80 --rm drug-search` 
* `podman run -p 8080:8080 drug-search-tailwind`

To build docker image for local minikube,

* `ng build --prod`
* `eval $(minikube docker-env)`
* `docker image build -t drug-search .`

## Build and Deploy to Openshift on-line

* `oc login`
* `ng build --prod`
* `npx nodeshift --strictSSL=false --dockerImage=nodeshift/ubi8-s2i-web-app --imageTag=10.x --build.env OUTPUT_DIR=dist/drug-search --expose`

## Build and Deploy to Local Minishift

* `ng build --prod`
* `minishift oc-env` and follow instructions to configure shell for the os
* `eval $(minishift oc-env)` - ubuntu/linux instruction
* `oc login`  (developer/developer)
* `[sudo] npx nodeshift --strictSSL=false --dockerImage=nodeshift/ubi8-s2i-web-app --imageTag=10.x --build.env OUTPUT_DIR=dist/drug-search --expose`

### Update for CRC OpenShift 4.4.8 ###

References: 
https://github.com/nodeshift/ubi8-s2i-web-app
https://developers.redhat.com/blog/2018/10/04/modern-web-apps-openshift-part-1/

* `crc oc-env`
* `oc login`  (developer/developer)

#### Create App from Local Source ####

This approach uses project Dockerfile as part of Docker strategy. From the home of the angular project, type

* `oc new-app .` or `oc new-app . --strategy=docker -l name=drug-search-tailwind app=drug-search-tailwind`

Since the Angular /dist is not in the remote Git, only local build will be successful. To start a local build, type:
* `oc start-build drug-search-tailwind --from-dir=. --follow`
* `oc expose svc/drug-search-tailwind`

#### Create App with S2I ####

This is in beta. Not yet working.

* create .s2i/environment file with 'OUTPUT_DIR=dist/drug-search'
* `oc new-app nodeshift/ubi8-s2i-web-app:latest~https://github.com/weifang993/drug-search-tailwind.git`
