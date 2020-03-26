plugins {
    id("base")
    id("com.github.node-gradle.node") version "2.2.3"
}

group = "io.github.bbortt.buessle.app.webapp"

node {
    version = "12.16.1"
    npmVersion = "6.13.4"
    download = true
}

tasks {
    create<Delete>("clean-webapp") {
        group = "build"
        delete {
            file(".next")
            file("node_modules")
            file("out")
        }
    }

    create<com.moowork.gradle.node.npm.NpmTask>("npmCoverage") {
        dependsOn("npmInstall")
        setArgs(mutableListOf("run", "coverage"))
    }

    create<com.moowork.gradle.node.npm.NpmTask>("npmFlow") {
        dependsOn("npmInstall")
        setArgs(mutableListOf("run", "flow"))
    }

    create<com.moowork.gradle.node.npm.NpmTask>("npmLint") {
        dependsOn("npmInstall")
        setArgs(mutableListOf("run", "prettier:check"))
    }

    create<com.moowork.gradle.node.npm.NpmTask>("npmBuild") {
        dependsOn("npmCoverage", "npmFlow", "npmLint")
        setArgs(mutableListOf("run", "build"))
    }

    create<com.moowork.gradle.node.npm.NpmTask>("npmExport") {
        dependsOn("npmBuild")
        setArgs(mutableListOf("run", "export"))
    }

    withType<Assemble> {
        dependsOn("npmInstall")
    }

    withType<Test> {
        dependsOn("npmCoverage")
    }

    withType<GradleBuild> {
        dependsOn("npmExport")
    }
}
