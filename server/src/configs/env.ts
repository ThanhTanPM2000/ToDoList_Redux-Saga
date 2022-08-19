import dotenv from "dotenv";
dotenv.config();

const parseString = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`${key} is not present`);
  }
  return value;
};

const parseNumber = (key: string): number => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`${key} is not present`);
  }
  const parsed = parseInt(value, 10);
  if (isNaN(parsed)) {
    throw new Error(`${key} should be a number`);
  }
  return parsed;
};

const parseBoolean = (key: string): boolean => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`${key} is not present`);
  }
  if (value === "TRUE" || value === "true") {
    return true;
  } else if (value === "FALSE" || value === "false") {
    return false;
  }
  throw new Error(`${key} should be TRUE or true or FALSE or false`);
};

export default {
  NODE_ENV: parseString("NODE_ENV"),
  SERVER_PORT: parseNumber("SERVER_PORT"),
  SERVER_URL: parseString("SERVER_URL"),
  CLIENT_URL: parseString("CLIENT_URL"),
  MONGODB_URL: parseString("MONGODB_URL"),
  JWT_KEY: parseString("JWT_KEY"),
};
