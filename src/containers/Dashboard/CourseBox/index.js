import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 200
  }
};

class CourseBox extends React.Component {
  render() {
    const { classes, title, description, id } = this.props;
    return (
      <div>
        <Card raised className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {title}
            </Typography>
            <Typography gutterBottom component="p">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to={`/courses/${id}`}>
              <Button size="small" color="primary">
                Read more
              </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    );
  }
}

CourseBox.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CourseBox);
