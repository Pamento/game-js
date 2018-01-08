class Person {
  constructor(nick,points,isLive=true){
    this.nick = nick;
    this.points = points;
    this.isLive = isLive;
  }
  toString(){
    return `The ${this.nick} has ${this.points} and is live ${this.isLive}.`;
  }
}