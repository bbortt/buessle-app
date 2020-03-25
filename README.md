Büsslä Äpp
===
> I Zite vor Isolation wettme doch zwüschdüri gern mit de Kollege s Büssi zwicke!

[![Travis CI](https://travis-ci.com/bbortt/buessle-app.svg?branch=master)](https://travis-ci.com/bbortt/buessle-app)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=bbortt_Buessle-App&metric=alert_status)](https://sonarcloud.io/dashboard?id=bbortt_Buessle-App)
[![codecov](https://codecov.io/gh/bbortt/buessle-app/branch/master/graph/badge.svg)](https://codecov.io/gh/bbortt/buessle_app)
[![Blazing Fast](https://img.shields.io/badge/speed-blazing%20%F0%9F%94%A5-brightgreen.svg?style=flat-square)](https://twitter.com/acdlite/status/974390255393505280)
[![License: Apache 2](https://img.shields.io/badge/License-Apache2-blue.svg)](https://opensource.org/licenses/MIT)

# Hesch e Fehler gfunde?
Meldne doch under dem [Link](https://github.com/bbortt/buessle-app/issues/new). Mir werdene so schnell als müglech behäbe!

# Prerequisites
* [Java JDK 11](https://jdk.java.net/11/) and [Kotlin](https://kotlinlang.org/)
* [Gradle](https://gradle.org/)
* [Node.js and npm](https://nodejs.org/en/download/)

# Installation
Running `./gradlew assemble` fetches all required dependencies (front- and backend).

## Packaging
`./gradlew build` compiles and packages the whole project into a single runnable .jar.
It is located under `build/libs`. Execute it like any other .jar-file.

## Docker
Once you built the project you can easily ship it using the [`Dockerfile`](https://github.com/bbortt/buessle-app/blob/master/Dockerfile)
within the root directory. It will also be published to DockerHub (`bbortt/buessle-app`) once released.

# Development
For any questions regarding the local development consider reading the [`DEVELOPMENT.md`](https://github.com/bbortt/buessle-app/blob/master/DEVELOPMENT.md)
or explore the project yourself. Please create an issue tagged with `help-wanted` if you have any questions!

# License
This project is licensed under the terms of the [Apache 2.0 License](https://github.com/bbortt/buessle-app/blob/master/LICENSE).
