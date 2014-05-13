function removeStream() {
    var stream = document.getElementById("stream_pagelet");
    if(stream) {
        stream.parentElement.removeChild(stream);
    }
}

function removeActivities() {
    var activities = document.getElementsByClassName("tickerActivityStories")[0];
    if(activities) {
        activities.parentElement.removeChild(activities);
    }
}

removeStream();
removeActivities();

setInterval(function(){removeStream()},1000);
setInterval(function(){removeActivities()},1000);