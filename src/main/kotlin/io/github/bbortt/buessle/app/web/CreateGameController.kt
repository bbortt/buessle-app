package io.github.bbortt.buessle.app.web

import io.github.bbortt.buessle.app.domain.GameMode
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import java.util.*

@RestController
@RequestMapping("/api/new")
class CreateGameController {

    @PostMapping
    fun createGame(@RequestParam name: String, @RequestParam gameMode: GameMode) = UUID.randomUUID();
}
