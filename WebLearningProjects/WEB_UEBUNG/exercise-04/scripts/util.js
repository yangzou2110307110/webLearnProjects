function calculateUID() {
    return Math.floor(Math.random() * Date.now())
}

function timestampToString(timestamp) {
    const d = new Date(timestamp);
    // return d.toDateString() + " " + d.toTimeString();
    return `${d.toDateString()} ${d.toTimeString()}`;
}