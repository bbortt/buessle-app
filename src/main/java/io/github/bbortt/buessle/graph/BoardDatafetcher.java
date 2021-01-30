package io.github.bbortt.buessle.graph;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsData;
import com.netflix.graphql.dgs.InputArgument;
import io.github.bbortt.buessle.graph.DgsConstants.MUTATION;
import io.github.bbortt.buessle.graph.DgsConstants.QUERY;
import io.github.bbortt.buessle.graph.types.Board;
import java.util.Optional;
import java.util.UUID;

@DgsComponent
public class BoardDatafetcher {

  @DgsData(parentType = QUERY.TYPE_NAME, field =QUERY.BoardByUUID)
  public Optional<Board> boardByUUID(@InputArgument("uuid") UUID uuid) {
    return Optional.of(new Board(UUID.randomUUID().toString(),"existing board"));
  }

  @DgsData(parentType = MUTATION.TYPE_NAME, field=MUTATION.CreateBoard)
  public Board createBoard(@InputArgument("name")String name){
return new Board(UUID.randomUUID().toString(),name);
  }
}
