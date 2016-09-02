> **Notice:** *This project is part of the [Dockerized Drupal](https://dockerizedrupal.com/) initiative.*

# docker-puppet-debian-jessie

A base Docker image for [dockerizedrupal/supervisor-debian-jessie](https://github.com/dockerizedrupal/docker-supervisor-debian-jessie).

## Run the container

    CONTAINER="puppet" && sudo docker run \
      --name "${CONTAINER}" \
      -h "${CONTAINER}" \
      dockerizedrupal/puppet-debian-jessie:1.1.1

## Build the image

    TMP="$(mktemp -d)" \
      && git clone https://github.com/dockerizedrupal/docker-puppet-debian-jessie.git "${TMP}" \
      && cd "${TMP}" \
      && git checkout 1.1.1 \
      && sudo docker build -t dockerizedrupal/puppet-debian-jessie:1.1.1 . \
      && cd -

## License

**MIT**
