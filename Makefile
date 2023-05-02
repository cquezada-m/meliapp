app-start:
	docker-compose stop && docker-compose up

app-build:
	docker-compose build

app-migrate:
	docker-compose run --rm api rails db:migrate

app-db-setup:
	docker-compose run --rm api rails db:create db:migrate
	
app-dummy-data:
	docker-compose run --rm api rake db:add_dummy_data

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