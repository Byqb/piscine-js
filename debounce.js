function debounce(f, delay) {
    let timer = null;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            f.apply(context, args);
        }, delay);
    };
}
function opDebounce(f, delay, options) {
    var timer = null,
        first = true,
        leading;
    if (typeof options === 'object') {
        leading = !!options.leading;
    }
    return function () {
        let context = this,
            args = arguments;
        if (first && leading) {
            f.apply(context, args);
            first = false;
        }
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            f.apply(context, args);
        }, delay);
    };
}