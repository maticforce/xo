if(window.location.search) {
    let ref = parseInt(location.search.split('ref=')[1]);
    localStorage.setItem("sponsorId", ref);
    localStorage.setItem("preview", 'false');
}