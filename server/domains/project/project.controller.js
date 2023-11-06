// Actions methods
// GET "/project"
const dashboard = (req, res) => {
  res.send('⚠️ UNDER CONSTRUCTION: GET /project ⚠️');
};

// GET "/project/add"
const add = (req, res) => {
  res.render('project/addView');
};

// POST "/project/add"
const addPost = (req, res) => {
  res.status(200).json(req.body);
};

// Controlador user
export default {
  // Action Methods
  dashboard,
  add,
  addPost,
};
