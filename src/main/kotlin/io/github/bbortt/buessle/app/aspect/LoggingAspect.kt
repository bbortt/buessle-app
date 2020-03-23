package io.github.bbortt.buessle.app.aspect

import org.aspectj.lang.JoinPoint
import org.aspectj.lang.annotation.AfterReturning
import org.aspectj.lang.annotation.AfterThrowing
import org.aspectj.lang.annotation.Aspect
import org.aspectj.lang.annotation.Before
import org.slf4j.Logger
import org.slf4j.LoggerFactory

@Aspect
class LoggingAspect {

    private val log: Logger = LoggerFactory.getLogger(this.javaClass)

    @Before("execution(* io.github.bbortt.buessle.app.web..*(..)))")
    fun beforeInvocationLogging(joinPoint: JoinPoint) {
        log.debug("API invocation on {}.{}() with args {}", joinPoint.signature.declaringTypeName,
                joinPoint.signature.name, joinPoint.args)
    }

    @AfterReturning(pointcut = "execution(* io.github.bbortt.buessle.app.web..*(..)))", returning = "result")
    fun afterInvocationLogging(joinPoint: JoinPoint, result: Any) {
        log.debug("Invocation result => {}", joinPoint.signature, result)
    }

    @AfterThrowing(pointcut = "execution(* io.github.bbortt.buessle.app.web..*(..)))", throwing = "exception")
    fun logAfterThrowing(joinPoint: JoinPoint, exception: Throwable) {
        log.error("Exception in {}.{}() with cause = {}", joinPoint.signature.declaringTypeName,
                joinPoint.signature.name, if (exception.cause != null) exception.cause else "NULL")
    }
}
