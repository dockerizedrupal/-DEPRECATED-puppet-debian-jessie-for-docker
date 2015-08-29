# docker-puppet-debian-jessie

## Build the image

    TMP="$(mktemp -d)" \
      && git clone https://github.com/dockerizedrupal/docker-puppet-debian-jessie.git "${TMP}" \
      && cd "${TMP}" \
      && sudo docker build -t dockerizedrupal/puppet-debian-jessie:latest . \
      && cd -

## License

**MIT**
