import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from '../helpers';

class SidebarItemComponent extends Component {
  render() {
    const {_index, _note, classes, selectedNoteIndex} = this.props;
    return (
      <div key={_index}>
        <ListItem
          className={classes.listItem}
          selected={selectedNoteIndex === _index}
          alignItems="flex-start"
        >
          <div
            className={classes.textSection}
            onClick={() => this.selectNote(_note, _index)}
          >
            <ListItemText
              primary={_note.title}
              secondary={removeHTMLTags(_note.body.substring(0,20)) + '...'}
            >
            </ListItemText>
          </div>
          <DeleteIcon
            className={classes.deleteIcon}
            onClick={() => this.deleteNote(_note)}
          ></DeleteIcon>
        </ListItem>
      </div>
    );
  }

  selectNote = (n, i) => {
    this.props.selectNote(n, i); // CALLING THE FUNCTION SENT AS PROPS
  }
  deleteNote = (note) => {
    if(window.confirm(`Are you sure you want to delete ${note.title}`)){
      this.props.deleteNote(note); // CALLING THE FUNCTION SENT AS PROPS
    }
  }
}

export default withStyles(styles)(SidebarItemComponent);