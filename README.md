# docker-puppet-debian-jessie

## Build the image

    TMP="$(mktemp -d)" \
      && git clone https://github.com/dockerizedrupal/docker-puppet-debian-jessie.git "${TMP}" \
      && cd "${TMP}" \
      && git checkout 1.0.5 \
      && sudo docker build -t dockerizedrupal/puppet-debian-jessie:1.0.5 . \
      && cd -

## License

**MIT**
