let gameStartButton = document.getElementById('gameStartButton');
var gameReadyPopupIntervalId = null;

gameStartButton.addEventListener('click', (e)=>{
    gameReadyPopupIntervalId = setTimeout(()=>{
        window.location.href = '#popupGameReady';
    }, 5000)
})

let gameLeaveButton = document.getElementById('gameLeaveButton')
gameLeaveButton.addEventListener('click', (e)=>{
    clearInterval(gameReadyPopupIntervalId);
})