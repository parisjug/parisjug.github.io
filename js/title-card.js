/*
 * Builds a Paris JUG talk title card as a standalone SVG, from event.json.
 *
 * The geometry below was measured on the Google Slides exports used until now
 * (960x600 deck, exported at scale 1.8 => 1728x1080), so the generated cards
 * drop straight into an existing kdenlive timeline.
 *
 * Text is converted to outlines with opentype.js: the resulting SVG needs no
 * font installed and renders identically in kdenlive, Inkscape and browsers.
 */

const CARD = {
    // deck coordinate space, and the scale applied on export
    width: 960,
    height: 600,
    scale: 1.8,
    // black header bar
    barHeight: 43.74803,
    // horizontal centre used by every centred line
    centerX: 480,
    // "www.parisjug.org", right aligned inside the bar
    urlText: 'www.parisjug.org',
    urlRight: 950.86,
    urlBaseline: 32.37,
    urlSize: 21.9,
    // talk title: bottom anchored, lines stack upwards
    titleSize: 44.3,
    titleBaseline: 261,
    titleLeading: 58,
    titleMaxWidth: 801.6,
    // a very long title is shrunk rather than allowed to reach the header bar
    titleMinTop: 50,
    titleMinSize: 18,
    // event date
    dateSize: 25.7,
    dateBaseline: 328.88,
    dateColor: '#333333',
    // speaker name then contact handle
    speakerSize: 24.5,
    speakerBaseline: 400.52,
    speakerLeading: 32,
    // bottom logos
    logos: [
        { key: 'parisjugLogo', x: 49.086, y: 439.624, width: 265.941, height: 119.698 },
        { key: 'ccBadge', x: 838.396, y: 562.584, width: 62.999, height: 22.193 },
        { key: 'jugMark', x: 910.415, y: 553.867, width: 39.937, height: 39.628 }
    ]
};

const CARD_ASSETS = {
    font: 'fonts/Lato-Regular.ttf',
    images: {
        parisjugLogo: 'img/card/parisjug-logo.png',
        ccBadge: 'img/card/cc-by-nc-sa.png',
        jugMark: 'img/card/jug-mark.png'
    }
};

const FRENCH_DAYS = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
const FRENCH_MONTHS = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

/** "2026-06-09" -> "Mardi 09 Juin 2026". Anything unparseable is returned as is. */
function formatFrenchDate(isoDate) {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec((isoDate || '').trim());
    if (!match) {
        return (isoDate || '').trim();
    }
    const [, year, month, day] = match;
    const date = new Date(Date.UTC(+year, +month - 1, +day));
    return `${FRENCH_DAYS[date.getUTCDay()]} ${day} ${FRENCH_MONTHS[+month - 1]} ${year}`;
}

/** Greedy word wrap using the real advance widths of the font. */
function wrapText(font, text, fontSize, maxWidth) {
    const lines = [];
    let current = '';
    for (const word of text.split(/\s+/).filter(Boolean)) {
        const candidate = current ? `${current} ${word}` : word;
        if (current && font.getAdvanceWidth(candidate, fontSize) > maxWidth) {
            lines.push(current);
            current = word;
        } else {
            current = candidate;
        }
    }
    if (current) {
        lines.push(current);
    }
    return lines.length ? lines : [''];
}

/**
 * Wrap the title, shrinking the type only when the block would otherwise run
 * into the black header bar. Titles of up to four lines keep the nominal size.
 */
function layoutTitle(font, title) {
    for (let size = CARD.titleSize; size >= CARD.titleMinSize; size -= 0.5) {
        const lines = wrapText(font, title, size, CARD.titleMaxWidth);
        const leading = CARD.titleLeading * (size / CARD.titleSize);
        const topBaseline = CARD.titleBaseline - leading * (lines.length - 1);
        const widest = Math.max(...lines.map(line => font.getAdvanceWidth(line, size)));
        if (topBaseline - size * 0.8 >= CARD.titleMinTop && widest <= CARD.titleMaxWidth) {
            return { lines, size, leading };
        }
    }
    const size = CARD.titleMinSize;
    return {
        lines: wrapText(font, title, size, CARD.titleMaxWidth),
        size,
        leading: CARD.titleLeading * (size / CARD.titleSize)
    };
}

/** One <path> holding the outlines of a whole line of text. */
function textPath(font, text, fontSize, baseline, fill, anchor) {
    if (!text) {
        return '';
    }
    const advance = font.getAdvanceWidth(text, fontSize);
    const x = anchor.align === 'end' ? anchor.x - advance : anchor.x - advance / 2;
    const data = font.getPath(text, x, baseline, fontSize).toPathData(3);
    return data ? `  <path fill="${fill}" d="${data}"/>` : '';
}

/**
 * Build the SVG document for one talk.
 * talk: { title, speaker, contact }, dateText: already formatted,
 * images: { key -> data URI }, font: an opentype.js Font.
 */
function buildCardSvg(talk, dateText, font, images) {
    const exportWidth = CARD.width * CARD.scale;
    const exportHeight = CARD.height * CARD.scale;
    const title = layoutTitle(font, talk.title);
    const centered = { x: CARD.centerX, align: 'middle' };

    const parts = [
        `  <rect x="0" y="0" width="${CARD.width}" height="${CARD.height}" fill="#ffffff"/>`,
        `  <rect x="0" y="0" width="${CARD.width}" height="${CARD.barHeight}" fill="#000000"/>`,
        textPath(font, CARD.urlText, CARD.urlSize, CARD.urlBaseline, '#ffffff',
            { x: CARD.urlRight, align: 'end' })
    ];

    title.lines.forEach((line, index) => {
        const baseline = CARD.titleBaseline - title.leading * (title.lines.length - 1 - index);
        parts.push(textPath(font, line, title.size, baseline, '#000000', centered));
    });

    parts.push(textPath(font, dateText, CARD.dateSize, CARD.dateBaseline, CARD.dateColor, centered));
    parts.push(textPath(font, talk.speaker ? `par ${talk.speaker}` : '', CARD.speakerSize,
        CARD.speakerBaseline, '#000000', centered));
    parts.push(textPath(font, talk.contact || '', CARD.speakerSize,
        CARD.speakerBaseline + CARD.speakerLeading, '#000000', centered));

    for (const logo of CARD.logos) {
        const href = images[logo.key];
        if (href) {
            parts.push(`  <image x="${logo.x}" y="${logo.y}" width="${logo.width}" ` +
                `height="${logo.height}" xlink:href="${href}"/>`);
        }
    }

    return [
        '<?xml version="1.0" encoding="UTF-8" standalone="no"?>',
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"',
        `     version="1.1" width="${exportWidth}" height="${exportHeight}"`,
        `     viewBox="0 0 ${exportWidth} ${exportHeight}">`,
        `<g transform="scale(${CARD.scale})">`,
        ...parts.filter(Boolean),
        '</g>',
        '</svg>',
        ''
    ].join('\n');
}

/** Read the PNG logos once and keep them as data URIs, so each card is self-contained. */
async function loadCardImages() {
    const entries = await Promise.all(Object.entries(CARD_ASSETS.images).map(async ([key, url]) => {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`${url}: HTTP ${response.status}`);
        }
        const bytes = new Uint8Array(await response.arrayBuffer());
        let binary = '';
        for (let i = 0; i < bytes.length; i += 0x8000) {
            binary += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
        }
        return [key, `data:image/png;base64,${btoa(binary)}`];
    }));
    return Object.fromEntries(entries);
}

/** Turn event.json into the list of talks the cards are built from. */
function talksFromEvent(data) {
    const speakers = new Map((data.speakers || []).map(s => [s.name, s]));
    return (data.talks || []).map(talk => {
        const speaker = speakers.get(talk.speaker);
        return {
            title: talk.title || '',
            speaker: talk.speaker || '',
            contact: speaker ? (speaker.contact || '') : ''
        };
    });
}
