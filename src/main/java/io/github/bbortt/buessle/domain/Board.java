package io.github.bbortt.buessle.domain;

import java.util.UUID;

public class Board {

  private final UUID uuid;

  public Board(){
    this.uuid = UUID.randomUUID();
  }

  public String getUuid() {
    return uuid.toString();
  }
}
