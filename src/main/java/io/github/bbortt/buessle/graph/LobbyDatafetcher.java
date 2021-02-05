package io.github.bbortt.buessle.graph;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsData;
import io.github.bbortt.buessle.graph.DgsConstants.SUBSCRIPTION;
import io.github.bbortt.buessle.graph.types.Action;
import java.time.Duration;
import org.reactivestreams.Publisher;
import reactor.core.publisher.Flux;

@DgsComponent
public class LobbyDatafetcher {

  @DgsData(parentType = SUBSCRIPTION.TYPE_NAME, field = SUBSCRIPTION.LobbyAction)
  public Publisher<Action> stocks() {
    return Flux.interval(Duration.ofSeconds(1)).map(t -> new Action("a", "b"));
  }
}
