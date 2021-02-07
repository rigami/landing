import React, { useRef, useState } from 'react';
import {
    Button,
    Link,
    MenuItem,
    Box,
    Card,
    Collapse,
    ClickAwayListener,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import theme from '@/theme';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
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
    },
    menu: {
        maxWidth: 300,
        width: 'max-content',
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

function DropDownButton({ label, children, className: externalClassName }) {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();

    const handleClick = (event) => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const Content = children;

    return (
        <Box className={clsx(classes.root, externalClassName)}>
            <Button onClick={handleClick} ref={ref}>
                {label}
            </Button>
            <Box className={classes.menuWrapper}>
                <Collapse in={isOpen}>
                    <ClickAwayListener
                        onClickAway={(e) => {
                            if (e.path.indexOf(ref.current) === -1) setIsOpen(false);
                        }}
                    >
                        <Card className={classes.menu}>
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
