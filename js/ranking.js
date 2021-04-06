let rankMode = '-';
let rankLevel = '-';
let rank = [];

function rankingCount() {
    let userName = document.getElementById('name__aside').innerHTML;
    let userMode = document.getElementById('game__aside').innerHTML;
    let userLevel = document.getElementById('level__aside').innerHTML;
    let userScore = startNumber;

    //If the user is playing in the same mode, the rank will prevail.
    //If not, we will reset the rank

    if (rankMode != userMode || rankLevel != userLevel) {
        rankMode = userMode;
        rankLevel = userLevel;
        rank = [];
        document.getElementById('rank1st').innerHTML = '-';
        document.getElementById('rank2nd').innerHTML = '-';
        document.getElementById('rank3rd').innerHTML = '-';
    }

    let tempArr = [userName, userScore]
    rank.push(tempArr);

    rank = rank.sort( function(a, b) {
        return b[1] - a[1];
    });

    document.getElementById('rank1st').innerHTML = rank[0][0] + ' - ' + rank[0][1];

    if (rank.length == 2){
        document.getElementById('rank2nd').innerHTML = rank[1][0] + ' - ' + rank[1][1];
    } else if (rank.length > 2) {
        document.getElementById('rank2nd').innerHTML = rank[1][0] + ' - ' + rank[1][1];
        document.getElementById('rank3rd').innerHTML = rank[2][0] + ' - ' + rank[2][1];
    }

}