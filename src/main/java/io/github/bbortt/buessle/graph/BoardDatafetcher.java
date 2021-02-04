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
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;

@DgsComponent
public class BoardDatafetcher {

  private static final Logger LOGGER = LoggerFactory.getLogger(BoardDatafetcher.class);

  private final BoardCRUDRepository boardRepository;
  private final BuessleSessionContext buessleSessionContext;

  public BoardDatafetcher(BoardCRUDRepository boardRepository,
    BuessleSessionContext buessleSessionContext) {
    this.boardRepository = boardRepository;
    this.buessleSessionContext = buessleSessionContext;
  }

  @DgsData(parentType = QUERY.TYPE_NAME, field = QUERY.Board)
  public Optional<Board> boardByUUID(@InputArgument("uuid") UUID uuid) {
    LOGGER.info("Looking for board by uuid: {}", uuid);

    return boardRepository.findByUuid(uuid);
  }

  @DgsData(parentType = MUTATION.TYPE_NAME, field = MUTATION.CreateBoard)
  public Board createBoard(@InputArgument("name") String name) {
    LOGGER.info("Create new board: {}", name);

    Board board = Board.newBuilder()
      .uuid(UUID.randomUUID().toString())
      .name(name)
      .build();

    return boardRepository.save(board);
  }

  @DgsData(parentType = MUTATION.TYPE_NAME, field = MUTATION.JoinBoard)
  public Board joinBoard(@InputArgument("uuid") UUID uuid) throws NotFoundException {
    LOGGER.info("Current player joins board: {}", uuid);

    Board board = boardByUUID(uuid)
      .orElseThrow(NotFoundException::new);

    Player player = buessleSessionContext.getPlayer()
      .orElseThrow(IllegalAccessError::new);

    List<String> playerUuids = Optional.ofNullable(board.getPlayerUuids())
      .orElse(new ArrayList<>());

    player.setBoardUuid(board.getUuid());
    playerUuids.add(player.getUuid());
    board.setPlayerUuids(playerUuids);

    board = boardRepository.save(board);
    buessleSessionContext.setPlayer(player);

    return board;
  }
}
