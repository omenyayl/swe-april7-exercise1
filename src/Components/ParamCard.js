import React, {useEffect, useState} from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Skeleton from '@material-ui/lab/Skeleton';
import {ECHO} from "../constants/API";
import fetchData from "../util/fetchData";

const placeHolder = (
    <div>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
    </div>
);

const ParamCard = ({params}) => {
    const [loading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [content, setContent] = useState('');

    function startLoad(src) {
        fetchData(src, ECHO.method)
            .then(data => { setContent(JSON.stringify(data, null, 2)); })
            .catch(e => { setHasError(true); console.error(e); })
            .finally(() => { setLoading(false); })
    }

    useEffect(() => {
        const url = new URL('', ECHO.url);
        Object.keys(params).forEach(k => {
            url.searchParams.append(k, params[k])
        });
        const src = url.href;
        setLoading(true);
        setTimeout(() => {
            startLoad(src);
        }, 1000); // delay load for fun
    }, []);

    return (
        <Card style={{minHeight: '10em'}}>
            <CardContent >
                { loading ?
                    placeHolder :
                    <Typography variant="body2" align={'left'} component="p">
                        <pre style={{ fontFamily: 'inherit' }}>
                            {hasError ? 'A network error occurred when trying to retrieve content' : content}
                        </pre>
                    </Typography>
                }
            </CardContent>
        </Card>
    )
};

ParamCard.propTypes = {
    params: PropTypes.object.isRequired
};

export default ParamCard;
