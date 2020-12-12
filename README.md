# About this Repository
Any of my non-WordPress experimental websites will get thrown into this repo. Feel free to critique and nitpick in the Issues, the whole purpose of this is to document my learning and discover more. :)

<!-- TOC -->

- [About this Repository](#about-this-repository)
- [Project List](#project-list)
- [Static](#static)
- [JavaScript](#javascript)
    - [Rock, Paper, Scissors](#rock-paper-scissors)
    - [ThreeJS Tutorial](#threejs-tutorial)
    - [The New Aesthetic Demo](#the-new-aesthetic-demo)
    - [A-Frame Demo](#a-frame-demo)
    - [D3 Timeline Demo](#d3-timeline-demo)
    - [D3 Timeline Demo - Albums Version](#d3-timeline-demo---albums-version)
    - [API Test - Cooper Hewitt](#api-test---cooper-hewitt)
    - [Web Audio - ToneJS and NexusUI Test](#web-audio---tonejs-and-nexusui-test)
    - [Google Cloud Vision Test - API POST Request Test](#google-cloud-vision-test---api-post-request-test)
- [AngularJS](#angularjs)
    - [CodeSchool](#codeschool)
    - [Codecademy](#codecademy)
    - [Lynda](#lynda)
    - [Character Select Screen](#character-select-screen)

<!-- /TOC -->

# Project List

* [`boxproject`](https://github.com/emilyeserven/testwebsites/tree/master/boxproject)
* [`ornette`](https://github.com/emilyeserven/testwebsites/tree/master/ornette)
* [`typography`](https://github.com/emilyeserven/testwebsites/tree/master/typography)
* `js/angular/`[`codeschool`](https://github.com/emilyeserven/testwebsites/tree/master/js/angular/codeschool)
* `js/animejs/`[`surprise`](https://github.com/emilyeserven/testwebsites/tree/master/js/animejs/surprise)
* `js/api/`[`googurl`](https://github.com/emilyeserven/testwebsites/tree/master/js/api/googurl)
* `js/`[`codecademy`](https://github.com/emilyeserven/testwebsites/tree/master/js/codeacademy)
* `js/`[`d3`](https://github.com/emilyeserven/testwebsites/tree/master/js/d3)
* `js/nodejs/`[`lynpractice`](https://github.com/emilyeserven/testwebsites/tree/master/js/nodejs/lynpractice)
* `js/react/`[`arwes-demo`](https://github.com/emilyeserven/testwebsites/tree/master/js/react/arwes-demo)
* `js/`[`threejs`](https://github.com/emilyeserven/testwebsites/tree/master/js/threejs)
* `js/`[`webaudio`](https://github.com/emilyeserven/testwebsites/tree/master/js/webaudio)

# Static

See the README [here](https://github.com/emilyeserven/testwebsites/tree/master/static).

# JavaScript

## Rock, Paper, Scissors

`/js/codeacademy`

Inspired by an exercise from the Codecademy JavaScript track. Expanded to include event listeners, more functions, and DOM manipulation.

[Project Directory](https://github.com/emilyeserven/testwebsites/tree/master/js/codeacademy) | [Preview](https://rawcdn.githack.com/emilyeserven/testwebsites/ee4544b00350dbeee2559172f3c69b76814aec69/js/codeacademy/rock-paper-scissors.html)

## ThreeJS Tutorial

`/js/threejs`

A light test/demo of the `three.js` library's tutorial. It's just a spinning cube. I will probably return to this later.

[Project Directory](https://github.com/emilyeserven/testwebsites/tree/master/js/threejs) | [Preview](https://rawcdn.githack.com/emilyeserven/testwebsites/ee4544b00350dbeee2559172f3c69b76814aec69/js/threejs/tutorial.html)

## The New Aesthetic Demo

`/js/theNewAesthetic`

A light test/demo of the `newaesthetic.js` library. Doesn't work using Preview, so to see full effects, you'd need to locally serve it on your machine. (Alternatively, you can just peek at [this static preview](https://raw.githubusercontent.com/emilyeserven/testwebsites/master/js/theNewAesthetic/itWorkedBefore.png).)

[Project Directory](https://github.com/emilyeserven/testwebsites/tree/master/js/theNewAesthetic) | [Preview](https://rawcdn.githack.com/emilyeserven/testwebsites/ee4544b00350dbeee2559172f3c69b76814aec69/js/theNewAesthetic/testproj.html)

## A-Frame Demo

`/vr/aframe-test`

A demo of A Frame, a framework for WebVR. Not much has been done with this project yet.

[Project Directory](https://github.com/emilyeserven/testwebsites/tree/master/vr/aframe-test) | [Preview](https://rawcdn.githack.com/emilyeserven/testwebsites/ee4544b00350dbeee2559172f3c69b76814aec69/vr/aframe-test/index7.html)

## D3 Timeline Demo

`/js/d3/d3timeline`

A demo of D3 using a pre-existing timeline project. I switched the focus from philosophers to classic rock acts, because I've been listening to a lot of that music lately.

While I'm using code that was already written, I'd like to make some improvements. Some I am considering implementing:

* Logos in mouseover popup
* Multiple active years (in case of a hiatus and comeback)
* Custom colors per bar (to correspond with band themes)
* A different visual indicator for acts that are still active

[Project Directory](https://github.com/emilyeserven/testwebsites/tree/master/js/d3/d3timeline) | [Preview](https://rawcdn.githack.com/emilyeserven/testwebsites/ee4544b00350dbeee2559172f3c69b76814aec69/js/d3/d3timeline/index.html) | [Base](http://bl.ocks.org/rengel-de/5603464)

## D3 Timeline Demo - Albums Version

`/js/d3/d3timelineAlbums`

A demo similar to the one above using one-off dates instead of ranges of dates. The data is all sourced from my personal music album collection (totaling 56 CDs at the time of this writing).

It'd be cool to do a matrix using D3 in the future, with the date the music was released on one axis and the relative "heaviness" of the music on another axis.

[Project Directory](https://github.com/emilyeserven/testwebsites/tree/master/js/d3/d3timelineAlbums) | [Preview](https://rawcdn.githack.com/emilyeserven/testwebsites/ee4544b00350dbeee2559172f3c69b76814aec69/js/d3/d3timelineAlbums/index.html) | [Base](http://bl.ocks.org/rengel-de/5603464)

## API Test - Cooper Hewitt

`/js/api/cooper-hewitt-1`

A quick test to see if I could connect to an API I've never used before and interact with a page. while there aren't any specific interactive pieces to it yet, I consider the time it took to create to be a small personal victory.

Refactoring of this is definitely needed. Since the project was created on a limited-access school computer, I only worked with one HTML file and a ton of commits.

[Project Directory](https://github.com/emilyeserven/testwebsites/tree/master/js/api/cooperhewitt-1) | [Preview](https://rawcdn.githack.com/emilyeserven/testwebsites/ee4544b00350dbeee2559172f3c69b76814aec69/js/api/cooperhewitt-1/index.html)

## Web Audio - ToneJS and NexusUI Test

`/js/webaudio`

Part of an assignment calling to connect ToneJS and NexusUI and create a web application. This is just the first step, I'm planning on figuring out the other interface elements and instruments soon.

[Project Directory](https://github.com/emilyeserven/testwebsites/tree/master/js/webaudio) | [Preview](https://rawcdn.githack.com/emilyeserven/testwebsites/ee4544b00350dbeee2559172f3c69b76814aec69/js/webaudio/index.html)

## Google Cloud Vision Test - API POST Request Test

`/js/aoi/cloudsight-api`

Tried to make something POST to a server and return a response and eventually (28 browser tabs and many `400` and `403` error codes later) it worked.

* I want to add an image uploading function at some point

[Project Directory](https://github.com/emilyeserven/testwebsites/tree/master/js/api/googurl) | [Preview](https://rawcdn.githack.com/emilyeserven/testwebsites/ee4544b00350dbeee2559172f3c69b76814aec69/js/api/googurl/index.html)

# AngularJS

## CodeSchool

`/js/angular/codeschool`

A practice website done while completing CodeSchool's "Shaping Up With AngularJS" course.

[Project Directory](https://github.com/emilyeserven/testwebsites/tree/master/js/angular/codeschool) | [Preview](https://rawcdn.githack.com/emilyeserven/testwebsites/ee4544b00350dbeee2559172f3c69b76814aec69/js/angular/codeschool/index.html)

## Codecademy

`/js/angular/codecademy`

A practice website done while completing Codecademy's AngularJS 1.x course.

[Project Directory](https://github.com/emilyeserven/testwebsites/tree/master/js/angular/codecademy) |
[Preview](https://rawcdn.githack.com/emilyeserven/testwebsites/ee4544b00350dbeee2559172f3c69b76814aec69/js/angular/codecademy/index.html)

## Lynda

`/js/angular/lynda`

A practice website done while completing Lynda.com's Angular 1 course.

[Project Directory](https://github.com/emilyeserven/testwebsites/tree/master/js/angular/lynda) | [Preview](https://rawcdn.githack.com/emilyeserven/testwebsites/ee4544b00350dbeee2559172f3c69b76814aec69/js/angular/lynda/index.html)

## Character Select Screen

`/js/angular/chara-select`

An Angular practice website using pictures and bios of friends to fill out a "character selection" interface. Often would be seen in a video game.

[Project Directory](https://github.com/emilyeserven/testwebsites/tree/master/js/angular/chara-select) | [Preview](https://rawcdn.githack.com/emilyeserven/testwebsites/ee4544b00350dbeee2559172f3c69b76814aec69/js/angular/chara-select/index.html) | [Design Prototype](https://xd.adobe.com/view/3b08ed02-f5b2-466a-bac0-36a73406dca3/screen/6adad8e9-9bc5-4838-9b7d-ec73c0b0e083/Home-Page/)
