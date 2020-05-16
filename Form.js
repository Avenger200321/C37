class Form{
    constructor(){
        this.title= createElement("h1");
        this.greeting=createElement("h2");
        this.button = createButton("Play");
        this.input = createInput("Name");
    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.greeting.hide();
        this.button.hide();
    }
display(){
    
    this.title.html("CarRace");
    this.title.position(130,0);
    this.input.position(130,160);
    this.button.position(250,200);
    this.button.mousePressed( ()=>{
        this.input.hide();
        this.button.hide();
        player.name=this.input.value();
        playerCount++;
        player.index=playerCount;
        player.update();
        player.updateCount(playerCount);
        
        this.greeting.html("Welcome "+ player.name);
        this.greeting.position(130,160);
    })
}


}