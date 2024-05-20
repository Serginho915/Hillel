let userLink = '';

function promptForLink() {
    let link = '';
      while (!link) {
        link = prompt('You must enter a link before redirecting. Please enter the link:');
      }
    return link;
}

document.getElementById('enterlink').addEventListener('click', () => {
    userLink = promptForLink();
});

document.getElementById('redirect').addEventListener('click', () => {
    if (!userLink) {
      userLink = promptForLink();
    }
    
    if (!userLink.startsWith('http://') && !userLink.startsWith('https://')) {
      userLink = 'http://' + userLink;
    }
    window.location.href = userLink;
});