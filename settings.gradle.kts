pluginManagement {
    repositories {
        gradlePluginPortal()
    }
}

rootProject.name = "Buessle-App"

include("src:main:webapp")
findProject(":src:main:webapp")?.name = "Buessle-Webapp"
