exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};

const Alexa = require('ask-sdk-core');

const q1=['What star shines in the day and provides light? a. Sun b. Moon c. Jupiter','Which is the closest planet to the sun? Clues: a. Earth b. Neptune c. Mercury',
'Astronomers view objects in space through scientific instruments known as what? Clues: a. Microscopes b. Hygrometers c. Telescopes',
'What galaxy are we in? Clues: a. Cartwheel b. Milky Way c. Whirlpool', 'This planet is small and icy. It is a dwarf planet. Today, many scientists question whether it should even be classified as a planet. Which planet is it? Clues: a. Venus b. Mercury c. Pluto',
'What is the only planet known to have living things on it? Clues: a. Earth b. Mars c. Jupiter', 'What is the Latin name of Gold? Clues: a. Aurum b. Tungstum c. Rubidium',
'What is the atomic number of lead? Clues: a. 34 b. 12 c. 82','What state of matter is gold usually found in room conditions? Clues: a. Solid b.Liquid c.Gas',
'What is the first element on the periodic table? Clues: a. Hydrogen b. Helium c.Gold'],
q2=['What is the molecular formula of water? Clues: a. H2O b. CO2 c. SO3', 'What is a charged atom called? Clues: a. Ion b. Molecule c. Electron',
'What’s the charge over a neutron? Clues: a. 0 b. +1 c. -1','K is the chemical symbol for which element? a. Potassium b. Silver c. Platinum',
'What is the centre of an atom called? a. Nucleus b. Proton c.Valence shell', 'What’s the name of the process by which solids turn directly into the gaseous state? a. Sublimation b. Evaporation c. Condensation',
'When water evaporates, what does it turn into? Clues: a. Ice b. Water vapour c. Smog','What state of matter is ice? Clues: a. Solid b. Liquid c. Gas',
'According to what property does the periodic table list the elements? a. Atomic mass b.Atomic number c.Volume',
'What is the fourth most abundant element in the universe in terms of mass? Clues: a. Carbon b.Oxygen c.Gold'],
q3=['Why is there something rather than nothing?','Is our universe real?','Do we have free will?','Does God exist?','Is there life after death?',
'Why is there something rather than nothing?','Is our universe real?','Do we have free will?','Does God exist?','Is there life after death?'],
a1=['sun','mercury','telescopes','milky way','pluto','earth','aurum','82','solid','hydrogen'],
a2=['h. 2 o.','ion','0','potassium','nucleus','sublimation','water vapor','solid','atomic number','carbon'],
no=['No','Nope','Incorrect','Wrong','Not Right','No','Nope','Incorrect','Wrong','Not Right'],
e1=['The Sun is the star at the center of the Solar System. It dims out the light sent out by the other stars during the day, since it’s quite close compared to them',
'Mercury is a rocky planet, also known as a terrestrial planet.  Its the smallest planet in the solar system and closest to the sun',
'A telescope is an optical instrument using lenses, curved mirrors, or a combination of both to observe distant objects, or various devices used to observe distant objects by their emission, absorption, or reflection of electromagnetic radiation',
'The Milky Way is the galaxy that includes our Solar System, with the name describing the galaxys appearance from Earth: a hazy band of light seen in the night sky formed from stars that cannot be individually distinguished by the naked eye',
'Pluto is a dwarf planet that lies in the Kuiper Belt, an area full of icy bodies and other dwarf planets out past Neptune.',
'Earth is currently the only known planet to support life.It is the right distance from the Sun, it is protected from harmful solar radiation by its magnetic field, it is kept warm by an insulating atmosphere, and it has the right chemical ingredients for life, including water and carbon.',
'Gold is a chemical element with the symbol Au ,from Latin: aurum, and atomic number 79, making it one of the higher atomic number elements that occur naturally.',
'Lead is a chemical element with the symbol Pb and atomic number 82. It is a heavy metal that is denser than most common materials.',
'Classified as a transition metal, Gold is a solid at room temperature.',
'Hydrogen is the chemical element with the symbol H and atomic number 1. It is the lightest element in the periodic table.'],
e2=['H2O means that each molecule of water is made up of two hydrogen atoms, indicated by the letter H, and a single oxygen atom, represented by the letter O',
'Ions are formed when an atom gains or loses electrons, thus getting a charge over it',
'A neutron is made of two down quarks and one up quark. One up quark has a charge of +2/3, and the two down quarks each have a charge of -1/3. The fact that these charges cancel out is why neutrons have a neutral (0) charge.',
'The chemical symbol K comes from kalium, the Mediaeval Latin for potash, which may have derived from the arabic word qali, meaning alkali.',
'The atomic nucleus is the small, dense region consisting of protons and neutrons at the center of an atom, discovered in 1911 by Ernest Rutherford.',
'Sublimation is the transition of a substance directly from the solid to the gas state, without passing through the liquid state.',
'Evaporation of water occurs when the surface of the liquid is exposed, allowing molecules to escape and form water vapor; this vapor can then rise up and form clouds. With sufficient energy, the liquid will turn into vapor.',
'Ice is water frozen into a solid state.Depending on the presence of impurities such as particles of soil or bubbles of air, it can appear transparent or a more or less opaque bluish-white color.',
'The atomic number stands for the number of protons in an atom of the element. The number of protons determines the identity and the chemical properties of the element. That’s why we use it to sort elements in the periodic table.',
'Carbon is the 15th most abundant element in the Earths crust, and the fourth most abundant element in the universe by mass after hydrogen, helium, and oxygen.'],
n=['sheepskin','serendipity','tweedledee','tweedledum','tomtittot','tampelnik','thuppity','gilitrutt','klingac'];
var z= Math.floor(9*Math.random());
var name = n[z];
var k=0;        //counter for the name guessing part
var a='';       //to store temporary strings
var key=0;
var counter=1;    //counter for the order of the intents

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = "Hello, welcome to Rumplestiltskin! Say New Game to start a new game.";

        z= Math.floor(9*Math.random());
        name = n[z];
        k=0;        //counter for the name guessing part
        a='';       //to store temporary strings
        key=0;
        counter=1;    //counter for the order of the intents

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const NewGameIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'NewGameIntent'
            && counter===1;
    },
    handle(handlerInput) {
        const speakOutput = "Father: Welcome to Germany. I’m so happy you have arrived. Everyone, please gather around. My daughter has arrived! Isn’t she the most beautiful girl in the village, if not in all the land!"+
"Narrator: As you can see, your Father is quite the boastful type and he loves to weave stories to impress his friends. Unfortunately, the King was taking his rounds and overheard him."+
"King: You there! What is so amazing about your daughter?"+
"Narrator: I must interrupt and tell you now that there are rumours going around of a certain magician, an Alchemist. And they say that he can turn anything into gold. But nobody has seen him. And nobody knows his name. Which is why what the Father is about to say next is quite troublesome."+
"Father: Your Majesty, my daughter is so clever that she can turn lead into gold!"+
"Narrator: The King stopped dead in his tracks. Afterall, he was looking for the rumoured Alchemist."+
"King: Turn lead into gold? An ancient practice? She must come to my palace at once and reveal her secrets!"+
"Father: But I mean…"+
"He wished he had not told the King such a thing! But now it was too late. You go to the King’s palace at once. The guards take you to a certain room full of pieces of lead."+
"King: Now get to work! Let me see what you can really do. Here is your workspace. If by morning you have not turned this lead into gold, you will die!"+
"(Door slams and locks)."+
"You are now all alone."+
"Narrator: Your workspace? This is just a rusty table. What will you do now?"+
"Eavesdrop on the guards or go to Sleep?";
counter++;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('What will you do now?')
            .getResponse();
    }
};

const COneSleepIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SleepIntent'
            && counter===2;
    },
    handle(handlerInput) {
           a ="You try to sleep but overhear the guards talking about the king. You decide to stand near the door and listen to the guards outside.";
           counter++;

           return COneContIntentHandler.handle(handlerInput);
    }  
};

const COneEvsIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'EvsIntent'
            && counter===2;
    },
    handle(handlerInput) {
        a="You hear some guards talking outside, and decide to listen to them.";
        counter++;

        return COneContIntentHandler.handle(handlerInput);
    }
};

const COneContIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'COneContIntent';
    },
    handle(handlerInput) {
        const speakOutput=a+"Guard 1: Did you hear the rumour about the King being ill?"+
        "Guard 2: Huh? The King is ill?"+
      "Guard 1: shhh, don’t shout. I heard it from the chef. He is apparently suffering from a certain incurable disease."+
        "Guard 2: Well that explains the Prince coming back so soon. Wonder if anything will change for us."+
            "You go towards the table."+         
        "Narrator: Can you actually turn lead into gold?"; a='';
                                
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('Can you actually turn lead into gold?')
            .getResponse();
    }
};

const CTwoNoIntentHandler= {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.NoIntent'
            && counter===3;
    },
    handle(handlerInput) {
        a = 'An old little man appears. Man: Perhaps, I may be of assistance.';
        counter++;

        return CTwoContinueIntentHandler.handle(handlerInput);
    }
};

const CTwoYesIntentHandler= {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.YesIntent'
            && counter===3;
    },
    handle(handlerInput) {
        a = 'An old little man appears. Man: Oh really, can you?';
        counter++;

        return CTwoContinueIntentHandler.handle(handlerInput);
    }
    
};

const CTwoContinueIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CTwoContinueIntent';
    },
    handle(handlerInput) {
        const speakOutput =a+'Narrator: Who is this man? Do you know him?'; a='';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('Do you know him?')
            .getResponse();
    }
};

const CThreeYesIntentHandler= {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.YesIntent'
            && counter===4;
    },
    handle(handlerInput) {
        a = 'Man: Don’t be silly. Nobody knows who I am.';
        counter++;

        return CThreeContinueIntentHandler.handle(handlerInput);
    }
    
};

const CThreeNoIntentHandler= {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.NoIntent'
            && counter===4;
    },
    handle(handlerInput) {
        a = 'Man: Well I’m the one you need. And I’ll turn all this lead into gold for you.';
        counter++;

        return CThreeContinueIntentHandler.handle(handlerInput);
    }
    
};

const CThreeContinueIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CThreeContinueIntent';
    },
    handle(handlerInput) {
        const speakOutput = a+"You ask him how it was possible."+
                            "Man: The essentials of alchemy are salt, sulphur and mercury. But I will also require one more secret substance. (whispers) The philosopher’s stone. (loudly again). Nothing that you puffers will understand anyway. I will help you out of this rut, but you must prove to me that you are worthy of my help. Do you accept it?";
                            a='';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('Do you accept it?')
            .getResponse();
    }
};

const CFourYesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.YesIntent'
            && counter===5;
    },
    handle(handlerInput) {
        
        const speakOutput = 'Man: Very well then, answer me this' +  q1[z];
        counter++;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('I am still waiting for an answer')
            .getResponse();
    }
};

const CFourNoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.NoIntent'
            && counter===5;
    },
    handle(handlerInput) {
        const speakOutput='Narrator: You do not want to satisfy the greed of the King. After all, greed is endless. He won’t be pleased with just one room full of gold.'+
                          'Man: Ah, a perceptive one, I see. So you’d rather die than fulfill his wish? Perhaps we could work out another deal?'+
                          'What do you say?';
                          counter++;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('Yes, or No?')
            .getResponse();
    }
};

const CTenNoIntentHandler = {           //ed2
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.NoIntent'
            && counter===6;
    },
    handle(handlerInput) {
        const speakOutput='The man leaves, looking grumpy. You end up not being able to convert any lead pieces. The King gets angry, and has you executed the next day. The end.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const CTenYesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.YesIntent'
            && counter===6;
    },
    handle(handlerInput) {
        const speakOutput = 'The man then gives you a small crystal and a rusted key, telling you to use them at the right time, before disappearing into thin air.'+
                            'The morning comes, and the King sees you with no gold pieces. Furious, he orders his guards to send you to the prison, before getting executed the next day.'+
                            'In the prison, you remember the words of the man, and realize that the key looks exactly like the one the guards used to lock your prison. You wait for them to go away, and unlock your door. Trying to find your way out, you see a big room, near which the crystal starts glowing.'+
                            'What would you do now? Enter the room, or proceed with your search?';
                            counter++;

        return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt('What is your choice?')
        .getResponse();
    }
};

const CelevenEnterIntentHandler = {          //ed3
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'EnterIntent'
            && counter===7;
    },
    handle(handlerInput) {
        const speakOutput = 'As soon as you open the door, the crystal dissipates into a thick cloud of green smoke. You close the door in order for it to not spread further, and continue with your escape.'+
                            'After about half an hour of traversing the castle, you finally find the exit. You run towards your home, and tell your father what had transpired in the castle. You and him run away to a far away country.'+
                            'A few days later, you hear about the tragedy that had befallen that castle. According to rumours, green smoke had filled the castle, and took many lives. The terrible King has died and you live your life happily. The End.';

        return handlerInput.responseBuilder
        .speak(speakOutput)
        .getResponse();
    }
};

const CelevenProceedIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ProceedIntent'
            && counter===7;
    },
    handle(handlerInput) {

        return CelevenContIntentHandler.handle(handlerInput);
    }
};

const CelevenContIntentHandler = {           //ed4
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CelevenContIntent';
    },
    handle(handlerInput) {
        const speakOutput= 'You decide not to bother with the room, and move on.'+
                           'After about half an hour of traversing the castle, you finally find the exit. You run towards your home, and tell your father what all transpired in the castle. You and him run away to a distant country, and start living your lives normally.'+
                           'One day, you wake up to find your father unconscious. Trying everything in your reach, you give hope and begin to cry. Woosh, suddenly that Man appears out of nowhere.'+
                           'Man: You failed to fulfill your promise, now you shall pay for it. A deal is a deal.'+
                           'And he disappears without a trace.'+'You start crying for your father, but it was not gonna bring him back. You realize your mistake and decide to never break any promises again. The End.';

        return handlerInput.responseBuilder
        .speak(speakOutput)
        .getResponse();
    }
};

const AOneCaptureIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ACaptureIntent'
            && counter===6;
    },
    handle(handlerInput) {
        const ans_ = handlerInput.requestEnvelope.request.intent.slots.ans_.value;
        counter++;
        
        if(ans_==a1[z]) {
            return AOneRightIntentHandler.handle(handlerInput);
        }
        else {
            return AOneWrongIntentHandler.handle(handlerInput);
        }
    }    
        
};

const AOneRightIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AOneRightIntent';
    },
    handle(handlerInput) {
        const speakOutput='Man: That is correct!'+ e1[z] + 'Ah, you have proven worthy of my work.'+
         'The little man got to work. He began to mix potions and electricity sparked around the room. There was a burst of colours. First black, then green, then yellow. The next day, all the lead had turned into gold.'+
         'Narrator: You have turned all the lead into pure gold!'+
         'Man: Of course I did! I must go. I will see you soon.' + 'The man disappears.' +
         'You fall asleep on the table, relieved that your life would be spared. The next day, you are woken up by the guards. The King enters the room, looking extremely happy.'+
         'Now, the King’s hunch was solidifying. He might’ve finally found what he was looking for.'+
         'King: Look at that! Pure Gold! Who knew a peasant girl like you could have fingers that work wonders. But I am not satisfied. Imagine the power I could hold with mountains of gold. If you continue to work, I will reward you immensely when I’m done with you. I will have my servants bring new pieces of lead to fill up this room.  You will stay here tonight.  By the morning, all the lead must be turned into gold. Otherwise you will pay with your life. You’re free to roam the castle in the meanwhile.'+
         'He wants to make sure you are who he thinks you are. Feeling happy, he leaves the room.'+
         'You’re now free to roam the castle for the day. What would you like to do? Try to escape, or wander around the castle?';
         
         return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('What would you do?')
            .getResponse();
    }
};

const AOneWrongIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AOneWrongIntent';  
    },
    handle(handlerInput) {
        const speakOutput='That is wrong. I will not waste my work on you. Though, we can work out another deal.Whaddya say?'+
                          'What will you decide? Agree or disagree with him?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('Will you agree or disagree?')
            .getResponse();
    }
};

const CTwelveDisagreeIntentHandler = {          //ed8
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DisagreeIntent'
            && counter===7;
    },
    handle(handlerInput) {
        const speakOutput='The man leaves, looking grumpy. You end up not being able to convert any lead pieces. The King gets angry and has you sent to the prison, and you are executed the next day. The end';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const CTwelveAgreeIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AgreeIntent'
            && counter===7;  
    },
    handle(handlerInput) {

        return CTwelveContIntentHandler.handle(handlerInput);
    }
};

const CTwelveContIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CTwelveContIntent';  
    },
    handle(handlerInput) {
        const speakOutput='The man then gives you a small crystal and a rusted key, telling you to use them at the right time, before disappearing into thin air.'+
                          'The morning comes, and the King sees you with no gold pieces. Furious, he orders his guards to send you to the prison, before getting executed the next day.'+
                          'In the prison, you remember the man’s words, and realize that the key looks exactly like the one the guards used to lock your prison. You wait for them to go away, and unlock your door. Trying to find your way out, you see a big room, near which the crystal starts glowing.'+
                          'What would you do? Enter the room or proceed with your search?';
                          counter=8;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('What would you like to do?')
            .getResponse();
    }
};

const CThirteenEnterIntentHandler = {          //ed7
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'EnterIntent'
            && counter===8;  
    },
    handle(handlerInput) {
        const speakOutput='As soon as you open the door, the crystal dissipates into a thick cloud of green smoke. You close the door in order for it to not spread further, and continue with your escape.'+
                          'After about half an hour of traversing the castle, you finally find the exit. You run towards your home, and tell your father what had transpired in the castle. You and him run away to a far away country.'+
                          'A few days later, you hear about the tragedy that had befallen that castle. According to rumours, green smoke had filled the castle, and took many lives. The terrible King has died and you live your life happily. The End.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const CThirteenProceedIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ProceedIntent'
            && counter===8;  
    },
    handle(handlerInput) {
        return CelevenContIntentHandler.handle(handlerInput);

    }
};

const CFiveWanderIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CFiveWanderIntent'
            && counter===7;
    },
    handle(handlerInput) {
        a ='You roam the castle, hoping to find something that could help you. After losing all hope, you start going back.'+
           'As you’re walking, your eyes glance upon a rusted key laying on the ground. You pick it up, keep it in your pouch  and go back to your room.';
        key=1;
        counter++;

        return CFiveContinueIntentHandler.handle(handlerInput);

    }
};

const CFiveEscapeIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CFiveEscapeIntent'
            && counter===7;
    },
    handle(handlerInput) {
        a = 'You try to run away, but unfortunately, the guards catch you. They send you back to the room,and lock you up for the rest of the day.';
        counter++;
                            
        return CFiveContinueIntentHandler.handle(handlerInput);
        }   
};

const CFiveContinueIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CFiveContinueIntent';
    },
    handle(handlerInput) {
        const speakOutput=a+'The guards come, and give you the new pieces of lead.'+
        'The door is then locked. Narrator: We were lucky last night, but what will we do now? Suddenly, the old Man appears again.'+
        'Man: Seems like you’re in trouble once again. I will do this job for you. But you must answer my question.'+ q2[z]; a='';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('I am waiting for your answer')
            .getResponse();
    }
};

const ATwoCaptureIntentHandler ={
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ACaptureIntent'
            && counter===8;
    },
    handle(handlerInput) {
        const ans_ = handlerInput.requestEnvelope.request.intent.slots.ans_.value;
        counter ++;
        
        if(ans_==a2[z]) {
            return ATwoRightIntentHandler.handle(handlerInput);
        }
        else {
            return ATwoWrongIntentHandler.handle(handlerInput);
        }
        
    }
};

const ATwoWrongIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ATwoWrongIntent';
    },
    handle(handlerInput) {
        const speakOutput='Man: I do not think i should waste my work on you. Though, I am still gonna give you a second chance. We can work out a different deal, whaddya say?'+
                          'What will you decide? Agree or disagree?';

        return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt('Are you going to agree or disagree?')
        .getResponse();

    }
}

const CFourteenAgreeIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AgreeIntent'
            && counter===9;
    },
    handle(handlerInput) {
        return CTwelveContIntentHandler.handle(handlerInput);
    }
        
};

const CFourteenDisagreeIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DisagreeIntent'
            && counter===9;
    },
    handle(handlerInput) {
        a='The man leaves, looking grumpy. You end up not being able to convert any lead pieces.';

        if(key===1) {
            return HasKeyIntentHandler.handle(handlerInput);
        }
        else {
            return HasNoKeyIntentHandler.handle(handlerInput);
        }
    }
};

const HasKeyIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HasKeyIntent';
    },
    handle(handlerInput) {
        
        return CsevenContIntentHandler.handle(handlerInput);
    }
};

const HasNoKeyIntentHandler = {         //ed9
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HasNoKeyIntent';
    },
    handle(handlerInput) {
        const speakOutput=a+'The King gets angry and has you sent to the prison. Having no way to escape, you are executed the next day. The end.'; a='';

        return handlerInput.responseBuilder
        .speak(speakOutput)
        .getResponse();
    }
};

const ATwoRightIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ATwoRightIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Amazing! That is correct!' + e2[z] + 'So the Man began his alchemy once again. And by morning all the lead had turned into gold.'+
                            'Man: I shall now take my leave. I have a feeling we will meet again.'+
                            'And the Man leaves, with a malicious smile on his face.'+
                            'What would you like to do now? Eavesdrop on the guards, or go to sleep?';
                            
        return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt('What would you like to do?')
        .getResponse();
    }
};

const CSixEvsIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'EvsIntent'
            && counter===9;
    },
    handle(handlerInput) {
                            a = 'You stand near the door, trying to listen to the two guards chatting outside.'+
                            'Guard 1: Heard anything new?'+                                   
                            'Guard 2: I heard the King is looking for an elixir that will cure him of his disease. And he believes this girl will make it for him.'
                            'Guard 1: What? That’s ridiculous. He’s as dumb as a bean straw.';
                            counter++;

                            return CSixContIntentHandler.handle(handlerInput);
        }
};

const CSixSleepIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SleepIntent'
            && counter===9 ;
    },
    handle(handlerInput) {
            a='Having nothing left to do, you sit at the table.';
            counter++;

            return CSixContIntentHandler.handle(handlerInput);
    }
};

const CSixContIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CSixContIntent';
    },
    handle(handlerInput) {
        const speakOutput = a+'You feel tired, and fall asleep on the table. The next morning, the guards wake you up, right before the King arrives into your room.'+
        'King: Wonderful! So you are the rumoured Alchemist! Now you must know about the elixir of life. The master work! It heals all diseases and grants long life. I require it, and you must create it for me. There’s much work to do and my son will return tonight. In the morning he shall check to see if the work is done. If it is, you will marry the prince. (In loud booming voice) But if you do not do the task, you would marry no one at all for you would die!'+
        'What will you do? Stay quiet, or raise your voice?'; a='';

        return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt('What will you do?')
        .getResponse();
    }
};

const CSevenQuietIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CSevenQuietIntent'
            && counter===10;
    },
    handle(handlerInput) {
        const speakOutput = 'You hope the Alchemist will appear to help you again. And so he did.'+
                            'Man: I bet you knew I would come back. So here is my final question.'+ q3[z]+
                            'Narrator: How should anyone answer that! You can’t possibly expect her to answer it.'+
                            'Man: Then don’t worry. We will find a good price.(Laughs maliciously)'+
                            'And he went to work, preparing for his alchemy.'+
                            'You kept begging him to stop, but he never did. He began to create the elixir with no heed to you'+
                            'After a while, he was done. He had created a sparkly blue potion. The elixir of life.'+
                            'Man: So there it is. Now I shall tell you my price.'+
                            'Narrator: That’s not fair to the girl!'+
                            'Man: Lots of things are not fair.'+
                            'Narrator: Very well, what’s your price?'+
                            'Man: To complete this potion I required a life. And for that I will take the girls.'+
                            'Narrator: But she never agreed to this.'+
                            'Man: Oh, but she did. I have created the elixir.  And so the deal is made! But I will give her a choice. She may choose between herself and the first-born child she will have with the Prince.'+
                            'What will you do? Sacrifice yourself or offer your firstborn?';
                            counter++;

        return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt('What do you choose?')
        .getResponse();
    }
};

const CEightYourselfIntentHandler = {           //ed10
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CEightYourselfIntent'
            && counter===11;
    },
    handle(handlerInput) {
        const speakOutput= 'You decide to give yourself instead of sacrificing the life your child. The end.';

        return handlerInput.responseBuilder
        .speak(speakOutput)
        .getResponse();
    }
};

const CEightChildIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CEightChildIntent'
            && counter===11;
    },
    handle(handlerInput) {
        const speakOutput = 'The man disappears, with not even a trace left behind.'+
                            'You, feeling extremely tired and worried, have a terrible sleep. The guards wake you up yet again in the morning, but this time, the Prince comes into the room.'+
                            'Prince: Miss, are you alright? I know how hard my father can be. When I become the King, I shall not rule as he does. I was told that if you had done his job by this morning, you were to marry me.  But know this.  If you really want to get out of here, I will help you.  Do not worry. I will find a way to tell my father.'+
                            'Prince: So, will you marry me?'+
                            'What would your choice be? Yes or No?';
                            counter++;

        return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt('What would your choice be?')
        .getResponse();
    }
};

const CNineYesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.YesIntent'
            && counter===12;
    },
    handle(handlerInput) {
        const speakOutput = 'Narrator: So you two were married happily.  It was not long after the wedding when the terrible old King died of his illness.  The prince became King and you became the Queen.  In time, you had a baby of your own, a son.  You forgot about your deal with the dwarf and joy filled the palace.'+
                            'Until one day, when you were alone in your room.'+
                            'The dwarf appears out of nowhere. After all this time, you had forgotten about the deal, but here he is asking for something dear to you.'+
                            'Man: I have come to take what you promised! Give me the baby now!'+
                            'Narrator : She can not give you her son.  But she will offer you all the riches of the kingdom if you do not take her son away from her.'+
                            'Man: I have no use of riches, I can create gold from anything. I need the baby to complete my master work.'+
                            'Narrator: The alchemist being a deceptive dwarf decides to have some fun. He knows that no one in the world knows who he is and so he decides to play a game.'+
                            'Man: I will give you three days. If by that time you find out my real name, then  you may keep your child.'+
                            'Three days is a long time to come up with a lot of names. And so you agreed.'+
                            'The next day, you write a very long list of every name you could think of.'+
                            'That night in the baby’s bedroom, the man appears again.'+
                            'Man: Well? Guess my name. I will give you three chances.';
                            counter++;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('I am waiting for your try')
            .getResponse();

    }
};

const CNineNoIntentHandler = {          //ed5
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.NoIntent'
            && counter===12;
    },
    handle(handlerInput) {
        const speakOutput='Narrator: You believe that a peasant woman surely can’t marry royalty, and decide to escape.'+
                          'So, you run off, heading towards your house.'+'You end up marrying a charming man from your hometown, and have a baby.'+
                          'One day, while you’re all alone, the Man returns.'+
                          'Man: Now is the time to fulfill your promise, give me your baby and finish our deal.'+
                          'Narrator: But what promise? You had asked her to give her firstborn with the Prince, whom she never married.'+
                          'The Man, realizing that he had been outwitted, starts grumbling and goes away, never to be heard of again.'+
                          'You and your husband live a happy life together.The End';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const CsevenRaiseIntentHandler ={
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CsevenRaiseIntent'
            && counter===10;
    },
    handle(handlerInput) {

        return CsevenContIntentHandler.handle(handlerInput);
    }
};

const CsevenContIntentHandler ={           //ed6
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CsevenContIntent';
    },
    handle(handlerInput) {
        const speakOutput=a+'You are set to the prison to be executed. In the prison, you realize that the key you picked up earlier looks exactly like the one the guards used to lock your prison. You wait for them to go away, and unlock your door.'+
                            'After about half an hour of traversing the castle, you finally find the exit. You run towards your home, and tell your father what had transpired in the castle. You and him run away to a far away country.'+
                            'You and him lead a happy life without any troubles afterwards. The End.';a='';
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const NameCaptureIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'NameCaptureIntent'
            && counter===13;
    },
    handle(handlerInput) {
        const name_ = handlerInput.requestEnvelope.request.intent.slots.name_.value;
        const x=no[Math.floor(9*Math.random())];
        if (name_==name) {
            return NameRightIntentHandler.handle(handlerInput);
        }
        else {
            if(k===2||k===5||k===8) {
                a=x;
                return NameWrongIntentHandler.handle(handlerInput);
            }
            else {
                k++;
                return handlerInput.responseBuilder
                .speak(x)
                .reprompt('I am still waiting for you to take a guess')
                .getResponse();
            }
        }
    }
};

const NameWrongIntentHandler = {            //ed11
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'NameWrongIntent';
    },
    handle(handlerInput) {
        if (k===2) {
            const speakOutput = a+'Man: See you tomorrow night. And he was gone. The next night, he comes back again'+
                                'Man: I am back. Have you found my name? You get three more chances.'; a='';k++;

            return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('I do not have all day you know')
            .getResponse(); 

        }
        else if (k===5) {
            const speakOutput = a+'Man: This is boring. But I will not be bored tomorrow night.  The third night is when that baby is mine!'+
                                'And he disappears laughing sinisterly'+
                                'Narrator: The third day, you did not know what to do.  You wished you could tell your husband your woes, but you dare not.  You walk to one side of the room, then back again.  Back and forth, over and over.  This does not help a thing! you say.  You put on your royal cape and hood, and walk outside the castle.'+
                                'If I have silence, maybe I will think of something, you think.  You went into the woods, followed a brook to a big lake, and went past the lake to the deep forest hidden in the darkness.'+
                                'All of a sudden, you see the light of a fire far away.  And there was a voice that was hard to make out.  There was something about that voice, too, but what?  You step closer.  At last, there in front of a fire, a little man danced.  It was he, the very same Alchemist man!  Very quietly, you listen.'+
                                'As the little man danced, he sang'+
                                'Tonight, tonight, my plans i make. Tomorrow, tomorrow, the baby i take. The queen will never win the game. For '+name+' is my name!'+name+'!'+
                                'That night, Man appears.'+'Man: Now guess my name. You get three chances.'; a='';k++;

            return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('Comeon, give me your best guess')
            .getResponse();
                                
        }
        else {
            const speakOutput = a+'Man: Man: Ha! You’ve lost your final chance! Now the baby is mine.'+
                                'And so, the man steals the baby and runs away, never to be seen again.'+
                                'You tell the Prince what happened. He couldn’t believe it at first, but  he had to accept it eventually. You spend the rest of your life searching for your lost child. The end.';
                                a='';

            return handlerInput.responseBuilder
                .speak(speakOutput)
                .getResponse();
        }
        
    }
};

const NameRightIntentHandler = {            //ed1
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'NameRightIntent';
    },
    handle(handlerInput) {
        const speakOutput= 'Man: Impossible! How could you know?'+
                            'Narrator:  The Man disappeared, and no one saw him again near the kingdom. You and the Prince lived happily ever after. The end.';

        return handlerInput.responseBuilder
        .speak(speakOutput)
        .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `Please make your decisions according to the choices given.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('Make your choice please')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        NewGameIntentHandler,
        COneSleepIntentHandler,
        COneEvsIntentHandler,
        COneContIntentHandler,
        CTwoNoIntentHandler,
        CTwoYesIntentHandler,
        CTwoContinueIntentHandler,
        CThreeYesIntentHandler,
        CThreeNoIntentHandler,
        CThreeContinueIntentHandler,
        CFourYesIntentHandler,
        CFourNoIntentHandler,
        CTenNoIntentHandler,
        CTenYesIntentHandler,
        CelevenEnterIntentHandler,
        CelevenProceedIntentHandler,
        CelevenContIntentHandler,
        AOneCaptureIntentHandler,
        AOneRightIntentHandler,
        AOneWrongIntentHandler,
        CTwelveDisagreeIntentHandler,
        CTwelveAgreeIntentHandler,
        CTwelveContIntentHandler,
        CThirteenEnterIntentHandler,
        CThirteenProceedIntentHandler,
        CFiveWanderIntentHandler,
        CFiveEscapeIntentHandler,
        CFiveContinueIntentHandler,
        ATwoCaptureIntentHandler,
        ATwoWrongIntentHandler,
        CFourteenAgreeIntentHandler,
        CFourteenDisagreeIntentHandler,
        HasKeyIntentHandler,
        HasNoKeyIntentHandler,
        ATwoRightIntentHandler,
        CSixEvsIntentHandler,
        CSixSleepIntentHandler,
        CSixContIntentHandler,
        CSevenQuietIntentHandler,
        CEightYourselfIntentHandler,
        CEightChildIntentHandler,
        CNineYesIntentHandler,
        CNineNoIntentHandler,
        CsevenRaiseIntentHandler,
        CsevenContIntentHandler,
        NameCaptureIntentHandler,
        NameWrongIntentHandler,
        NameRightIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();

