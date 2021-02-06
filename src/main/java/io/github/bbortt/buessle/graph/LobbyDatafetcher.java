package io.github.bbortt.buessle.graph;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsData;
import com.netflix.graphql.dgs.InputArgument;
import io.github.bbortt.buessle.graph.DgsConstants.SUBSCRIPTION;
import io.github.bbortt.buessle.graph.types.Action;
import java.time.Duration;
import java.util.UUID;
import org.reactivestreams.Publisher;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import reactor.core.publisher.Flux;

@DgsComponent
public class LobbyDatafetcher {

  private static final Logger LOGGER = LoggerFactory.getLogger(LobbyDatafetcher.class);

  @DgsData(parentType = SUBSCRIPTION.TYPE_NAME, field = SUBSCRIPTION.LobbyAction)
  public Publisher<Action> stocks(@InputArgument("uuid") UUID uuid) {
    LOGGER.info("Subscribe to lobby actions by uuid: {}", uuid);

    return Flux.just(new Action("a","b"));
  }
}
