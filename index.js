
function superbowlWin(record) {

    // function check(element, index, array) {
    //     // if (element.result === "N/A") { return false; }
    //     if (element.result === "W") { return (element.year); }
    // }
    // //  console.log((recc.find(check).year))
    // return (recc.find(check))

    const result = record.find((record) => record.result === 'W');
    return result ? result.year : undefined;

}


