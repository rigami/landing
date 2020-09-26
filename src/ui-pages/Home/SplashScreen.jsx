import React, {
    useEffect,
    useState,
    Fragment,
    useRef,
} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import LogoIcon from '@/resources/logo.svg';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import useMainStateStore from '../../utils/mainStateStore';
import LangSwitcher from '../../ui-components/LangSwitcher';

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
        marginTop: theme.spacing(3),
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
}));

function SplashScreen() {
    const classes = useStyles();
    const { eventBus } = useMainStateStore();
    const { t } = useTranslation();
    const [shadowHeader, setShadowHeader] = useState(false);
    const [secondHeaderHide, setSecondHeaderHide] = useState(false);
    // const mainHeaderRef = useRef(null);
    const secondHeaderRef = useRef(null);
    const secondHeaderWrapperRef = useRef(null);
    const secondHeaderStickyRef = useRef(null);

    const scrollHandler = (offset = 0) => {
        if (typeof window === 'undefined') return;

        const computeScrollOffset = offset;
        const computeClientHeight = document.documentElement.clientHeight;
        const secondHeaderRefHeight = Math.max(computeClientHeight - computeScrollOffset, 115);

        secondHeaderRef.current.style.height = `${secondHeaderRefHeight}px`;
        // secondHeaderWrapperRef.current.style.height = `${/* computeScrollOffset * 2.4*/ computeClientHeight * 0.7}px`;
        // mainHeaderRef.current.style.transform = `translateY(-${(computeScrollOffset / computeClientHeight) * 50}%)`;

        if (computeScrollOffset > computeClientHeight - 115) {
            secondHeaderStickyRef.current.style.transform = `translateY(${computeScrollOffset - computeClientHeight + 115}px)`;
        } else {
            secondHeaderStickyRef.current.style.transform = 'translateY(0px)';
        }

        setShadowHeader(computeScrollOffset > computeClientHeight - 115);
        setSecondHeaderHide(computeScrollOffset * 4 < computeClientHeight);
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
            {/* <Box
                className={classes.root}
                ref={mainHeaderRef}
            >
                <Box className={clsx(classes.block, classes.topBar)}>
                    <LangSwitcher />
                </Box>
                <Box className={clsx(classes.block)}>
                    <LogoIcon />
                    <Typography variant="body1" className={classes.description}>
                        {t('splashScreen.description')}
                    </Typography>
                </Box>
                <Box className={clsx(classes.block, classes.comingSoonBlock)}>
                    <Typography variant="h5">
                        {t('comingSoon')}
                        ... 🔥
                    </Typography>
                </Box>
                <Box className={clsx(classes.block, classes.cardsBlock)}>
                    <Cards />
                </Box>
            </Box> */}
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
                            <LogoIcon width={180} height={45} />
                            <Typography variant="h5">
                                {t('comingSoon')}
                                ... 🔥
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Fragment>
    );
}

export default SplashScreen;
