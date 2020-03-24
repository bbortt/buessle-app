package io.github.bbortt.buessle.app.web

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.*

@RestController
@RequestMapping("/api/new")
class CreateGameController {

    @PostMapping
    fun createGame() = UUID.randomUUID();
}
