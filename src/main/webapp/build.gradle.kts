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

    create<com.moowork.gradle.node.npm.NpmTask>("npmBuild") {
        dependsOn("npmInstall")
        setArgs(mutableListOf("run", "build"))
    }

    create<com.moowork.gradle.node.npm.NpmTask>("npmExport") {
        dependsOn("npmBuild")
        setArgs(mutableListOf("run", "export"))
    }

    withType<Assemble> {
        dependsOn("npmExport")
    }
}
