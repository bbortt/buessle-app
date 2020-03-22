package io.github.bbortt.buessle.app.web

import io.github.bbortt.buessle.app.domain.GameMode
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import java.util.UUID;

@RestController
class CreateGameController {

    @PostMapping
    fun createGame(@RequestParam name: String, @RequestParam gameMode: GameMode): UUID {
        // TODO: Create game with uuid and save it

        return UUID.randomUUID();
    }
}
