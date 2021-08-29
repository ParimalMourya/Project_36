class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.input2 = createInput("Enter Correct Option No.-");

    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.que = createElement("h3");
    this.options = createElement("h4");
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box

    this.input2.hide();
    this.que.hide();
    this.options.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    //Create html() and position() for each question, input and answers.
    this.que.html("Que:- How many times can you subtract the number 5 from 35?");
    this.que.position(100, 50);

    this.options.html(`1:  Once
    </br> 2:  Twice
    </br> 3:  5-Times
    </br> 4:  7-Times`);
    this.options.position(100,90);

    this.input1.position(100, 260);
    this.input2.position(300, 260);
    this.button.position(250, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.html(`Thanks!! ${this.input1.value()}, Your Answer Has Been Submitted...`);
      this.message.position(100, 350);
    })


  }
}
