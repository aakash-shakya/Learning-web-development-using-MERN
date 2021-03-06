import React from 'react';
import { Card, CardActions, Button, Typography, CardContent, CardMedia } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

import useStyles from './styles';

const Post = ({ post }) => {
    const classes = useStyles();
    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
                <div className={classes.overlay}>
                    <Typography variant='h6'>{ post.creator }</Typography>
                    <Typography variant='body2'>{ moment(post.createdAt).fromNow() }</Typography>
                </div>
                <div className={classes.overlay2}>
                    <Button style={{color:'white'}} size='small' onClick={()=>{}}>
                        <MoreHorizIcon/>
                    </Button>
                </div>
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{post.tags}</Typography>
                </div>
                <CardContent>
                    <Typography className={classes.title} variant='body2' gutterBottom>
                        {post.message}
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button color='primary' size='small' onClick={()=>{}}>
                        <ThumbUpAltIcon fontSize='small'>
                            Like{post.likeCount}
                        </ThumbUpAltIcon>
                    </Button>
                    <Button color='primary' size='small' onClick={()=>{}}>
                        <DeleteIcon fontSize='small'>
                            Delete
                        </DeleteIcon>
                    </Button>
                </CardActions>
        </Card>
    )
};


export default Post;