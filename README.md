# PocketFlip

I'm testing tools which I'm looking forward to, [SolidJS](https://www.solidjs.com/) & [PocketBase](https://pocketbase.io/). This repo is what it is.

## About

PocketFlip is a study app. 

## Set up

Here is how to set up this project.

1. Download PocketBase from [pocketbase.io](https://pocketbase.io/docs/)
2. Then place a ```pocketbase``` into ```./backend``` folder.
3. Run ```./backend/pocketbase serve``` to run PocketBase server.
4. Go http://localhost:8090/_/#/settings/import-collections, click **Load from Json file**, and open **./backend/collection.json** to import collections.
5. Run ```pnpm install``` to  install dependencies
6. Run ```pnpm dev``` to start server.

## Commands

Here is a few important commands for this project.

```bash
# install dependencies
pnpm i

# run develop server
pnpm dev

# test most of files using ESLint

pnpm lint

# format most of files using Prettier
pnpm format

# run PocketBase server
./backend/pocketbase serve
```

## Check Lists

- [x] make simple auth
- [ ] make components of button, switch, navbar from scratch
- [ ] make setting menu about user
- [ ] 