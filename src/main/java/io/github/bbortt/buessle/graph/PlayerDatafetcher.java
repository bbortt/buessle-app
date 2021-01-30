package io.github.bbortt.buessle.graph;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsData;
import com.netflix.graphql.dgs.InputArgument;
import io.github.bbortt.buessle.graph.DgsConstants.MUTATION;
import io.github.bbortt.buessle.graph.types.Player;

@DgsComponent
public class PlayerDatafetcher {

  @DgsData(parentType = MUTATION.TYPE_NAME, field = MUTATION.RegisterPlayer)
  public Player registerPlayer(@InputArgument("name") String name) {
    return new Player(name);
  }
}
