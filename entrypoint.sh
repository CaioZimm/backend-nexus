#!/bin/sh

if [ ! -f .env ]; then
  cp .env.example .env
  echo "Arquivo .env criado a partir de .env.example"
fi

npx sequelize db:migrate
npx sequelize db:seed:all

npm run dev