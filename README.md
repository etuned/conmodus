# <img src="https://raw.githubusercontent.com/etuned/conmodus/main/web/public/conmodus-logo.svg" alt="Logo" width="55" height="55" /> Conmodus - Open-Source Software

Naming is hard but Conmodus is Latin with the English meanings of useful, cozy, advantageous, of full measure, of full weight, and most importantly EASY. The intention behind this open-source software is to create a way for education to have a tool that can be used for free and help not only teachers deliver content to students but also allow students to have tools to assist them in their studies.

The point is that this software can be set up with ease, so costs can be kept to a minimum for any school board / educational institution to start using this product. This is the very beginning stages of this open source software. The current state is nowhere near ready for production, but if you are a developer and want to contribute to an open source software for education then I will be very happy for any help. It is very early so, please wait until the project is further along to start any contributions at this time. 

## How to use at this early stage.

Execute [Git Clone on the repo](https://github.com/etuned/conmodus) then use [npm](https://docs.npmjs.com/) and [Docker](https://www.docker.com/) with the steps below:

You will need the latest Node version, and Docker with Docker Compose to use locally.

Get the code:
```bash
git clone https://github.com/etuned/conmodus
```

Move to the code directory:
```bash
cd conmodus
```

Install command:
```bash
npm install
```

Hasura needs to be run manually currently, so run these commands:
```bash
cd hasura
docker-compose up -d
```

Currently the docker-compose file for Hasura needs manual setup which means the database needs to be built from scratch if this repo is cloned or forked. This will change as time progresses. The goal of this project is to make the setup process as smooth and easy to use as possible.

note: This is a monorepo, so there is no need to move to the web folder to run any commands.

Thanks for checking in on Conmodus!