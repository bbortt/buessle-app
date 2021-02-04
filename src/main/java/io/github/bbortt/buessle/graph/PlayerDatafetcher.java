package io.github.bbortt.buessle.graph;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsData;
import com.netflix.graphql.dgs.InputArgument;
import io.github.bbortt.buessle.graph.DgsConstants.MUTATION;
import io.github.bbortt.buessle.graph.types.Player;
import io.github.bbortt.buessle.util.BuessleSessionContext;
import java.util.UUID;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@DgsComponent
public class PlayerDatafetcher {

  private static final Logger LOGGER = LoggerFactory.getLogger(PlayerDatafetcher.class);

  private final BuessleSessionContext buessleSessionContext;

  public PlayerDatafetcher(BuessleSessionContext buessleSessionContext) {
    this.buessleSessionContext = buessleSessionContext;
  }

  @DgsData(parentType = MUTATION.TYPE_NAME, field = MUTATION.RegisterPlayer)
  public Player registerPlayer(@InputArgument("name") String name) {
    LOGGER.info("Register new player: {}", name);

    Player player = Player.newBuilder()
      .uuid(UUID.randomUUID().toString())
      .name(name)
      .build();

    buessleSessionContext.setPlayer(player);
    return player;
  }
}
