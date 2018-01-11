class Person {
  constructor(nick,points){
    this.nick = nick;
    this.points = points;
  }
  about(){
    let livePlayer;
    if (this.points > 0){livePlayer = "He has good healty";}
    else if (( this.points === 0 ) || ( this.points < 0 )){livePlayer = "I's death";}
    return `${this.nick} has: ${this.points} poinds\n${livePlayer}.`;
  }
  atack(player) {
    console.log("player "+player);
    console.log("player "+player.nick);
    console.log("player points "+player.points);
    console.log("this.nick "+this.nick);
    console.log("this.points "+this.points);
    
    let verbose;
    if(this.points > 0){
      if( player.points >= 10 ) {
        if ( player.points > 10 ) {
          player.points -= 10;
          verbose = `${this.nick} damaged ${player.nick}, he has now ${player.points} health.`;
        }
        else if ( player.points >= 10 ) {
          player.points -= 10;
          verbose = `${this.nick} damaged ${player.nick}, he now has ${player.points} and is death.`
        }
      } 
      else if ( player.points >= 0 ) {
        verbose = ` ${player.nick} is death.\nGame over !`;
      }
    } else {
      verbose = ` ${this.nick} don't cant fite, is death;\nGame over !`
    }

        
    return verbose;
  
  }
}