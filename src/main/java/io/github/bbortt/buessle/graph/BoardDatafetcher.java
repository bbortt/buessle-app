package io.github.bbortt.buessle.graph;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsData;
import com.netflix.graphql.dgs.InputArgument;
import io.github.bbortt.buessle.domain.repository.BoardCRUDRepository;
import io.github.bbortt.buessle.graph.DgsConstants.MUTATION;
import io.github.bbortt.buessle.graph.DgsConstants.QUERY;
import io.github.bbortt.buessle.graph.types.Board;
import io.github.bbortt.buessle.graph.types.Player;
import io.github.bbortt.buessle.util.BuessleSessionContext;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;

@DgsComponent
public class BoardDatafetcher {

  private final BoardCRUDRepository boardRepository;
  private final BuessleSessionContext buessleSessionContext;

  public BoardDatafetcher(BoardCRUDRepository boardRepository,
    BuessleSessionContext buessleSessionContext) {
    this.boardRepository = boardRepository;
    this.buessleSessionContext = buessleSessionContext;
  }

  @DgsData(parentType = QUERY.TYPE_NAME, field = QUERY.BoardByUUID)
  public Optional<Board> boardByUUID(@InputArgument("uuid") UUID uuid) {
    return boardRepository.findByUUID(uuid);
  }

  @DgsData(parentType = MUTATION.TYPE_NAME, field = MUTATION.CreateBoard)
  public Board createBoard(@InputArgument("name") String name) {
    Board board = Board.newBuilder()
      .uuid(UUID.randomUUID().toString())
      .name(name)
      .build();

    return boardRepository.save(board);
  }

  @DgsData(parentType = MUTATION.TYPE_NAME, field = MUTATION.JoinBoard)
  public Board joinBoard(@InputArgument("uuid") UUID uuid) throws NotFoundException {
    Board board = boardByUUID(uuid)
      .orElseThrow(NotFoundException::new);

    Player player = buessleSessionContext.getPlayer()
      .orElseThrow(IllegalAccessError::new);

    List<Player> players = Optional.ofNullable(board.getPlayers())
      .orElse(new ArrayList<>());
    players.add(player);

    board.setPlayers(players);
    return boardRepository.save(board);
  }
}
