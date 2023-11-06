import * as Yup from 'yup';

// Crear un esquema de validación
const projectSchema = Yup.object().shape({
  name: Yup.string().required('Se requiere un nombre de proyecto'),
  description: Yup.string()
    .max(500, 'La descripción no debe tener mas de 500 caracteres')
    .required('Se requiere una descripción del proyecto'),
});

// Middleware de extración
const getProyect = (req) => {
  // Extrayendo datos de la petición
  const { name, description } = req.body;
  return {
    name,
    description,
  };
};

export default {
  projectSchema,
  getProyect,
};
