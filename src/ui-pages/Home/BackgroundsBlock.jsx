import React, { useEffect } from 'react';
import ContentCard from '@/ui-components/ContentCard';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia, List, useTheme } from '@material-ui/core';
import {
    GifRounded as GIFIcon,
    MovieRounded as VideoIcon,
    BookmarkRounded as ImageIcon,
    WifiTetheringRounded as StreamIcon,
} from '@material-ui/icons';
import SmallListItem from '@/ui-components/SmallListItem';
import { useResizeDetector } from 'react-resize-detector';
import { useLocalObservable, observer } from 'mobx-react';
import { action, runInAction } from 'mobx';
import { last, shuffle, sample } from 'lodash';
import bgPreviewPhoto1Src from '@/resources/bg-preview-3LTht2nxd34-unsplash.jpg';
import bgPreviewPhoto2Src from '@/resources/bg-preview-DFIl2Kw6ulw-unsplash.jpg';
import bgPreviewPhoto3Src from '@/resources/bg-preview-Ee0RQ_oC3BI-unsplash.jpg';
import bgPreviewPhoto4Src from '@/resources/bg-preview-nL1pAWmRFYU-unsplash.jpg';
import bgPreviewPhoto5Src from '@/resources/bg-preview-pb4HW4KghiM-unsplash.jpg';
import bgPreviewPhoto6Src from '@/resources/bg-preview-WajET_vzPmI-unsplash.jpg';
import bgPreviewVideo1Src from '@/resources/bg-preview-1182652-pexels.mp4';
import bgPreviewVideo2Src from '@/resources/bg-preview-3078336-pexels.mp4';
import bgPreviewVideo3Src from '@/resources/bg-preview-22555-pixabay.mp4';
import bgPreviewVideo4Src from '@/resources/bg-preview-31377-pixabay.mp4';
import bgPreviewGIF1Src from '@/resources/bg-preview-train-network.gif';
import bgPreviewGIF2Src from '@/resources/bg-preview-bathroom-network.gif';
import bgPreviewGIF3Src from '@/resources/bg-preview-station-network.gif';
import bgPreviewGIF4Src from '@/resources/bg-preview-fish-network.gif';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 612,
        paddingRight: 335 + theme.spacing(8),
    },
    title: { maxWidth: 480 },
    subtitle: { maxWidth: 480 },
    list: {
        marginTop: theme.spacing(4),
        maxWidth: 450,
    },
    background: {
        width: 335,
        height: 215,
        backgroundColor: theme.palette.background.default,
        position: 'absolute',
        right: theme.spacing(4),
        bottom: 0,
        objectFit: 'cover',
    },
    pixelRender: { imageRendering: 'pixelated' },
}));

const BG_TYPE = {
    IMAGE: 'IMAGE',
    ANIMATION: 'ANIMATION',
    VIDEO: 'VIDEO',
};

const backgrounds = shuffle([
    {
        src: bgPreviewPhoto1Src,
        type: BG_TYPE.IMAGE,
    },
    {
        src: bgPreviewPhoto2Src,
        type: BG_TYPE.IMAGE,
    },
    {
        src: bgPreviewPhoto3Src,
        type: BG_TYPE.IMAGE,
    },
    {
        src: bgPreviewPhoto4Src,
        type: BG_TYPE.IMAGE,
    },
    {
        src: bgPreviewPhoto5Src,
        type: BG_TYPE.IMAGE,
    },
    {
        src: bgPreviewPhoto6Src,
        type: BG_TYPE.IMAGE,
    },
    {
        src: bgPreviewVideo1Src,
        type: BG_TYPE.VIDEO,
    },
    {
        src: bgPreviewVideo2Src,
        type: BG_TYPE.VIDEO,
    },
    {
        src: bgPreviewVideo3Src,
        type: BG_TYPE.VIDEO,
    },
    {
        src: bgPreviewVideo4Src,
        type: BG_TYPE.VIDEO,
    },
    {
        src: bgPreviewGIF1Src,
        type: BG_TYPE.ANIMATION,
    },
    {
        src: bgPreviewGIF2Src,
        type: BG_TYPE.ANIMATION,
    },
    {
        src: bgPreviewGIF3Src,
        type: BG_TYPE.ANIMATION,
    },
    {
        src: bgPreviewGIF4Src,
        type: BG_TYPE.ANIMATION,
    },
]);

function BackgroundCard({ id, src, type }) {
    const classes = useStyles();

    return (
        <CardMedia
            id={id}
            className={clsx(
                type === BG_TYPE.ANIMATION && classes.pixelRender,
                classes.background,
            )}
            src={type === BG_TYPE.VIDEO ? src : undefined}
            image={type !== BG_TYPE.VIDEO ? src : undefined}
            component={type === BG_TYPE.VIDEO ? 'video' : 'div'}
            autoPlay
            loop
            muted
        />
    );
}

console.log('bgPreviewVideo1Src', bgPreviewVideo1Src);

function BackgroundsBlock({ className: externalClassname }) {
    const classes = useStyles();
    const theme = useTheme();
    const { height, ref } = useResizeDetector();
    const store = useLocalObservable(() => ({
        isAnimate: false,
        translateOffset: 0,
        list: [],
        oldTime: 0,
        rootHeight: height + theme.spacing(16),
    }));
    const cardHeight = theme.spacing(0.5) + 215;

    const animate = () => {
        const start = performance.now();
        store.oldTime = start;

        const frame = (time) => {
            const timeFraction = time - start;
            const delta = timeFraction - store.oldTime;

            runInAction(() => {
                store.oldTime = timeFraction;

                store.list.forEach(({ id, offset }, index) => {
                    const item = document.getElementById(id);

                    if (item) {
                        item.style.transform = `translateY(${offset}px)`;

                        if (index === 0 && offset <= cardHeight * 0.25) {
                            const filterList = backgrounds.filter(
                                ({ src: compareSrc }) => store.list.find(({ src }) => compareSrc !== src),
                            );

                            store.list = [
                                ({
                                    ...sample(filterList),
                                    offset: offset + cardHeight,
                                    id: `bg-${Math.random()}`,
                                }),
                                ...store.list,
                            ];
                        }

                        if (index === store.list.length - 1 && offset <= -store.rootHeight) {
                            store.list = store.list.slice(0, store.list.length - 1);
                        }
                    }
                });

                store.list = store.list.map(({ offset, ...props }) => ({
                    ...props,
                    offset: offset - delta * 0.01,
                }));
            });

            if (store.isAnimate) {
                requestAnimationFrame(frame);
            }
        };

        requestAnimationFrame(frame);
    };

    useEffect(() => {
        store.isAnimate = true;
        animate();

        return action(() => { store.isAnimate = false; });
    }, []);

    useEffect(() => {
        runInAction(() => {
            store.rootHeight = height + theme.spacing(16);
            const countBG = Math.ceil(store.rootHeight / cardHeight) + 1;

            if (store.list.length < countBG) {
                store.list = [
                    ...store.list,
                    ...Array.from({ length: countBG - store.list.length })
                        .map((item, index) => ({
                            ...backgrounds[index % backgrounds.length],
                            offset: (last(store.list)?.offset || cardHeight * 1.5) - cardHeight * (index + 1),
                            id: `bg-${Math.random()}`,
                        })),
                ];
            }

            if (store.list.length > countBG) {
                store.list = store.list.slice(0, countBG);
            }
        });
    }, [height]);

    return (
        <ContentCard
            ref={ref}
            classes={{
                root: clsx(classes.root, externalClassname),
                title: classes.title,
                subtitle: classes.subtitle,
            }}
            title="Любой формат фона"
            subtitle="Поддержка огромного количества файлов для фона, а так же настраиваемые потоки фонов."
        >
            <List dense className={classes.list} disablePadding>
                <SmallListItem icon={(<GIFIcon />)} title="GIF-анимация" />
                <SmallListItem icon={(<VideoIcon />)} title="Видео" />
                <SmallListItem icon={(<ImageIcon />)} title="Изображения " />
            </List>
            <List dense className={classes.list} disablePadding>
                <SmallListItem
                    icon={(<StreamIcon />)}
                    title="Потоки бесконечных фонов"
                    subtitle="Можно использовать заготовленные потоки, либо создавать свои по ключевым словам"
                />
            </List>
            {store.list.map(({ id, src, type }) => (
                <BackgroundCard
                    key={id}
                    src={src}
                    type={type}
                    id={id}
                />
            ))}
        </ContentCard>
    );
}

export default observer(BackgroundsBlock);
