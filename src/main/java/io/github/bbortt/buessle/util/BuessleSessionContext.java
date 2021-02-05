package io.github.bbortt.buessle.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.bbortt.buessle.graph.types.Player;
import java.util.Optional;
import javax.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.server.session.WebSessionStore;

@Component
public class BuessleSessionContext {

  private static final Logger LOGGER = LoggerFactory.getLogger(BuessleSessionContext.class);

  private static final String SESSION_PLAYER_ATTRIBUTE_NAME = "BuessleSessionContext:Player";

  private WebSessionStore redisSessionRepository;
  private final ObjectMapper objectMapper = new ObjectMapper();

  public Optional<Player> getPlayer() {
    HttpSession httpSession = get();

    LOGGER.debug("Looking for player in current session: {}", httpSession.getId());

    return Optional.of(httpSession.getAttribute(SESSION_PLAYER_ATTRIBUTE_NAME))
      .map(sessionPlayer -> {
        try {
          return objectMapper.readValue(sessionPlayer.toString(),Player.class);
        } catch (JsonProcessingException e) {
          throw new IllegalArgumentException(e);
        }
      })
      .map(player -> {
        if (LOGGER.isTraceEnabled()) {
          LOGGER.trace("Found player: {}", player);
        }

        return player;
      });
  }

  public void setPlayer(Player player) {
    HttpSession httpSession = get();

    if (LOGGER.isDebugEnabled()) {
      LOGGER.debug("Attach Player {} to session: {}", player, httpSession);
    }

    try {
      httpSession.setAttribute(SESSION_PLAYER_ATTRIBUTE_NAME, objectMapper.writeValueAsString(player));
    } catch (JsonProcessingException e) {
      throw new IllegalArgumentException(e);
    }
  }

  private HttpSession get() {
    return ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest().getSession();
  }
}
