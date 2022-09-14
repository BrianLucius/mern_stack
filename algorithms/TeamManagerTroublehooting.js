let document1 = {
    "_id": {
      "$oid": "632122a8772b464f98f72391"
    },
    "playerName": "Alex Miller",
    "playerPosition": "Center",
    "playerStatus": [
      {
        "gameNumber": 1,
        "status": "playing",
        "_id": {
          "$oid": "63212759772b464f98f72412"
        }
      },
      {
        "gameNumber": 2,
        "status": "notPlaying",
        "_id": {
          "$oid": "632127c0772b464f98f7244c"
        }
      },
      {
        "gameNumber": 3,
        "status": "undecided",
        "_id": {
          "$oid": "632127c3772b464f98f72497"
        }
      }
    ],
    "__v": 0
  }

// console.log("First: ", Object.entries(document1.playerStatus));

// console.log("Second: ", Object.entries(document1.playerStatus).filter((games)=> games[1].gameNumber===3));

// var temp=Object.entries(document1.playerStatus).filter((games)=> games[1].gameNumber===1)[0][1].status;
// console.log("Third: ", temp);

let document2 = {
  "_id": {
    "$oid": "632122a8772b464f98f72391"
  },
  "playerName": "Alex Miller",
  "playerPosition": "Center",
  "playerStatus": []
}

console.log("First: ", Object.entries(document2.playerStatus) == "" ? "is empty" : "not empty");