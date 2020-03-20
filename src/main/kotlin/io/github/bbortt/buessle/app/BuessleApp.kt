package io.github.bbortt.buessle.app

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class BuessleApp

fun main(args: Array<String>) {
    runApplication<BuessleApp>(*args)
}
