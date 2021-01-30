package io.github.bbortt.buessle.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.bbortt.buessle.graph.types.Player;
import java.util.Optional;
import javax.servlet.http.HttpSession;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

@Component
public class BuessleSessionContext {

  private static final String SESSION_PLAYER_ATTRIBUTE_NAME = "BuessleSessionContext:Player";

  public Optional<Player> getPlayer() {
    return Optional.of(get().getAttribute(SESSION_PLAYER_ATTRIBUTE_NAME))
      .map(sessionPlayer -> new ObjectMapper().convertValue(sessionPlayer, Player.class));
  }

  public void setPlayer(Player player) {
    try {
      get().setAttribute(SESSION_PLAYER_ATTRIBUTE_NAME, new ObjectMapper().writeValueAsString(player));
    } catch (JsonProcessingException e) {
      throw new IllegalArgumentException(e);
    }
  }

  private HttpSession get() {
    return ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest().getSession();
  }
}
