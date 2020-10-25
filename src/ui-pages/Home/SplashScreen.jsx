import React, {
    useEffect,
    useState,
    Fragment,
    useRef,
} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Typography,
    Collapse,
    Container,
    Tooltip,
} from '@material-ui/core';
import LogoIcon from '@/resources/logo.svg';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { KeyboardArrowDownRounded as ArrowDownIcon, HomeRounded as HomeIcon } from '@material-ui/icons';
import useMainStateStore from '@/utils/mainStateStore';
import LangSwitcher from '@/ui-components/LangSwitcher';
import CardLink, { BKMS_VARIANT } from '@/ui-components/Card';
import yndxMscIcon from '@/resources/yndx_msc_icon.png';
import youtubeIcon from '@/resources/youtube_icon.png';
import elementaryPoster from '@/resources/elementary_poster.png';

console.log(yndxMscIcon);

const useStyles = makeStyles((theme) => ({
    description: {
        marginTop: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    secondHeaderWrapper: {
        height: '100vh',
        position: 'relative',
        width: '100%',
        zIndex: theme.zIndex.modal,
        overflow: 'hidden',
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
    },
    secondHeaderBlock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexShrink: 0,
        height: 115,
        bottom: 0,
        width: '100%',
        position: 'relative',
        margin: '0 auto',
        transition: 'opacity 0.3s ease 0s',
    },
    shadowHeader: { boxShadow: 'rgba(5, 5, 5, 0.06) 0px 2px 31px' },
    langSwitcher: {
        position: 'absolute',
        zIndex: theme.zIndex.modal,
        top: theme.spacing(2),
        right: theme.spacing(4),
    },
    leftBlock: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        maxWidth: 384,
        zIndex: 1,
        background: 'linear-gradient(to right, white 280px, transparent)',
        flexGrow: 1,
        height: '100%',
        justifyContent: 'center',
        paddingRight: 64,
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
        zIndex: 1,
        transition: theme.transitions.create(['opacity'], {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeInOut,
        }),
    },
    hide: { opacity: 0 },
    rightBlock: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    card: { position: 'absolute' },
    card1: {
        transform: 'translate(-40px, -220px)',
        boxShadow: theme.shadows[6],
    },
    card2: {
        transform: 'translate(90px, -100px)',
        boxShadow: theme.shadows[10],
    },
    card3: {
        transform: 'translate(-110px, 144px)',
        boxShadow: theme.shadows[12],
    },
    card4: {
        transform: 'translate(40px, -16px)',
        boxShadow: theme.shadows[18],
    },
    card5: {
        transform: 'translate(-100px, -80px)',
        boxShadow: theme.shadows[24],
    },
    designerLink: {
        display: 'flex',
        padding: theme.spacing(0.5, 0),
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        width: 'min-content',
        '& > *': { zIndex: 1 },
        '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: 0,
            zIndex: 0,
            backgroundColor: '#ceecfd',
            transition: theme.transitions.create(['width'], {
                duration: theme.transitions.duration.extra,
                easing: theme.transitions.easing.extraEaseInOut,
            }),
        },
        '&:hover::after': { width: `calc(100% + ${theme.spacing(10)}px)` },
    },
    linkWrapper: {
        '&:hover + $designedByLabel': { transform: `translateY(${theme.spacing(1)}px)` },
        '&:hover $openInNewIcon': { opacity: 1 },
        '&:hover $logoIcon': { transform: `translateX(${theme.spacing(7)}px)` },
    },
    openInNewIcon: {
        position: 'absolute',
        left: theme.spacing(2),
        color: fade(theme.palette.common.black, 0.4),
        pointerEvents: 'none',
        opacity: 0,
        transition: theme.transitions.create(['opacity'], {
            duration: theme.transitions.duration.extra,
            easing: theme.transitions.easing.extraEaseInOut,
        }),
    },
    logoIcon: {
        transition: theme.transitions.create(['transform'], {
            duration: theme.transitions.duration.extra,
            easing: theme.transitions.easing.extraEaseInOut,
        }),
    },
    designedByLabel: {
        transition: theme.transitions.create(['transform'], {
            duration: theme.transitions.duration.extra,
            easing: theme.transitions.easing.extraEaseInOut,
        }),
    },
}));

function SplashScreen({ shrink = false }) {
    const classes = useStyles();
    const { eventBus } = useMainStateStore();
    const { t } = useTranslation();
    const [shadowHeader, setShadowHeader] = useState(false);
    const [descriptionHide, setDescriptionHide] = useState(shrink || false);
    const secondHeaderRef = useRef(null);
    const secondHeaderWrapperRef = useRef(null);
    const secondHeaderStickyRef = useRef(null);
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);
    const card4Ref = useRef(null);
    const card5Ref = useRef(null);

    const scrollHandler = (offset = 0) => {
        if (typeof window === 'undefined') return;

        const computeScrollOffset = offset;
        const computeClientHeight = document.documentElement.clientHeight;
        const secondHeaderRefHeight = Math.max(computeClientHeight - computeScrollOffset, 115);

        secondHeaderRef.current.style.height = `${secondHeaderRefHeight}px`;

        if (computeScrollOffset > computeClientHeight - 115) {
            secondHeaderStickyRef.current.style.transform = `translateY(${
                computeScrollOffset - computeClientHeight + 115
            }px)`;
        } else {
            secondHeaderStickyRef.current.style.transform = 'translateY(0px)';
            card1Ref.current.style.transform = `translate(-40px, ${-220 - computeScrollOffset * 1.3}px)`;
            card2Ref.current.style.transform = `translate(90px, ${-100 - computeScrollOffset * 1.15}px)`;
            card4Ref.current.style.transform = `translate(40px, ${-16 - computeScrollOffset}px)`;
            card3Ref.current.style.transform = `translate(-110px, ${144 - computeScrollOffset * 0.85}px)`;
            card5Ref.current.style.transform = `translate(-100px, ${-80 - computeScrollOffset * 0.7}px)`;
        }

        setShadowHeader(computeScrollOffset > computeClientHeight - 115);
        setDescriptionHide(computeScrollOffset * 2 > computeClientHeight);
    };

    const resizeHandler = () => {
    };

    useEffect(() => {
        if (shrink) return;

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
            <Box
                className={classes.secondHeaderWrapper}
                ref={secondHeaderStickyRef}
                style={{ height: shrink && 115 }}
            >
                <Box className={classes.secondHeaderShadow} ref={secondHeaderWrapperRef}>
                    <Box className={clsx(classes.secondHeader, (shadowHeader || shrink) && classes.shadowHeader)}>
                        <Container
                            className={classes.secondHeaderBlock}
                            ref={secondHeaderRef}
                            style={{ height: shrink && 115 }}
                        >
                            <LangSwitcher className={classes.langSwitcher} />
                            <Box className={classes.leftBlock}>
                                {location.pathname !== '/' ? (
                                    <Tooltip
                                        title={t('splashScreen.linkHomeTooltip')}
                                        enterDelay={400}
                                        enterNextDelay={400}
                                    >
                                        <a href={location.origin} className={classes.linkWrapper}>
                                            <Box className={classes.designerLink}>
                                                <HomeIcon className={classes.openInNewIcon} />
                                                <LogoIcon width={180} height={45} className={classes.logoIcon} />
                                            </Box>
                                        </a>
                                    </Tooltip>
                                ) : (
                                    <LogoIcon width={180} height={45} className={classes.logoIcon} />
                                )}
                                <Collapse in={descriptionHide} className={classes.designedByLabel}>
                                    <Typography variant="h5">
                                        {t('comingSoon')}
                                        ... 🔥
                                    </Typography>
                                </Collapse>
                                <Collapse in={!descriptionHide}>
                                    <Typography variant="body1" className={classes.description}>
                                        {t('splashScreen.description')}
                                    </Typography>
                                </Collapse>
                            </Box>
                            {!shrink && (
                                <Box className={classes.rightBlock}>
                                    {/* https://music.yandex.ru/users/y79519420181/playlists/101 */}
                                    <CardLink
                                        ref={card1Ref}
                                        name="Основной плейлист"
                                        description="Плейлист на Яндекс Музыке"
                                        categories={[
                                            '#25A3E2',
                                            '#EA4A99',
                                            '#0000E4',
                                            '#EAC74A',
                                            '#ff8400',
                                        ]}
                                        icoVariant={BKMS_VARIANT.SMALL}
                                        imageUrl={yndxMscIcon}
                                        className={clsx(classes.card, classes.card1)}
                                    />
                                    {/* https://blog.elementary.io/updates-for-july-2020/ */}
                                    <CardLink
                                        ref={card2Ref}
                                        name="Let's Talk elementary OS 6 ⋅ elementary Blog"
                                        description="Updates for July, plus early access to the next major version"
                                        categories={['#EA4A99', '#25A3E2', '#EAC74A']}
                                        icoVariant={BKMS_VARIANT.POSTER}
                                        imageUrl={elementaryPoster}
                                        className={clsx(classes.card, classes.card2)}
                                    />
                                    {/* https://www.youtube.com/?gl=RU */}
                                    <CardLink
                                        ref={card3Ref}
                                        name="YouTube"
                                        categories={['#EA4A99', '#25A3E2', '#EAC74A']}
                                        icoVariant={BKMS_VARIANT.SMALL}
                                        imageUrl={youtubeIcon}
                                        className={clsx(classes.card, classes.card3)}
                                    />
                                    <CardLink
                                        ref={card4Ref}
                                        name="Work plan"
                                        description="- Do one thing first
- Do something else later
- Do something else in the end
- To complete
- Do one thing first
- Do something else later
- Do something else in the end
- To complete"
                                        categories={['#ff8400', '#0000E4']}
                                        icoVariant={BKMS_VARIANT.NOTE}
                                        className={clsx(classes.card, classes.card4)}
                                    />
                                    <CardLink
                                        ref={card5Ref}
                                        name="Danilkinkin"
                                        description="Hi, I’m Danil, I’m developing web applications, websites and other interestin..."
                                        categories={[
                                            '#ff8400',
                                            '#0000E4',
                                            '#25A3E2',
                                            '#EAC74A',
                                        ]}
                                        icoVariant={BKMS_VARIANT.SMALL}
                                        imageUrl=""
                                        className={clsx(classes.card, classes.card5)}
                                    />
                                </Box>
                            )}
                            <Box className={clsx(classes.arrowDownWrapper, descriptionHide && classes.hide)}>
                                <ArrowDownIcon className={classes.arrowDown} />
                            </Box>
                        </Container>
                    </Box>
                </Box>
            </Box>
        </Fragment>
    );
}

export default SplashScreen;
