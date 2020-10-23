import React, {
    useEffect,
    useState,
    Fragment,
    useRef,
} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Collapse } from '@material-ui/core';
import LogoIcon from '@/resources/logo.svg';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { KeyboardArrowDownRounded as ArrowDownIcon } from '@material-ui/icons';
import useMainStateStore from '@/utils/mainStateStore';
import LangSwitcher from '@/ui-components/LangSwitcher';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    block: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        flexShrink: 1,
    },
    description: {
        marginTop: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    fixedBlock: { maxHeight: '15vh' },
    topBar: {
        margin: '0 auto',
        maxWidth: 1600,
        width: '100%',
        flexGrow: 0,
        padding: 16,
        alignItems: 'flex-end',
    },
    comingSoonBlock: { flexGrow: 0 },
    cardsBlock: {
        minHeight: '45vh',
        maxHeight: '50vh',
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'flex-start',
        paddingTop: 32,
    },
    secondHeaderWrapper: {
        height: '100vh',
        position: 'relative',
        width: '100%',
        zIndex: theme.zIndex.modal,
    },
    secondHeader: {
        height: '100%',
        width: '100%',
        // overflow: 'hidden',
        backgroundColor: '#FFF',
        display: 'flex',
        flexDirection: 'column-reverse',
        transition: 'box-shadow 0.3s ease 0s',
    },
    secondHeaderShadow: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        /* '&::after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            top: -48,
            height: 48,
            left: 0,
            background: 'linear-gradient(to top, #00000014, transparent)',
        }, */
    },
    secondHeaderBlock: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexShrink: 0,
        height: 115,
        bottom: 0,
        width: '100%',
        padding: theme.spacing(0, 4),
        maxWidth: 1600 + theme.spacing(8),
        position: 'relative',
        margin: '0 auto',
        transition: 'opacity 0.3s ease 0s',
    },
    shadowHeader: { boxShadow: 'rgba(5, 5, 5, 0.06) 0px 2px 31px' },
    secondHeaderHide: { opacity: 0 },
    langSwitcher: {
        position: 'absolute',
        zIndex: theme.zIndex.modal,
        top: theme.spacing(2),
        right: theme.spacing(4),
    },
    leftBlock: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 320,
    },
    arrowDown: {
        color: fade(theme.palette.common.black, 0.3),
        animation: `
            $arrowDownAnimationTransform 1.4s ${theme.transitions.easing.invertEaseInOut} infinite,
            $arrowDownAnimationOpacity 1.4s ease-in-out infinite
        `,
    },
    '@keyframes arrowDownAnimationTransform': {
        '0%': { transform: 'translateY(-24px)' },
        '100%': { transform: 'translateY(24px)' },
    },
    '@keyframes arrowDownAnimationOpacity': {
        '0%': { opacity: 0 },
        '50%': { opacity: 1 },
        '100%': { opacity: 0 },
    },
    arrowDownWrapper: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: theme.spacing(4),
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        transition: theme.transitions.create(['opacity'], {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeInOut,
        }),
    },
    hide: { opacity: 0 },
}));

function SplashScreen() {
    const classes = useStyles();
    const { eventBus } = useMainStateStore();
    const { t } = useTranslation();
    const [shadowHeader, setShadowHeader] = useState(false);
    const [descriptionHide, setDescriptionHide] = useState(false);
    const secondHeaderRef = useRef(null);
    const secondHeaderWrapperRef = useRef(null);
    const secondHeaderStickyRef = useRef(null);

    const scrollHandler = (offset = 0) => {
        if (typeof window === 'undefined') return;

        const computeScrollOffset = offset;
        const computeClientHeight = document.documentElement.clientHeight;
        const secondHeaderRefHeight = Math.max(computeClientHeight - computeScrollOffset, 115);

        secondHeaderRef.current.style.height = `${secondHeaderRefHeight}px`;

        if (computeScrollOffset > computeClientHeight - 115) {
            secondHeaderStickyRef.current.style.transform = `translateY(${computeScrollOffset - computeClientHeight + 115}px)`;
        } else {
            secondHeaderStickyRef.current.style.transform = 'translateY(0px)';
        }

        setShadowHeader(computeScrollOffset > computeClientHeight - 115);
        setDescriptionHide(computeScrollOffset * 2 > computeClientHeight);
    };

    const resizeHandler = () => {
        if (typeof window === 'undefined') return;
    };

    useEffect(() => {
        addEventListener('resize', resizeHandler, false);

        const listenId = eventBus.on('document.scroll', scrollHandler);

        scrollHandler();

        return () => {
            eventBus.removeListener(listenId);
            removeEventListener('resize', resizeHandler, false);
        };
    }, []);

    return (
        <Fragment>
            <Box className={classes.secondHeaderWrapper} ref={secondHeaderStickyRef}>
                <Box
                    className={classes.secondHeaderShadow}
                    ref={secondHeaderWrapperRef}
                >
                    <Box
                        className={clsx(
                            classes.secondHeader,
                            shadowHeader && classes.shadowHeader,
                        )}
                    >
                        <Box
                            className={clsx(
                                classes.secondHeaderBlock,
                                // secondHeaderHide && classes.secondHeaderHide,
                            )}
                            ref={secondHeaderRef}
                        >
                            <LangSwitcher className={classes.langSwitcher} />
                            <Box className={classes.leftBlock}>
                                <LogoIcon width={180} height={45} />
                                <Collapse in={!descriptionHide}>
                                    <Typography variant="body1" className={classes.description}>
                                        {t('splashScreen.description')}
                                    </Typography>
                                </Collapse>
                                <Collapse in={descriptionHide}>
                                    <Typography variant="h5">
                                        {t('comingSoon')}
                                        ... 🔥
                                    </Typography>
                                </Collapse>
                            </Box>
                            <Box className={clsx(classes.arrowDownWrapper, descriptionHide && classes.hide)}>
                                <ArrowDownIcon className={classes.arrowDown} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Fragment>
    );
}

export default SplashScreen;
