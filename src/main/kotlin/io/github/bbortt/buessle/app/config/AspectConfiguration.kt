package io.github.bbortt.buessle.app.config

import io.github.bbortt.buessle.app.aspect.LoggingAspect
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class AspectConfiguration {

    @Bean
    fun loggingAspect(): LoggingAspect {
        return LoggingAspect();
    }
}
