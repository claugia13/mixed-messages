/*** Mixed Messages Codecademy Javascript Project 

Theme: Tarot and positive affirmations ***/

// Step 1 - start gathering content for randomly generated messages 
// Step 2 - Concatenate the tarot arrays

const tarotMajorArcana = ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 
'The Hierophant', 'The Lovers', 'The Chariot', 'Strength', 'The Hermit', 'Wheel of Fortune', 
'Justice', 'The Hanged Man', 'Death', 'Temperance', 'The Devil', 'The Tower', 'The Star', 
'The Moon', 'The Sun', 'Judgement', 'The World'];
//console.log('No. of tarotMajorArcana: ' + tarotMajorArcana.length);

const tarotMinorWands = ['Ace of Wands', 'Two of Wands', 'Three of Wands', 'Four of Wands', 
'Five of Wands', 'Six of Wands', 'Seven of Wands', 'Eight of Wands', 'Nine of Wands', 
'Ten of Wands', 'Page of Wands', 'Knight of Wands', 'Queen of Wands', 'King of Wands'];
//console.log('No. of tarotMinorWands: ' + tarotMinorWands.length);

const tarotMinorCups = ['Ace of Cups', 'Two of Cups', 'Three of Cups', 'Four of Cups', 
'Five of Cups', 'Six of Cups', 'Seven of Cups', 'Eight of Cups', 'Nine of Cups', 
'Ten of Cups', 'Page of Cups', 'Knight of Cups', 'Queen of Cups', 'King of Cups'];
//console.log('No. of tarotMinorCups: ' + tarotMinorCups.length);

const tarotMinorSwords = ['Ace of Swords', 'Two of Swords', 'Three of Swords', 'Four of Swords',
'Five of Swords', 'Six of Swords', 'Seven of Swords', 'Eight of Swords', 'Nine of Swords',
'Ten of Swords', 'Page of Swords', 'Knight of Swords', 'Queen of Swords', 'King of Swords'];
//console.log('No. of tarotMinorSwords: ' + tarotMinorSwords.length);

const tarotMinorPentacles = ['Ace of Pentacles', 'Two of Pentacles', 'Three of Pentacles',
'Four of Pentacles', 'Five of Pentacles', 'Six of Pentacles', 'Seven of Pentacles', 
'Eight of Pentacles', 'Nine of Pentacles', 'Ten of Pentacles', 'Page of Pentacles', 
'Knight of Pentacles', 'Queen of Pentacles', 'King of Pentacles'];
//console.log('No. of tarotMinorPentacles: ' + tarotMinorPentacles.length);

// Concatenate together the separate major and minor arcana tarot cards arrays into one large array
const tarotDeck = tarotMajorArcana.concat(tarotMinorWands, tarotMinorCups, tarotMinorSwords, tarotMinorPentacles);

// tarot card meanings from https://www.thetarotlady.com/tarot-card-meanings/
const tarotMajorMeanings = ['Take a chance.', 'Manifest your destiny.', 'Keep your third eye open.', 
'You rule.', "Who's your daddy?", 'Seek guidance.', 'Love is the law.', 'A triumph awaits.', 
"You've got this!", 'Alone again.', 'What goes up must go down.', 'Follow the rule of law.', 
'Let it go.', "It's over.", 'Seek the middle way.', 'The devil is in the details.', 'Burn it down.',
'Hope floats.', "Who's afraid of the dark?", 'Happy times.', 'Rise and shine!', 'Spiritual graduation.'];
//console.log('No. of tarotMajorMeanings: ' + tarotMajorMeanings.length);

const tarotWandsMeanings = ['Thumbs up!', 'The world is your oyster', 'Your ship is sailing in',
'Celebrate good times, come on!', 'Let the games begin!', "You're a winner!", 'Hold your ground.',
'Going the distance.', 'Watch your back.', 'Take a load on.', 'The firestarter.', "And he's off!", 
"She's lit!", 'The inspiring leader.'];
//console.log('No. of tarotWandsMeanings: ' + tarotWandsMeanings.length);

const tarotCupsMeanings = ['Love overflows.', 'The attraction factor.', "Girl's night out.", 
'Meh...so boring.', 'Grieve for what is lost.', 'A blast from the past.', 'A kid in a candy store.',
'The seeker.', 'Wishes fulfilled!', 'All in the family.', 'The beloved child.', 'The romantic hero.',
'The intuitive.', 'The King of Love.'];
//console.log('No. of tarotCupsMeanings: ' + tarotCupsMeanings.length);

const tarotSwordsMeanings = ['Truth is your weapon.', 'Wait it out.', 'Unbreak your heart.', 'Put it to rest.',
'The victory through deceit.', 'Smooth sailing ahead.', 'Getting away with it.', "It's an inside job.", 
'Sleepless nights.', "Stick a fork in it...it's done.", 'Ready for action.', 'The sharpshooter.', 
'Killer Queen.', 'Mr. Spock.'];
//console.log('No. of tarotSwordsMeanings: ' + tarotSwordsMeanings.length);

const tarotPentaclesMeanings = ["Mo' money.", 'The Juggler.', "Let's work together.", 'The Miser.', 
'The Outsiders.', "Ain't too proud to beg.", 'A watched pot never boils.', 'Whistle while you work.',
"Treat yo' self!", 'The Legacy.', 'The good pupil.', 'Mr. Reliable.', 'The Earth Mother.', 'King Midas.'];
//console.log('No. of tarotPentaclesMeanings: ' + tarotPentaclesMeanings.length);

// Concatenate together the separate major and minor arcana tarot card meanings arrays into one large array
const tarotMeanings = tarotMajorMeanings.concat(tarotWandsMeanings, tarotCupsMeanings, tarotSwordsMeanings, tarotPentaclesMeanings);

const tarotMajorAffirmations = ['I am ready for the next chapter in my life.',
'I recognize my ability to manifest my goals through the skills I have within me.',
'All the answers I need are within myself. I trust my own intuition.', 'My creativity and abundance are unlimited.', 
'I am my own authority.','I embrace traditions both old and new.', 'I am love.',
'I can steer my life in any way that I wish.', 'I have the power to change anything in my life.',
'Everything I need is within me. I don\'t need to look outside myself for answers.', 'I create my own luck.',
'I treat others the way I want to be treated.', 'I trust that things will work out as they should.',
'I embrace change with an open mind.', 'I create perfect harmony in my life.', 
'I find the courage to release my limitations.', 'I am ready to evolve.', 'I see the good in myself and in my situation.',
'I know that I will find my way.', 'My future is bright and filled with possibilities.', 
'I am ready to receive my higher calling.', 'I am complete.'];
//console.log('No. of tarotMajorAffirmations: ' + tarotMajorAffirmations.length);

const tarotWandsAffirmations = ['I am ready and willing to accept a new opportunity.', 
'I am in control of my world.', 'I am ready to expand my world. My potential is unlimited.', 
'I have so many reasons to celebrate.', 'I am pursuing my goals with vigor and complete confidence.', 
'I easily achieve my goals.', 'I am willing to defend myself.', 'I am moving forward with quickness and precision.',
'I am safe.', 'I work hard towards my goals and remember to rest when my work is done.', 
'I am planting new seeds and am willing to learn how to grow them.', 'I am moving towards my goals with passion and enthusiasm.',
'I am powerfully creative. I trust and stoke my inner creative fire.', 'I lead with passion and courage.'];
//console.log('No. of tarotWandsAffirmations: ' + tarotWandsAffirmations.length);

const tarotCupsAffirmations = ['I am open to love.', 'I attract healthy and positive relationships.', 
'I celebrate life every day.', 'I choose to see the opportunities in front of me.', 
'I am ready to deal with my losses and regrets in a healthy manner.', 'I respect the past but embrace the present moment.',
'I am willing to do what I can to make my dreams a reality.', 'I am ready to leave behind anything that is hindering my spiritual growth.', 
'I am grateful for the abundance that surrounds me now.', 'I have all the love and support I need.', 
'I am willing to express my feelings to my loved ones.', 'I bring my innermost dreams to life.', 
'I am in touch with my sensitivity', 'I nurture and guide those who need it.'];
//console.log('No. of tarotCupsAffirmations: ' + tarotCupsAffirmations.length);

const tarotSwordsAffirmations = ['I speak my truth with conviction and power.', 'I make decisions that feel right for me.',
'I can use my pain as a tool for growth.', 'I think before I act.', 'No matter what is happening around me, I stand strong in my truth.',
'I am ready to move forward.', 'I resolve to do the right thing, even if the other way looks easier.', 
'I am always able to find a way.', 'I face my deepest fears and heal them.', 'I am willing to release the past and start again.',
'Truth is my weapon.', 'I speak my truth but still respect other people\'s truths.', 'I speak my truth with absolute confidence. I get my point across clearly.', 
'I always operate from a place of clarity and truth.'];
//console.log('No. of tarotSwordsAffirmations: ' + tarotSwordsAffirmations.length);

const tarotPentaclesAffirmations = ['I am open to receive the very best the Universe has to offer me.', 
'I easily manage my life.', 'I am open to learning new skills and working with others.', 'I feel secure. I have enough.', 
'I can get through this.', 'I am grateful for the gifts and blessings I have.', 'I am willing to wait for my reward.', 
'I love my work.', 'It is safe for me to be abundant and wealthy.', 'I am creating a secure future for myself and my family.', 
'The seeds I plant will grow.', 'I commit to my goals.', 'I take care of my loved ones and myself.', 'I treat my resources and loved ones with respect.'];
//console.log('No. of tarotPentaclesAffirmations: ' + tarotPentaclesAffirmations.length);

// Concatenate together the separate major and minor arcana tarot affirmations arrays into one large array
const tarotAffirmations = tarotMajorAffirmations.concat(tarotWandsAffirmations, tarotCupsAffirmations, tarotSwordsAffirmations, tarotPentaclesAffirmations);

const majorArcanaDescription = ['The Major Arcana symbolizes the big picture, fate, or major lessons. These are the things and events that feel outside our control but help us to grow.'];
const minorArcanaDescription = ['The Minor Arcana symbolizes our day to day activities, the things that we can control, and the people who may be influencing situations.'];
const wandsDescription = ['Wands symbolize creativity, enterprise, work and passion. The element is Fire.'];
const cupsDescription = ['Cups symbolize live, relationships, and our feelings. The element is Water.'];
const swordsDescription = ['Swords symbolize conflicts, thoughts, and mental processes. The element is Air.'];
const pentaclesDescription = ['Pentacles symbolize money, material goods, security, and our values. The element is Earth.']

// generate a random number between within a certain interval min to max (min and max included)
let randomNumFromInterval = (min, max) => {
    return Math.floor(Math.random()*(max-min + 1) + min);
}
let randomTarotCard = tarotDeck[randomNumFromInterval(0, tarotDeck.length -1)];
console.log('randomNumFromInterval: ' + randomNumFromInterval(0, tarotDeck.length - 1));

console.log('tarotDeck.length: ' + tarotDeck.length);
console.log('randomTarotCard: ' + randomTarotCard);


