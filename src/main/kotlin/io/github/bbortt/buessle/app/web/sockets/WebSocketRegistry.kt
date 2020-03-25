package io.github.bbortt.buessle.app.web.sockets

import io.github.bbortt.buessle.app.config.getLogger
import org.springframework.stereotype.Component
import org.springframework.web.socket.CloseStatus
import org.springframework.web.socket.WebSocketHandler
import org.springframework.web.socket.WebSocketMessage
import org.springframework.web.socket.WebSocketSession
import java.io.IOException
import java.util.concurrent.ConcurrentHashMap
import javax.annotation.PreDestroy

/**
 * Main entry point for web socket connections.
 * Keeps track of all registered sessions.
 * Attempts to peacefully close all active sessions when server is shutdown.
 */
@Component
class WebSocketRegistry : WebSocketHandler, AutoCloseable {
    private val log = getLogger()
    private val sessions: MutableMap<String, WebSocketSession> = ConcurrentHashMap()

    override fun handleTransportError(session: WebSocketSession, exception: Throwable) {
        log.debug("Transport error for session:${session.id}, error was '$exception'")
        sessions.remove(session.id)
        session.catchingClose(CloseStatus.SERVER_ERROR)
    }

    override fun afterConnectionClosed(session: WebSocketSession, closeStatus: CloseStatus) {
        log.debug("Connection closed for session: ${session.id}, status was '${closeStatus.code}: ${closeStatus.reason}'")
        sessions.remove(session.id)
        session.catchingClose(CloseStatus.NORMAL)
    }

    override fun handleMessage(session: WebSocketSession, message: WebSocketMessage<*>) {
        log.debug("Handle message for session: ${session.id}")
        sessions.remove(session.id)
        session.catchingClose(CloseStatus.NOT_ACCEPTABLE)
    }

    override fun afterConnectionEstablished(session: WebSocketSession) {
        log.debug("Connection established for session: ${session.id}")
        sessions[session.id] = session
    }

    override fun supportsPartialMessages(): Boolean = false

    @PreDestroy
    override fun close() = synchronized(sessions) {
        val size = sessions.size
        log.info("Server is shutting down, need to close $size currently active sessions")
        val it = sessions.values.iterator()
        while (it.hasNext()) {
            it.next().catchingClose(CloseStatus.GOING_AWAY)
            it.remove()
        }
    }

    private fun WebSocketSession.catchingClose(status: CloseStatus) {
        try {
            close(status)
        } catch (e: IOException) {
            log.info("Unable to close session: $id, error was $e")
        }
    }
}