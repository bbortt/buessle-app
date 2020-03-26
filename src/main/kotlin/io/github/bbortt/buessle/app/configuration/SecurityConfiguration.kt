package io.github.bbortt.buessle.app.configuration

import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Profile
import org.springframework.core.annotation.Order
import org.springframework.core.env.Environment
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.builders.WebSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.web.filter.CorsFilter

@Configuration
@EnableWebSecurity
class SecurityConfiguration(var environment: Environment) {

    @Order(1)
    @Configuration
    @Profile("dev")
    class DevSecurityConfig(var corsFilter: CorsFilter) : WebSecurityConfigurerAdapter() {

        @Throws(Exception::class)
        override fun configure(web: WebSecurity) {
            web.debug(true)
        }

        @Throws(Exception::class)
        override fun configure(http: HttpSecurity) {
            http
                    .csrf().disable()

                    .sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.ALWAYS)

                    .and()
                    .addFilter(corsFilter)
        }
    }

    @Configuration
    class ProdSecurityConfig : WebSecurityConfigurerAdapter() {

        @Throws(Exception::class)
        override fun configure(http: HttpSecurity) {
            http
                    .sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.ALWAYS)
        }
    }
}
