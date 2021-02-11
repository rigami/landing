const HtmlToReactParser = require('html-to-react').Parser;

const htmlToReactParser = new HtmlToReactParser();

function HTML({ children }) {
    return htmlToReactParser.parse(children);
}

export default HTML;
