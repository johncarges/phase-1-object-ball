


function gameObject() {
    let justAnObject = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: [ 
                {
                    name: "Alan Anderson",
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12, 
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                }, {
                    name: "Reggie Evans",
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12, 
                    steals: 12,
                    blocks: 12, 
                    slamDunks: 7
    
                }, {
                    name: "Brook Lopez",
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15  
                }, {
                    name: "Mason Plumlee",
                    number: 1,
                    shoe:19,
                    points:26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5  
                }, {
                    name: "Jason Terry",
                    number: 31, 
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1  
                }
            ],
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: [
                {
                    name: "Jeff Adrien",
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2  
                }, {
                    name: "Bismak Biyombo",
                    number: 0,
                    shoe: 16,
                    points: 12, 
                    rebounds: 4, 
                    assists: 7,
                    steals: 7, 
                    blocks: 15,
                    slamDunks: 10 
                }, {
                    name: "DeSagna Diop",
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5  
                }, {
                    name: "Ben Gordon",
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1, 
                    slamDunks: 0 
                }, {
                    name: "Brendan Haywood",
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12  
                }
            ],
        },
    }
    return justAnObject
}

function homeTeamName() {
    return gameObject()["home"]["teamName"]
}

/*
function mostPointsScored() {
    let gameObject = gameObject()
    let highestPointsScored = 0
    let highestScoringPlayer = ""

    for (let teamKey in gameObject) {
        let team = gameObject[teamKey]
        console.log(team.teamName)

        let roster = team.players
        for (let playerKey in roster) {
            let player = roster[playerKey]
            console.log(player.name)
            if (player["points"] > highestPointsScored) {
                highestPointsScored = player["points"]
                highestScoringPlayer = player.name
            }
        }
    }
    console.log(`${highestScoringPlayer} scored the most points with ${highestPointsScored} points`)







    // for (let team in gameObject) {
    //     console.log(team)
    //     let roster = gameObject[team]["players"]
    //     console.log(roster)
    //     for (let player of roster) {
    //         let playerPoints = roster["player"]["points"]
    //         if (playerPoints > highestPointsScored) {
    //             highestScoringPlayer = player.name
    //             highestPoinstScored = player.points
    //         }
    //     }
    // }
} */

// mostPointsScored(gameObject)

let homeTeamArray = justAnObject["home"]["players"]

let pointsArray = homeTeamArray.map((player)=>player.points)
// should be an array of all points scored by homeTeam
console.log(pointsArray)
/*
[22,12,17,26,19]
*/
const sum = (x1,x2) => x1+x2
let homeTotalPoints = pointsArray.reduce(sum)

console.log(homeTotalPoints)

function totalPoints(team) {
    let roster = team["players"]

        let pointsArray = roster.map((player) => player.points)
        const sum = (x1,x2) => x1+x2

        let totalPoints = pointsArray.reduce(sum)

        return totalPoints
}

let homeTeam = gameObject().home
let awayTeam = gameObject().away
console.log(totalPoints(homeTeam))
console.log(totalPoints(awayTeam))

function winningTeam() {
    if (totalPoints(homeTeam) > totalPoints(awayTeam)){
        return homeTeam.teamName
    } else {
        return awayTeam.teamName
    }
}

console.log(winningTeam())



//
const greaterScore = (key1, key2) => {
    let team1 = gameObject()[key1]
    let team2 = gameObject()[key2]
    return totalPoints(team1)>totalPoints(team2) ? team1.teamName: team2.teamName
}
console.log(Object.keys(gameObject()))

let winner = Object.keys(gameObject()).reduce(greaterScore)

let ranked = Object.keys(gameObject()).sort(greaterScore)

console.log(`the reduce function says ${winner} is the winner`)
console.log(ranked)



