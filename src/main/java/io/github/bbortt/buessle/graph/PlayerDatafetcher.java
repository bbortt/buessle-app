package io.github.bbortt.buessle.graph;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsData;
import com.netflix.graphql.dgs.InputArgument;
import io.github.bbortt.buessle.graph.DgsConstants.MUTATION;
import io.github.bbortt.buessle.graph.types.Player;
import io.github.bbortt.buessle.util.BuessleSessionContext;

@DgsComponent
public class PlayerDatafetcher {

  private final BuessleSessionContext buessleSessionContext;

  public PlayerDatafetcher(BuessleSessionContext buessleSessionContext) {
    this.buessleSessionContext = buessleSessionContext;
  }

  @DgsData(parentType = MUTATION.TYPE_NAME, field = MUTATION.RegisterPlayer)
  public Player registerPlayer(@InputArgument("name") String name) {
    Player player = new Player(name);
    buessleSessionContext.setPlayer(player);
    return player;
  }
}
