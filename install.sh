#!/bin/bash

echo "Installing dependencies..."
npm i express mongoose dotenv cors morgan multer bcrypt jsonwebtoken cookie-parser 
echo "Installing dev dependencies..."
npm i -D nodemon prettier eslint eslint-config-prettier eslint-plugin-prettier