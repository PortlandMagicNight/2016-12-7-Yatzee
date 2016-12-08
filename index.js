let scoreCard = {
  upper:{
    ones: null,
    twoes: null,
    threes: null,
    fours: null,
    fives: null,
    sixes: null
  },
  lower:{
    threeOfAKind: null,
    fourOfAKind: null,
    fullHouse: null,
    smallStraight: null,
    largeStraight: null,
    yahtzee: null,
    chance: null
  }
};

class ScoreCard{
  constructor(){
    this.slots = {};

    this.ones = 'ones';
    this.twos = 'twos';
    this.threes = 'threes';
    this.fours = 'fours';
    this.fives = 'fives';
    this.sixes = 'sixes';
    this.threeOfAKind = 'three of a kind';
    this.fourOfAKind = 'four of a kind';
    this.fullHouse = 'full house';
    this.smallStraight = 'small straight';
    this.largeStraight = 'large straight';
    this.yahtzee = 'yahtzee';
    this.chance = 'chance';
    this.upper = [this.ones, this.twos, this.threes, this.fours, this.fives, this.sixes];
    this.lower = [this.threeOfAKind, this.fourOfAKind, this.fullHouse, this.smallStraight, this.largeStraight, this.yahtzee, this.chance];
  }

  possibleScores(roll){
    return evalRoll(roll).filter( i=> !this.slots.hasOwnProperty(i[0]) )
  }

  evalRoll(roll){
    let uppperPossibleScores = this.upperPossibleChoices(myRoll);
    let lowerPossibleScores = this.lowerPossibleChoices(myRoll);
    return uppperPossibleScores + lowerPossibleScores;
  },

  //returns array of possible scores
  upperPossibleChoices(myRoll){
    let result = [];
    for(var x in this.upper){
      result.push([
        this.upper[x],
        this.faceCount(parseInt(x)+1, myRoll) * targetNumber;
      ]);
    };
    return result;
  },
  occurrances(myRoll){
    let occurances = [
      faceCount(1, myRoll),
      faceCount(2, myRoll),
      faceCount(3, myRoll),
      faceCount(4, myRoll),
      faceCount(5, myRoll),
      faceCount(6, myRoll)
    ];
    return occurances.filter(i => i > 0).sort(); 
  },

  lowerPossibleChoices(myRoll){
    return [
      [this.fullHouse, this.fullHouseScore(myRoll)],
      [this.threeOfKind, this.ofAKindScore(3, myRoll)],
      [this.fourOfKind, this.ofAKindScore(4, myRoll)],
      [this.largeStraigth, this.straightScore(5, myRoll)],
      [this.smallStraigth, this.straightScore(4, myRoll)],
      [this.yahtzee, this.yahtzeeScore(myRoll)],
      [this.chance, this.chanceScore(myRoll)]
    ]  
  },

  faceCount(targetNumber, myRoll){
    return myRoll.filter(i => i== targetNumber ).length; 
  },

  ofAKindScore(numberOfMatching, myRoll){
    return 0;
  },

  fullHouseScore(myRoll){
    let occurances = this.occurances(myRoll);
    if(occurances == [2,3]){
      return 25;
    }else{
      return 0;
    }
  },

  straightScore(numberInStraight, myRoll){
    return 0;
  },

  yahtzeeScore(myRoll){
    return 0;
  },

  chanceScore(myRoll){
    return 0;
  }
};

function roll(numberOfDice=5){
  let rolledDice = []
  for(i=0; i<numberOfDice; i++){
    rolledDice.push(Math.floor(Math.random() * 6) + 1);
  }
  return rolledDice;
};


function playerTurn(){
  let myRoll = roll();
  let card = new ScoreCard();
  let possibleScores = evalRoll(myRoll, card);
};

playerTurn();



