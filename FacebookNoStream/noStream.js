function removeStream() {
    var stream = document.getElementById("stream_pagelet");
    if(stream) {
        stream.parentElement.removeChild(stream);
    }
}

removeStream();

setInterval(function(){removeStream()},1000);