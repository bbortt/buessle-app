package io.github.bbortt.buessle.graph;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsData;
import io.github.bbortt.buessle.domain.Hello;

@DgsComponent
public class HelloDatafetcher {

  @DgsData(parentType = "Query", field = "hello")
  public Hello hello() {
    return new Hello("my little world");
  }
}
