package io.github.bbortt.buessle.app.config

import org.slf4j.Logger
import org.slf4j.LoggerFactory

/**
 * Helper method to easily acquire a logger inside a class.
 *
 * Can be used like:
 *
 *     class MyClass {
 *         private val log = getLogger()
 *     }
 */
@Suppress("unused") // the type parameter is used, else we can't automatically resolve the class
inline fun <reified T> T.getLogger(): Logger = LoggerFactory.getLogger(T::class.java)