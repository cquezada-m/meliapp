app:
	docker-compose stop && docker-compose up

app-build:
	docker-compose build

app-bash:
	docker-compose run --rm api bash

app-bundle:
	docker-compose run --rm api bundle install

front-bash:
	docker-compose run --rm frontend sh

app-console:
	docker-compose run --rm api bin/rails console

test:
	docker-compose run --rm api bin/rails test