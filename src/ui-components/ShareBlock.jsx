import React from 'react';
import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
    VKIcon,
    FacebookIcon,
    OKIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    TelegramIcon,
    WhatsappIcon,
    TumblrIcon,
    EmailIcon,
    RedditIcon,
    LineIcon,
    ViberIcon,
    TwitterIcon,
    HatenaIcon,
    WorkplaceIcon,
    LivejournalIcon,
    LinkedinIcon,
    MailruIcon,
} from 'react-share';
import { Box, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    button: {
        display: 'inline-flex',
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1),
    },
    icon: { },
    rounded: {
        borderRadius: 4,
        marginTop: 0,
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1),
        overflow: 'hidden',
    },
}));

function Button(props) {
    const {
        button,
        icon,
        name,
        small,
        ...other
    } = props;
    const classes = useStyles();
    const ShareButton = button;
    const Icon = icon;

    return (
        <Tooltip title={name}>
            <ShareButton className={clsx(classes.button, small && classes.rounded)} {...other}>
                <Icon size={small ? 32 : 64} className={classes.icon} />
            </ShareButton>
        </Tooltip>
    );
}

function ShareBlock({ url, onlyMain = false, small = false }) {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            {[
                {
                    button: VKShareButton,
                    icon: VKIcon,
                    name: 'VK',
                },
                {
                    button: FacebookShareButton,
                    icon: FacebookIcon,
                    name: 'Facebook',
                },
                {
                    button: TelegramShareButton,
                    icon: TelegramIcon,
                    name: 'Telegram',
                },
                {
                    button: LineShareButton,
                    icon: LineIcon,
                    name: 'Line',
                },
                {
                    button: WhatsappShareButton,
                    icon: WhatsappIcon,
                    name: 'Whatsapp',
                },
                {
                    button: TwitterShareButton,
                    icon: TwitterIcon,
                    name: 'Twitter',
                },
                {
                    button: RedditShareButton,
                    icon: RedditIcon,
                    name: 'Reddit',
                },
                {
                    button: FacebookMessengerShareButton,
                    icon: FacebookMessengerIcon,
                    name: 'Facebook Messenger',
                },
                {
                    button: OKShareButton,
                    icon: OKIcon,
                    name: 'OK',
                },
                {
                    button: TumblrShareButton,
                    icon: TumblrIcon,
                    name: 'Tumblr',
                },
                {
                    button: ViberShareButton,
                    icon: ViberIcon,
                    name: 'Viber',
                },
                !onlyMain && {
                    button: HatenaShareButton,
                    icon: HatenaIcon,
                    name: 'Hatena',
                },
                !onlyMain && {
                    button: WorkplaceShareButton,
                    icon: WorkplaceIcon,
                    name: 'Workplace',
                },
                !onlyMain && {
                    button: LivejournalShareButton,
                    icon: LivejournalIcon,
                    name: 'Livejournal',
                },
                !onlyMain && {
                    button: LinkedinShareButton,
                    icon: LinkedinIcon,
                    name: 'Linkedin',
                },
                !onlyMain && {
                    button: MailruShareButton,
                    icon: MailruIcon,
                    name: 'Mailru',
                },
                !onlyMain && {
                    button: EmailShareButton,
                    icon: EmailIcon,
                    name: 'Email',
                },
            ].filter((isShow) => isShow).map((service) => (
                <Button
                    key={service.name}
                    url={url}
                    {...service}
                    small={small}
                />
            ))}
        </Box>
    );
}

export default ShareBlock;
