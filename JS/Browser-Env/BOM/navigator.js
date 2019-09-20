console.log(window.navigator);

console.log(navigator);


console.log(navigator.userAgent);


console.log(navigator.geolocation);


navigator.geolocation.getCurrentPosition((d) => {
    console.log(d)
});