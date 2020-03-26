package io.github.bbortt.buessle.app.web

import io.github.bbortt.buessle.app.domain.GameMode
import io.github.bbortt.buessle.app.domain.dto.Player
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.*

@RestController
@RequestMapping("/api")
class CreateGameController {

    @PostMapping("/validate")
    fun validateRoom(@RequestBody validateRoom: ValidateRoom) = validateRoom.uuid;

    data class ValidateRoom(
            var uuid: UUID
    )

    @PostMapping("/new")
    fun createGame(@RequestBody createGame: CreateGame) = UUID.randomUUID();

    data class CreateGame(
            var name: String,
            var gameMode: GameMode,
            var player: Player
    )
}
