package io.github.bbortt.buessle.app.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Profile
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.UrlBasedCorsConfigurationSource
import org.springframework.web.filter.CorsFilter
import java.util.*

@Configuration
@Profile("dev")
class DevCorsConfiguration(corsFilter: UrlBasedCorsConfigurationSource = corsConfiguration()) : CorsFilter(corsFilter) {

    companion object {
        @Bean
        fun corsConfiguration(): UrlBasedCorsConfigurationSource {
            val configuration = CorsConfiguration()
            configuration.allowedOrigins = Collections.singletonList("http://localhost:3000")
            configuration.allowedMethods = Arrays.asList("GET", "POST")
            configuration.allowedHeaders = Collections.singletonList("content-type")
            val source = UrlBasedCorsConfigurationSource()
            source.registerCorsConfiguration("/api/**", configuration)
            return source
        }
    }
}
