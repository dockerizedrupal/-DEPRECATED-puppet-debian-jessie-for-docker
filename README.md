# docker-puppet-debian-jessie

An intermediate base Docker image for [dockerizedrupal/supervisor-debian-jessie](https://github.com/dockerizedrupal/docker-supervisor-debian-jessie).

This project is part of the [Dockerized Drupal](https://dockerizedrupal.com/) initiative.

## Run the container

    CONTAINER="puppet" && sudo docker run \
      --name "${CONTAINER}" \
      -h "${CONTAINER}" \
      dockerizedrupal/puppet-debian-jessie:1.1.0

## Build the image

    TMP="$(mktemp -d)" \
      && git clone https://github.com/dockerizedrupal/docker-puppet-debian-jessie.git "${TMP}" \
      && cd "${TMP}" \
      && git checkout 1.1.0 \
      && sudo docker build -t dockerizedrupal/puppet-debian-jessie:1.1.0 . \
      && cd -

## License

**MIT**
