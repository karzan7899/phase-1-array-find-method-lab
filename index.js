
function superbowlWin(recc) {

    function check(element, index, array) {
        //if (element.result === "N/A") { return false; }
        if (element.result === "W") { return true; }
    }
    //  console.log((recc.find(check).year))
    return (recc.find(check).year)
}


