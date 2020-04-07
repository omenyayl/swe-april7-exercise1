import React, {useState} from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Skeleton from '@material-ui/lab/Skeleton';
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const loadedContent = (
    <div style={{height: '10em'}}>
        <Typography color="textSecondary" gutterBottom>
            Lorem Ipsum
        </Typography>
        <Typography variant="body2" align={'left'} component="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Typography>
    </div>
);

const placeHolder = (
    <div style={{height: '10em'}}>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
    </div>
);

const DummyCard = ({delay}) => {
    const [shown, setShown] = useState(false);

    setTimeout(()=> {
        setShown(true);
    }, delay);

    return (
        <Card>
            <CardContent>
                {shown ? loadedContent : placeHolder}
            </CardContent>
        </Card>
    )
};

DummyCard.propTypes = {
    delay: PropTypes.number.isRequired
};

export default DummyCard;
