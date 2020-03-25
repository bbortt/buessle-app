package io.github.bbortt.buessle.app.config

import io.github.bbortt.buessle.app.web.sockets.WebSocketRegistry
import org.springframework.context.annotation.Configuration
import org.springframework.web.socket.config.annotation.EnableWebSocket
import org.springframework.web.socket.config.annotation.WebSocketConfigurer
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry

@EnableWebSocket
@Configuration
class SocketConfig(private val webSocketRegistry: WebSocketRegistry) : WebSocketConfigurer {

    override fun registerWebSocketHandlers(registry: WebSocketHandlerRegistry) {
        registry.addHandler(webSocketRegistry, "sockets")
    }
}