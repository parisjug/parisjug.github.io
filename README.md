# Paris JUG OBS static html overlays

Static web resources used from our OBS scenes when streaming our online events.

## Event Configuration

**All event configuration is centralized in a single file: [event.json](https://github.com/parisjug/parisjug.github.io/blob/gh-pages/event.json)**

The `event.json` file is the single source of truth for all event-related information and contains:
- **Event title**: The main event name
- **Talks**: Array of talks with title and speaker name
- **Speakers**: Detailed speaker information (name, title, contact, avatar)
- **Buffet sponsor**: Sponsor information including name, logo, and link

All pages that display event information automatically refresh every 10 seconds to pick up changes from `event.json`.

### Example event.json structure:
```json
{
    "event": "Event Title",
    "talks": [
        {
            "title": "Talk Title",
            "speaker": "Speaker Name"
        }
    ],
    "speakers": [
        {
            "name": "Speaker Name",
            "title": "Job Title",
            "contact": "@handle or contact",
            "avatar": "https://example.com/avatar.jpg"
        }
    ],
    "buffet": {
        "sponsor": "Sponsor Name",
        "logo": "https://example.com/logo.svg",
        "link": "https://example.com/sponsor-page"
    }
}
```

## Available Pages

- [https://parisjug.github.io/debug.html](https://parisjug.github.io/debug.html): just simple html with link

- [https://parisjug.github.io/loading.html](https://parisjug.github.io/loading.html): a waiting screen that displays the time left before live and nice random jokes/fortunes.

- [https://parisjug.github.io/break.html](https://parisjug.github.io/break.html): a break screen that displays the time remaining before the live resumes. It shows "C'EST LA PAUSE ! On reprend le live dans X minutes".

- [https://parisjug.github.io/event.html](https://parisjug.github.io/event.html): displays event information including event title, talk titles, and speaker names. The event details are coming from [event.json](https://github.com/parisjug/parisjug.github.io/blob/gh-pages/event.json). You can display specific sections using URL fragments:
  - `#event-title` - Shows only the event title
  - `#talk1-title` - Shows only the first talk title
  - `#talk2-title` - Shows only the second talk title
  - `#talk1-speaker` - Shows only the first speaker name
  - `#talk2-speaker` - Shows only the second speaker name

- [https://parisjug.github.io/speaker.html](https://parisjug.github.io/speaker.html): shows the speakers' name, picture and contact handle. The speaker details are coming from [event.json](https://github.com/parisjug/parisjug.github.io/blob/gh-pages/event.json). Can display several speaker by prefixing with #number. For instance [https://parisjug.github.io/speaker.html#2](https://parisjug.github.io/speaker.html#2)

- [https://parisjug.github.io/buffet-sponsor.html](https://parisjug.github.io/buffet-sponsor.html): displays the buffet sponsor information including the sponsor name and logo. The buffet details are coming from [event.json](https://github.com/parisjug/parisjug.github.io/blob/gh-pages/event.json). Can also fetch directly from a parisjug.org event page by adding `?eventUrl=https://www.parisjug.org/events/2026/01-13-parisjug-academy/` parameter.

## OBS Configuration Examples

These pages are designed to be used as Browser Sources in OBS Studio. Here are some example configurations:

### Event Title
```json
{
  "name": "Event title",
  "id": "browser_source",
  "settings": {
    "url": "https://parisjug.github.io/event.html#event-title",
    "width": 1500,
    "height": 100
  }
}
```

### Talk Titles
```json
{
  "name": "Talk-1-title",
  "id": "browser_source",
  "settings": {
    "url": "https://parisjug.github.io/event.html#talk1-title",
    "width": 1600,
    "height": 200,
    "css": "body { background-color: rgba(0, 0, 0, 0); margin: 0px auto; overflow: hidden; }"
  }
}
```

### Speaker Names
```json
{
  "name": "Speaker-1-firstname",
  "id": "browser_source",
  "settings": {
    "url": "https://parisjug.github.io/event.html#talk1-speaker",
    "width": 1500,
    "height": 100
  }
}
```

### Loading Page
```json
{
  "name": "Loading Page",
  "id": "browser_source",
  "settings": {
    "url": "https://parisjug.github.io/loading.html",
    "width": 1800,
    "height": 800
  }
}
```

### Break Screen
```json
{
  "name": "Waiting Break",
  "id": "browser_source",
  "settings": {
    "url": "https://parisjug.github.io/break.html",
    "width": 1800,
    "height": 800,
    "css": "body { background-color: rgba(0, 0, 0, 0); margin: 0px auto; overflow: hidden; }"
  }
}
```

### Speaker Bio
```json
{
  "name": "Speaker Bio",
  "id": "browser_source",
  "settings": {
    "url": "https://parisjug.github.io/speaker.html",
    "width": 500,
    "height": 600,
    "fps": 30,
    "fps_custom": true
  }
}
```

### Buffet Sponsor
```json
{
  "name": "Sponsor Buffet",
  "id": "browser_source",
  "settings": {
    "url": "https://parisjug.github.io/buffet-sponsor.html",
    "width": 600,
    "css": "body { background-color: rgba(0, 0, 0, 0); margin: 0px auto; overflow: hidden; }\n#buffet-section {\n    text-align: left;\n}"
  }
}
```

Contributions go there: [https://github.com/parisjug/parisjug.github.io](https://github.com/parisjug/parisjug.github.io).
The site is updated after about 10secs.

Forked from [PerfectSlayer/live-stream-question](https://github.com/PerfectSlayer/live-stream-question/)
