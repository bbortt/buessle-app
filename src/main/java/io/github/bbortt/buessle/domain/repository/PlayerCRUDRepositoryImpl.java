package io.github.bbortt.buessle.domain.repository;

import io.github.bbortt.buessle.graph.types.Player;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class PlayerCRUDRepositoryImpl implements PlayerCRUDRepository {

  private static final String KEY = "Player";

  private final HashOperations<String, String, io.github.bbortt.buessle.graph.types.Player> hashOperations;

  public PlayerCRUDRepositoryImpl(RedisTemplate<String, Object> redisTemplate) {
    this.hashOperations = redisTemplate.opsForHash();
  }

  @Override
  public Player save(Player player) {
    hashOperations.put(KEY, player.getUuid(), player);
    return player;
  }
}
