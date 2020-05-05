
# Youper Challenge App

![Youper](/www/img/youper-screen.jpg)

## The challenge is to create a complete, but simplified conversational app using Ionic (v1).

[![Youper Challenge App](/www/img/screen-play.jpg)](https://youtu.be/7VCgRhNZufs "Click to watch the Challenge App")

### To run this project
#### Clone the repo
```javascript
$ git clone https://github.com/TomCosta/youperchallenge.git
``` 
#### Go to the project folder
```javascript
$ cd youperChallenge
``` 
### Install the dependencies
```bash
$ npm install
```
### Run on the browser
```bash
$ ionic serve
```
### ------------------------------------------------------------------

### Below follows the example to use this code to build an app.

## If you don't have Ionic installed

### Install using the Ionic CLI:

Use command below:

```bash
$ sudo npm install -g ionic cordova
```

Then, to run it, cd into `youperChallenge` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Run `ionic serve` for a local dev server. Navigate to `http://localhost:8100/`. The app will automatically reload if you change any of the source files.
```bash
$ ionic serve
```

# Extras
## Generate componentes, pipes, services, etc.
### Run 
```javascript
ionic generate component `component-name` to generate a new component
```
### You can also try anything else:
```javascript
ionic generate `directive|pipe|service|class|guard|interface|enum|module`
```

Substitute ios for android if you are not on a Mac system.
