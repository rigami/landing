import React, { useState } from 'react';
import { makeStyles , useTheme} from '@material-ui/core/styles';
import { Box, Container } from '@material-ui/core';
import CardLink, { BKMS_VARIANT } from "@/ui-components/Card";
import ReactResizeDetector from 'react-resize-detector';
import demoCards from "@/config/demoCards";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        transform: 'translate3d(0,0,0)',
        marginTop: 'auto',
        overflow: 'hidden',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        marginBottom: -64,
    },
    column: {

    },
}));

const maxColumnCalc = () => Math.min(
    Math.floor((document.getElementById('bookmarks-container').clientWidth + 16 - 48) / 196),
    8,
);

function Column () {

}

function Cards() {
    const theme = useTheme();
    const classes = useStyles();
    const [columnsCount, setColumnsCount] = useState(0);

    return (
        <Box className={classes.root} id="bookmarks-container">
            <Container className={classes.container} fixed style={{ maxWidth: columnsCount * 196 - 16 + 48 }}>
                {[...demoCards].splice(Math.round((8-columnsCount)/2), columnsCount).map((value, index, array) => (
                    <Box
                        className={classes.column}
                        style={{ marginRight: theme.spacing(array.length - 1 !== index ? 2 : 0) }}
                    >
                        {[...value].map(({ title, description, categories, type }) => (
                            <CardLink
                                name={title}
                                categories={categories}
                                icoVariant={type}
                                description={description}
                                imageUrl=""
                                style={{ marginBottom: theme.spacing(2) }}
                            />
                        ))}
                    </Box>
                ))}
            </Container>
            <ReactResizeDetector handleWidth onResize={() => setColumnsCount(maxColumnCalc())} />
        </Box>
    );
}

export default Cards;
