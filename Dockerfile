FROM openjdk:11-slim
MAINTAINER Timon Borter <bbortt.github.io>

CMD ["java", "-jar", "buessle-app.jar"]

RUN useradd -ms /bin/bash buessle

EXPOSE 8080
EXPOSE 8090

USER buessle
WORKDIR /home/buessle

ARG JAR_FILE
ADD build/libs/${JAR_FILE} ./buessle-app.jar
