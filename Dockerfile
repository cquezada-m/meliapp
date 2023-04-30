# Wkhtmltopfd installation stage
FROM surnet/alpine-wkhtmltopdf:3.16.2-0.12.6-small as wkhtmltopdf_image

FROM ruby:3.1.1-alpine3.15

RUN apk update && \
    apk add --no-cache build-base \
    libstdc++ \
    libx11 \
    libxrender \
    libxext \
    libssl1.1 \
    ca-certificates \
    freetype \
    postgresql-dev \
    postgresql-client \
    py-pip \
    tzdata \
    imagemagick \
    bash \
    git \
    vim \
    curl \
    less \
    ttf-freefont \
    ttf-dejavu \
    ttf-droid \
    ttf-liberation \
    fontconfig \
    util-linux

RUN apk add --no-cache gcompat # fixes nokogiti M1 problem

ARG RAILS_ROOT=/app
RUN mkdir $RAILS_ROOT
WORKDIR $RAILS_ROOT

COPY Gemfile* /app/

RUN gem install bundler -v 2.4.4
RUN bundle install --jobs 3

RUN touch $HOME/.bashrc

RUN echo "alias ll='ls -alF'" >> $HOME/.bashrc
RUN echo "alias la='ls -A'" >> $HOME/.bashrc
RUN echo "alias l='ls -CF'" >> $HOME/.bashrc
RUN echo "alias q='exit'" >> $HOME/.bashrc
RUN echo "alias c='clear'" >> $HOME/.bashrc

COPY --from=wkhtmltopdf_image /bin/wkhtmltopdf /usr/local/bin/

EXPOSE 8080

CMD bash -c "bundle exec puma -C config/puma.rb"