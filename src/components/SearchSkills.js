import React from 'react';
import { Paper, FormControl, InputLabel, Input, InputAdornment, IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';

const styles = {
  paper: {
    marginBottom: "1em"
  },
  form: {
    marginBottom: "1em"
  }
}

export default class SearchSkills extends React.Component {
  render() {
    return (
      <Paper className="paper" style={styles.paper}>
        <h1>Gymnastics Browser</h1>
        <FormControl className="searchForm" style={styles.form}>
          <InputLabel htmlFor="skillSearch" >Search...</InputLabel>
          <Input id="skillSearch"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="search"
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            }
          ></Input>
        </FormControl>
      </Paper>
    )
  }
}