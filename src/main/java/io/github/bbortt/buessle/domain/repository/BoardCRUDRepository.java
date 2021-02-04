package io.github.bbortt.buessle.domain.repository;

import io.github.bbortt.buessle.graph.types.Board;
import java.util.Optional;
import java.util.UUID;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

public interface BoardCRUDRepository {

  Board save(Board board);
  Optional<Board> findByUuid(UUID uuid);
}
