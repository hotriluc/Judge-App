# Dockerfile.rails
FROM ruby:3.1.2
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client

# Default directory
ENV INSTALL_PATH /opt/app/judge-server
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH

# Copy gemfile and lock file
COPY Gemfile $INSTALL_PATH/Gemfile
COPY Gemfile.lock $INSTALL_PATH/Gemfile.lock

# Install dependencies
RUN gem update bundler
RUN bundle install

# Prevents the server from restarting when a certain server.pid file pre-exists
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

COPY . $INSTALL_PATH

EXPOSE 3000

#CMD rails server -b 0.0.0.0
CMD ["rails", "server", "-b", "0.0.0.0"]