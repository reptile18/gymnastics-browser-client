import React from 'react';
import SearchSkills from './components/SearchSkills';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    app: {
      backgroundColor: theme.palette.background,
      textAlign: "center"
    }
  })
);



function App() {
  const classes = useStyles();
  return (
    <div className={classes.app} >
      <SearchSkills />
    </div>
  );
}

export default App;
