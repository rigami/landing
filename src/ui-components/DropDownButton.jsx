import React, { Fragment } from 'react';
import {
    Button,
    Link,
    Menu,
    MenuItem,
} from '@material-ui/core';

function LinkDropDownItem({ title, href, target, handleClose }) {
    return (
        <MenuItem
            component={Link}
            href={href}
            target={target}
            onClick={handleClose}
        >
            {title}
        </MenuItem>
    );
}

function DropDownButton({ label, children, className: externalClassName }) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const Content = children;

    return (
        <Fragment>
            <Button onClick={handleClick} className={externalClassName}>
                {label}
            </Button>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {children && (<Content handleClose={handleClose} />)}
            </Menu>
        </Fragment>
    );
}

export default DropDownButton;
export { LinkDropDownItem };
