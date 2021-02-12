![Logo](docs/readme-header.png)

Landing pages for rigami project

## Development

Subset fonts
The tool is used for trimming [fonttools (pyftsubset)](https://github.com/fonttools/fonttools)
```bash
$ cd ./src/fonts
$ nano codes.txt # Added glyphs
$ pyftsubset NotoColorEmoji.ttf --output-file=NotoColorEmoji--subset.ttf --unicodes-file=codes.txt
```

## Build and start
```bash
$ docker-compose up -d --build
```
