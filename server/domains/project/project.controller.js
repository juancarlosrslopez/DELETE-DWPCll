// Actions methods
// GET "/project"
const dashboard = (req, res) => {
  res.send('⚠️ UNDER CONSTRUCTION: GET /project ⚠️');
};

// GET "/project/add"
const add = (req, res) => {
  res.render('project/addView');
};

// Controlador user
export default {
  // Action Methods
  dashboard,
  add,
};
