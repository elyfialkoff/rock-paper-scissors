const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playButton = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playButton.addEventListener('click', () => {
      introScreen.classList.add('fadeOut');
      match.classList.add('fadeIn');
    });
  };

  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');

    // Computer Options
    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach((option) => {
      option.addEventListener('click', function() {
        console.log(this);
      })
    })

    const computerNumber = Math.floor(Math.random() * 3);

  };

  startGame();
  playMatch();

};

game();