import React, { forwardRef } from 'react';
import {
    Card,
    Typography,
    Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Image from './Image';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 180,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'relative',
        border: 'none',
        '&:hover $menuIcon': {
            opacity: 1,
            pointerEvents: 'auto',
        },
    },
    icon: { margin: 'auto' },
    body: {
        width: '100%',
        padding: theme.spacing(1, 2),
        boxSizing: 'border-box',
    },
    categoriesWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    category: {
        width: theme.spacing(1),
        height: theme.spacing(1),
        borderRadius: theme.spacing(0.5),
        marginRight: theme.spacing(0.6),
        marginBottom: theme.spacing(0.5),
    },
    title: {
        display: '-webkit-box',
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': 2,
        overflow: 'hidden',
        lineHeight: 1.2,
        wordBreak: 'break-word',
    },
    banner: {
        width: '100%',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: theme.spacing(-1),
    },
    extendBanner: {
        width: '100%',
        height: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: theme.spacing(1),
    },
    description: {
        color: theme.palette.text.secondary,
        display: '-webkit-box',
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': 4,
        overflow: 'hidden',
        marginTop: theme.spacing(0.6),
        wordBreak: 'break-word',
        whiteSpace: 'break-spaces',
    },
    bigDescription: { '-webkit-line-clamp': 16 },
    menuIcon: {
        position: 'absolute',
        right: theme.spacing(0.5),
        top: theme.spacing(0.5),
        opacity: 0,
        pointerEvents: 'none',
    },
    borderIcon: { boxShadow: '0 0 0 1px #e0e0e0' },
}));

const BKMS_VARIANT = {
    SMALL: 'SMALL',
    POSTER: 'POSTER',
    SYMBOL: 'SYMBOL',
    NOTE: 'NOTE',
};

function CardLink(props, ref) {
    const {
        name = '',
        categories,
        icoVariant,
        description,
        imageUrl,
        className: externalClassName,
        ...other
    } = props;
    const classes = useStyles();

    return (
        <Card
            className={clsx(classes.root, externalClassName)}
            variant="outlined"
            {...other}
            ref={ref}
        >
            {icoVariant === BKMS_VARIANT.POSTER && (
                <Image variant={BKMS_VARIANT.POSTER} src={imageUrl} className={classes.extendBanner} />
            )}
            {icoVariant !== BKMS_VARIANT.POSTER && icoVariant !== BKMS_VARIANT.NOTE && (
                <Box className={classes.banner}>
                    <Image
                        variant={icoVariant}
                        src={imageUrl}
                        alternativeIcon={icoVariant === BKMS_VARIANT.SYMBOL ? name[0]?.toUpperCase() : undefined}
                        className={clsx(classes.icon, classes.borderIcon)}
                    />
                </Box>
            )}
            <div className={classes.body}>
                <div className={classes.categoriesWrapper}>
                    {categories && categories.map((color) => (
                        <div className={classes.category} style={{ backgroundColor: color }} />
                    ))}
                </div>
                <Typography className={classes.title}>{name}</Typography>
                {description && (
                    <Typography
                        variant="body2"
                        className={clsx(
                            classes.description,
                            icoVariant === BKMS_VARIANT.NOTE && classes.bigDescription,
                        )}
                    >
                        {description}
                    </Typography>
                )}
            </div>
        </Card>
    );
}

export default forwardRef((props, ref) => CardLink(props, ref));
export { BKMS_VARIANT };
