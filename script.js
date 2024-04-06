const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleMouseFollower(){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    });
}

circleMouseFollower();

// Update footer time
function updateTime() {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    document.getElementById('current-time').textContent = formattedTime;
}

// Update time initially and every second
updateTime(); // Update immediately
setInterval(updateTime, 1000); // Update every second
