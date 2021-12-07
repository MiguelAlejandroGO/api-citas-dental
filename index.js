const express = require('express');
const cors = require('cors');
const app = express();
const corsOptions = {
  origin:'*',
  credentials:true,
  optionSuccessStatus:200,
};

app.use(cors(corsOptions));

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Routes
app.use(require('./routes/employees'));

// Starting the server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
