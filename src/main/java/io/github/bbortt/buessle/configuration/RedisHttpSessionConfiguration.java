package io.github.bbortt.buessle.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.GenericJackson2JsonRedisSerializer;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;

@EnableRedisHttpSession
public class RedisHttpSessionConfiguration {

  private final String redisHost;
  private final int redisPort;

  public RedisHttpSessionConfiguration(@Value("${spring.redis.host:localhost}") String redisHost, @Value("${spring.redis.port:6379}") int redisPort) {
    this.redisHost = redisHost;
    this.redisPort = redisPort;
  }

  @Bean
  public LettuceConnectionFactory connectionFactory() {
    LettuceConnectionFactory lettuceConnectionFactory= new LettuceConnectionFactory(new RedisStandaloneConfiguration(redisHost, redisPort));
    lettuceConnectionFactory.afterPropertiesSet();
  return lettuceConnectionFactory;
  }

  @Bean
  public RedisTemplate<String, Object> redisTemplate(LettuceConnectionFactory connectionFactory) {
    RedisTemplate<String, Object> template = new RedisTemplate<>();
    template.setConnectionFactory(connectionFactory);
    template.setDefaultSerializer(new GenericJackson2JsonRedisSerializer());
    return template;
  }
}
