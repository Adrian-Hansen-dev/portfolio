# Stage 1: Build the application
FROM eclipse-temurin:21-jdk AS build
WORKDIR /app

COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

RUN ./mvnw dependency:go-offline -B

COPY src src
RUN ./mvnw clean package -DskipTests -Pprod

# Stage 2: Create the final production image
FROM eclipse-temurin:21-jre
VOLUME /tmp

RUN useradd -ms /bin/sh springuser
USER springuser

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]