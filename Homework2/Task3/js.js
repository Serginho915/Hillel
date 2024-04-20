let dateOfBirth =+prompt('Enter your year of birth');
    placeOfStaying = prompt('Where do you live?'.toLowerCase());
    kindOfSport = prompt('What`s your favourite kind of sport?'.toLowerCase());
    currentYear = new Date().getFullYear();
    age = currentYear - dateOfBirth;   

!!dateOfBirth ? alert(`You're ${age} years old`) : alert(`That's sad that you didnt give us your year of birth`);

    switch(placeOfStaying){
    case 'kyiv':{
        alert(`You're living in the capital of Ukraine!`)
        break;
    }
    case 'london':{
        alert(`You're living in the capital of GB!`)
        break;
    }
    case 'Washington':{
        alert(`You're living in the capital of USA!`);
        break;
    }
    default:{
        !!placeOfStaying ? alert(`You're living in ${placeOfStaying}`) : alert(`That's sad that you didnt give us your place of staying`);
        break;
    }

} 

switch (kindOfSport){
    case 'football':{
        alert(`youre gonna be like Lionel Messi?`);
        break;
    }
    case 'basketball':{
        alert(`youre gonna be like Micheal Jordan?`);
        break;
    }
    case 'swimming':{
        alert(`youre gonna be like Micheal Phelps?`);
        break;
    }
    default:{
        if(!kindOfSport)  alert(`That's sad that you didnt give us your favourite sport`);
        break;
    }
}


