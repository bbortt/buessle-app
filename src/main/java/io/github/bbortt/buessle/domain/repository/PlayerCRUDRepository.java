package io.github.bbortt.buessle.domain.repository;

import io.github.bbortt.buessle.graph.types.Player;

public interface PlayerCRUDRepository {

  Player save(Player player);
}
