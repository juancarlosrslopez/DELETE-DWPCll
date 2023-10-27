// Importando el Dotenv
import dotenv from 'dotenv';

// Invocación a la función config de
// la instancia dotenv
dotenv.config();

console.log(process.env.PORT);

// Creando objetos de configuración
const defaultConfig = {
  PORT: process.env.PORT || 3000,
  IP: process.env.IP || '0.0.0.0',
};

const devConfig = {
  MONGO_URL: process.env.DEV_DATABASE_URL,
};

const testConfig = {
  TEST_VALUE: 200,
};

const prodConfig = {
  MONGO_URL: process.env.PROD_DATABASE_URL,
};

// Creando una función selectora
function getEnvConfig(env) {
  switch (env) {
    case 'production':
      return prodConfig;
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return devConfig;
  }
}

// Exportsr el Objeto de configuración
export default {
  ...defaultConfig,
  ...getEnvConfig(process.env.NODE_ENV),
};
