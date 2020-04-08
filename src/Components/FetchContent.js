import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import fetchData from '../util/fetchData';
import Typography from "@material-ui/core/Typography";

const FetchContent = ({src, method, onLoad}) => {


    const [hasError, setHasError] = useState(false);
    const [content, setContent] = useState('');

    useEffect(() => {
        console.log('Fetch Content');
        fetchData(src, method)
            .then(data => { setContent(JSON.stringify(data, null, 2)); if (onLoad) onLoad() })
            .catch(e => { setHasError(true); console.error(e); });
    }, []);

    return (
        <Typography variant="body2" align={'left'} component="p">
            {hasError ? 'A network error occurred when trying to retrieve content' : content}
        </Typography>
    )
};

FetchContent.propTypes = {
    src: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    onLoad: PropTypes.func
};

export default FetchContent;
