class Form {
    constructor() {
      this.title = createElement('h2')
      this.input = createInput("Enter UserName");
      this.checkbox1 = createCheckbox('Boy', false);
      this.checkbox2 = createCheckbox('Girl', false);
      this.button = createButton('Play');
      this.greeting = createElement('h3');
      
    }


    display(){
         
      
      this.title.html("Game Name");
      this.title.position(500, 200);
      
      this.input.position(500, 300);
      this.button.position(500, 400);
      this.checkbox1.position(500,360);
      this.checkbox2.position(550,360);

      console.log(boy);

      this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.checkbox1.hide();
      this.checkbox2.hide();
  

      var name = this.input.value()
  
        this.greeting.html("Hello " + name )
        this.greeting.position(1000, 100)
        gamestate = 1;
      });
  
    }
  }