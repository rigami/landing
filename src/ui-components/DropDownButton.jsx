import React, { useRef, useState } from 'react';
import {
    Button,
    Link,
    MenuItem,
    Box,
    Card,
    Collapse,
    ClickAwayListener,
    IconButton, ListSubheader,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 64,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
    },
    link: { whiteSpace: 'normal' },
    menuWrapper: {
        position: 'absolute',
        height: 0,
        bottom: theme.spacing(-1),
        left: 0,
        [theme.breakpoints.down('xs')]: {
            position: 'fixed',
            left: theme.spacing(1),
            right: theme.spacing(1),
        },
    },
    menu: {
        maxWidth: 300,
        width: 'max-content',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        [theme.breakpoints.down('xs')]: {
            maxWidth: 'none',
            width: '100%',
        },
    },
}));

function LinkDropDownItem({ title, href, target, handleClose }) {
    const classes = useStyles();

    return (
        <MenuItem
            component={Link}
            href={href}
            target={target}
            color="textPrimary"
            className={classes.link}
            onClick={handleClose}
        >
            {title}
        </MenuItem>
    );
}

function DropDownButton({
    isSmall, icon, label, children, className: externalClassName,
}) {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const Content = children;

    return (
        <Box className={clsx(classes.root, externalClassName)}>
            {!isSmall && (
                <Button onClick={handleClick} ref={ref}>
                    {label}
                </Button>
            )}
            {isSmall && (
                <IconButton onClick={handleClick} ref={ref} size="small">
                    {icon}
                </IconButton>
            )}
            <Box className={classes.menuWrapper}>
                <Collapse in={isOpen}>
                    <ClickAwayListener
                        onClickAway={(e) => {
                            if (e.path.indexOf(ref.current) === -1) setIsOpen(false);
                        }}
                    >
                        <Card className={classes.menu} elevation={18} role="menu">
                            {isSmall && (
                                <ListSubheader>{label}</ListSubheader>
                            )}
                            {children && (<Content handleClose={handleClose} />)}
                        </Card>
                    </ClickAwayListener>
                </Collapse>
            </Box>
        </Box>
    );
}

export default DropDownButton;
export { LinkDropDownItem };
