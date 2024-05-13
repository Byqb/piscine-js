function ionOut(str) {
    const pattern = /\b\w*?tion\w*\b/g;
    const matches = str.match(pattern);
    const result = matches ? matches.map(match => match.replace('ion', '')) : [];
    return result;
}