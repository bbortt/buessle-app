package io.github.bbortt.buessle.domain.repository;

import io.github.bbortt.buessle.graph.types.Board;
import java.util.Optional;
import java.util.UUID;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class BoardCRUDRepositoryImpl implements BoardCRUDRepository {

  private static final String KEY = "Board";

  private final HashOperations<String, String, Board> hashOperations;

  public BoardCRUDRepositoryImpl(RedisTemplate<String, Object> redisTemplate) {
    this.hashOperations = redisTemplate.opsForHash();
  }

  @Override
  public Board save(Board board) {
    hashOperations.put(KEY, board.getUuid().toString(), board);
    return board;
  }

  @Override
  public Optional<Board> findByUUID(UUID uuid) {
    return Optional.ofNullable(hashOperations.get(KEY, uuid.toString()));
  }
}
