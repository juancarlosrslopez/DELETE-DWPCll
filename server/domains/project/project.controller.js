// Actions methods
// GET "/project"
const addForm = (req, res) => {
  res.render('project/addView');
};

// GET "/project/add"
const add = (req, res) => {
  res.send('⚠️ UNDER CONSTRUCTION: GET /project ⚠️');
};

// Controlador user
export default {
  // Action Methods
  showDashboard: addForm,
  add,
};
