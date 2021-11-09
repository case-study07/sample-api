include .env

help:
	@echo ""
	@echo "usage: make COMMAND"
	@echo ""
	@echo "Commands:"
	@echo "  build             yarn install && docker build --no-cache"
	@echo "  run               docker run"
	@echo "  exec              docker exec"
	@echo "  logs              docker logs"
	@echo "  flogs             docker -f logs"
	@echo "  kill              docker rm"
	@echo "  restart           docker rm && run"
	@echo "  add.dev package=  yarn add -D"
	@echo "  add package=      yarn add"
	@echo "  typeorm.init      typeorm init --database mysql"
	@echo "  typeorm.migration typeorm migration:run"

## Docker Operation
build:
	@docker compose --env-file .env build --no-cache

up:
	@docker compose --env-file .env up -d

exec:
	@docker container exec -it ${IW_NODE_IMAGE} bash

logs:
	@docker container logs ${IW_NODE_IMAGE}

flogs:
	@docker container logs -f ${IW_NODE_IMAGE}

down:
	@docker compose --env-file .env down

restart:
	@docker compose --env-file .env restart

## Yarn Package Operation
add.dev:
	@docker container exec -it ${IW_NODE_IMAGE} bash -c "yarn add -D ${package}"

add:
	@docker container exec -it ${IW_NODE_IMAGE} add ${package}

## TypeORM Operation
typeorm.init:
	@docker container exec -it ${IW_NODE_IMAGE} bash -c "yarn typeorm init --database mysql"
	@docker container exec -it ${IW_NODE_IMAGE} bash -c "yarn install"

typeorm.migration:
	@docker container exec -it ${IW_NODE_IMAGE} bash -c "yarn typeorm migration:run"