package io.github.bbortt.buessle.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;

@EnableRedisHttpSession
public class RedisHttpSessionConfiguration {

  @Bean
  public LettuceConnectionFactory connectionFactory() {
    return new LettuceConnectionFactory();
  }

  @Bean
  public RedisTemplate <String,Object>redisTemplate() {
    RedisTemplate<String,Object> template = new RedisTemplate();
    template.setConnectionFactory(connectionFactory());
    return template;
  }
}
