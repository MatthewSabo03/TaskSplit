const express = require("express");
const mysql = require("mysql2");


const app = express();
const ports = process.env.PORT || "3000";

const connection = require('./util/database');