import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    id("org.springframework.boot") version "2.2.5.RELEASE"
    id("io.spring.dependency-management") version "1.0.9.RELEASE"

    id("com.github.ben-manes.versions") version "0.25.0"

    kotlin("jvm") version "1.3.61"
    kotlin("plugin.spring") version "1.3.61"
}

group = "io.github.bbortt.buessle.app"
java.sourceCompatibility = JavaVersion.VERSION_11

val springSessionVersion = "1.3.5.RELEASE"
val jedisVersion = "3.2.0"

allprojects {
    version = "${version}"

    repositories {
        mavenCentral()
        jcenter()
    }
}

configurations {
    compile {
        exclude("org.springframework.boot", "spring-boot-starter-tomcat")
    }
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-websocket")
    implementation("org.springframework.boot:spring-boot-starter-undertow")

    implementation("org.springframework.boot:spring-boot-starter-security")
    implementation("org.springframework.boot:spring-boot-starter-data-redis")
    implementation("redis.clients", "jedis", "${jedisVersion}")
    implementation("org.springframework.session", "spring-session", "${springSessionVersion}")

    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")

    implementation("org.springframework.boot:spring-boot-starter-aop")
    implementation("org.springframework.boot:spring-boot-starter-actuator")

    implementation("org.jetbrains.kotlin:kotlin-reflect")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")

    testImplementation("org.springframework.boot:spring-boot-starter-test") {
        exclude(group = "org.junit.vintage", module = "junit-vintage-engine")
    }

    implementation("org.springframework.boot:spring-boot-devtools")
}

tasks {
    withType<KotlinCompile> {
        kotlinOptions {
            freeCompilerArgs = listOf("-Xjsr305=strict")
            jvmTarget = "11"
        }
    }

    withType<Test> {
        useJUnitPlatform()
    }

    withType<ProcessResources> {
        dependsOn("src:main:Buessle-Webapp:npmExport")
        from("src/main/webapp/out") {
            into("static")
        }
    }
}
