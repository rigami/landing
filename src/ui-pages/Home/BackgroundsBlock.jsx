import React, { useEffect, useState } from 'react';
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
import { last } from 'lodash';

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
    },
}));

const BG_TYPE = {
    IMAGE: 'IMAGE',
    ANIMATION: 'ANIMATION',
    VIDEO: 'VIDEO',
};

const backgrounds = [
    {
        src: 'awd',
        type: BG_TYPE.IMAGE,
    },
    {
        src: 'wegw',
        type: BG_TYPE.ANIMATION,
    },
    {
        src: 'ejegh',
        type: BG_TYPE.VIDEO,
    },
    {
        src: 'wegejegh',
        type: BG_TYPE.IMAGE,
    },
];

function BackgroundCard({ id, src, type }) {
    const classes = useStyles();

    return (
        <CardMedia
            id={id}
            className={classes.background}
        />
    );
}

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
                            store.list = [
                                ({
                                    ...backgrounds[0],
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
