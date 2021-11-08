include .env

help:
	@echo ""
	@echo "usage: make COMMAND"
	@echo ""
	@echo "Commands:"
	@echo "  build            yarn install && docker build --no-cache"
	@echo "  run              docker run"
	@echo "  exec             docker exec"
	@echo "  logs             docker logs"
	@echo "  flogs            docker -f logs"
	@echo "  kill             docker rm"
	@echo "  restart          docker rm && run"
	@echo "  devadd package=  yarn add -D"
	@echo "  add package=     yarn add"
	@echo "  typeorm-init     typeorm init --database mysql"

## Docker Operation
build:
	@docker image build --target dev -t ${IW_NODE_IMAGE}:${VERSION} ./ --no-cache
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

kill:
	@docker container rm -f ${IW_NODE_IMAGE}

restart:
	@docker compose --env-file .env restart

## Yarn Package Operation
devadd:
	@docker container run --rm -v ${PWD}:/app ${IW_NODE_IMAGE}:${VERSION} add -D ${package}

add:
	@docker container run --rm -v ${PWD}:/app ${IW_NODE_IMAGE}:${VERSION} add ${package}

install:
	@docker container run --rm -v ${PWD}:/app ${IW_NODE_IMAGE}:${VERSION} install

## TypeORM Operation
typeorm-init:
	@docker container run --rm -v ${PWD}:/app ${IW_NODE_IMAGE}:${VERSION} typeorm init --database mysql
	@docker container run --rm -v ${PWD}:/app ${IW_NODE_IMAGE}:${VERSION} install

migration:
	@docker container run --rm -v ${PWD}:/app ${IW_NODE_IMAGE}:${VERSION} typeorm migration:run