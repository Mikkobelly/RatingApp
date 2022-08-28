const mainContainer = document.querySelector('.main-container');
const submitButton = document.querySelector('#submitButton');
const buttonsContainer = document.querySelector('.rate-buttons');
const buttons = {
    b1: document.querySelector('#button1'),
    b2: document.querySelector('#button2'),
    b3: document.querySelector('#button3'),
    b4: document.querySelector('#button4'),
    b5: document.querySelector('#button5')
}

let rateNum = 0;
buttonsContainer.addEventListener('click', function (e) {
    rateNum = e.target.textContent;
});

function makeNewPage() {
    let icon = document.querySelector('#icon');
    icon = '<img id="computerIcon" src="illustration-thank-you.svg" alt="icon-computer" width="45%">';
    const yourRate = document.createElement('section');
    yourRate.textContent = `You selected ${rateNum} out of 5`;
    yourRate.classList.add('newText', 'yourRate');
    const title = document.querySelector('.title');
    title.textContent = 'Thank you!'
    title.classList.add('newText');
    const newMsg = document.querySelector('.msg');
    newMsg.textContent = "We appreciate you taking the time to give a rateing. If you ever need more support, don't hesitate to get in touch!";
    newMsg.classList.add('newText');
    mainContainer.innerHTML = icon;
    mainContainer.append(yourRate, title, newMsg);
}

submitButton.addEventListener('click', makeNewPage);