package io.github.bbortt.buessle.graph;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsData;
import com.netflix.graphql.dgs.InputArgument;
import io.github.bbortt.buessle.domain.Board;
import java.util.Optional;
import java.util.UUID;

@DgsComponent
public class BoardDatafetcher {

  @DgsData(parentType = "Query", field = "boardByUUID")
  public Optional<Board> shows(@InputArgument("uuid") UUID uuid) {
    return Optional.of(new Board());
  }
}
