# CaseStudy

## 前提条件

必要なツール

- [Git](https://git-scm.com/downloads)
- [Docker](https://docs.docker.com/engine/installation/)
- [yarn](https://yarnpkg.com/)

必要なコマンド

```sh
# 必要なツールが導入されているかの確認
## Docker
which docker
## make
which make
## yarn
which yarn
```

## env ファイル

### ポート番号

CONTAINER_POST → Node で動作するポート番号  
HOST_PORT → ブラウザで動作するポート番号

### イメージ

IW_NODE_IMAGE → Docker イメージ・コンテナ名  
VERSION → Docker イメージのバージョン

## Makefile

| Name            | Description                             |
| --------------- | --------------------------------------- |
| build           | docker build --no-cache                 |
| install         | yarn install && docker build --no-cache |
| run             | docker run                              |
| exec            | docker exec                             |
| logs            | docker logs                             |
| flogs           | docker -f logs                          |
| kill            | docker rm -f                            |
| restart         | docker rm -f && docker run              |
| tsc-init        | tsc --init                              |
| devadd package= | yarn add -D                             |
| add package     | yarn add                                |
| typeorm-init    | typeorm --init                          |

### show help

```sh
make
```

## How to Use

```sh
make build
## up
make up
## log watch
make flogs
```
