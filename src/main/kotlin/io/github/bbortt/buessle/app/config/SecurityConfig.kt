package io.github.bbortt.buessle.app.config

import org.springframework.context.annotation.Configuration
import org.springframework.core.env.Environment
import org.springframework.core.env.Profiles
import org.springframework.http.HttpMethod
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.builders.WebSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.config.http.SessionCreationPolicy

@Configuration
@EnableWebSecurity
class SecurityConfig(private var environment: Environment) : WebSecurityConfigurerAdapter() {

    @Throws(Exception::class)
    override fun configure(web: WebSecurity) {
        if (environment.acceptsProfiles(Profiles.of("dev"))) {
            web.debug(true)
        }

        web
                .ignoring()
                .antMatchers(HttpMethod.OPTIONS)
    }

    @Throws(Exception::class)
    override fun configure(http: HttpSecurity) {
        if (environment.acceptsProfiles(Profiles.of("dev"))) {
            http.csrf().disable()
        }

        http
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.ALWAYS)
    }
}
