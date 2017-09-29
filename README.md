# Broker Portal

## Install

1. Install nodeJS, npm, bower and gulp and node-foreman
2. Run `npm install`
3. Run `cd www/`
4. Run `npm install`
5. Run `bower install`

## Develop

1. Run `./development.sh`

## Preview

1. Run `./production.sh`



### Fix bower using the command bellow:
 - git config --global url."[https://]https://".insteadOf git://
 - make sure you have the git installed
	
### Add enviroment variable
 - make sure you have the windows system variables set for bower 

### Restart the computer

### Install https://toolbelt.heroku.com/

### npm install -g gulp

### create the bower_components folder inside public

### Error:
ECMDERR Bower cant access git
bower ECMDERR Failed to execute "git ls-remote --tags --heads git://github.com/angular/bower-angular-mocks.git", exit code of #128

# Git setup

```
Open git shell
git init
git add -A
git commit -m "my commit"
git remote add origin git@github.com:rafaelfernandesnet/csrDashboard.git
git push -u origin master
```

## How to start karma

1. Open nodeJs prompt
2. Run `cd www`
3. Run `karma start`

## How to run protractor

### Open webdriver

1. Open nodeJs prompt
2. Run `cd www\test\e2e\`
3. Run `webdriver-manager start`

### Run protractor

1. Open nodeJs prompt
2. Run `cd www\test\e2e\`
3. Run `protractor conf`

### Create module

1. Open nodeJs prompt
2. Run `cd www`
3. Type `node broker moduleName`

- `this will generate the folder with controller, service, route and app for that module.`
- `Remember to go app.js, require the module in the file and add as a dependency.`
