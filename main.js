/*** Mixed Messages Codecademy Javascript Project 

Theme: Tarot, numerology, and positive affirmations

Step 1 - start gathering content for randomly generated messages ***/

const tarotMajorArcana = ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 
'The Hierophant', 'The Lovers', 'The Chariot', 'Strength', 'The Hermit', 'Wheel of Fortune', 
'Justice', 'The Hanged Man', 'Death', 'Temperance', 'The Devil', 'The Tower', 'The Star', 
'The Moon', 'The Sun', 'Judgement', 'The World'];
console.log('No. of tarot: ' + tarotMajorArcana.length);

const tarotMinorCups = ['Ace of Cups', 'Two of Cups', 'Three of Cups', 'Four of Cups', 
'Five of Cups', 'Six of Cups', 'Seven of Cups', 'Eight of Cups', 'Nine of Cups', 
'Ten of Cups', 'Page of Cups', 'Knight of Cups', 'Queen of Cups', 'King of Cups'];

const tarotMinorSwords = ['Ace of Swords', 'Two of Swords', 'Three of Swords', 'Four of Swords',
'Five of Swords', 'Six of Swords', 'Seven of Swords', 'Eight of Swords', 'Nine of Swords',
'Ten of Swords', 'Page of Swords', 'Knight of Swords', 'Queen of Swords', 'King of Swords'];

const tartoMinorPentacles = ['Ace of Pentacles', 'Two of Pentacles', 'Three of Pentacles',
'Four of Pentacles', 'Five of Pentacles', 'Six of Pentacles', 'Seven of Pentacles', 
'Eight of Pentacles', 'Nine of Pentacles', 'Ten of Pentacles', 'Page of Pentacles', 
'Knight of Pentacles', 'Queen of Pentacles', 'King of Pentacles'];

const tarotMinorWands = ['Ace of Wands', 'Two of Wands', 'Three of Wands', 'Four of Wands', 
'Five of Wands', 'Six of Wands', 'Seven of Wands', 'Eight of Wands', 'Nine of Wands', 
'Ten of Wands', 'Page of Wands', 'Knight of Wands', 'Queen of Wands', 'King of Wands'];

// affirmations collected from https://www.developgoodhabits.com/positive-affirmations/
const affirmations = ['My strength is greather than any struggle.',
'I feel profound empathy and love for others and their own unique paths.',
'My life is filled with love, joy and abundance.', 'My body is beautiful and expresses my spirit.',
'I respect my limitations and thank myself for the things I am able to accomplish.',
'I have all the tools I need to succeed.', 'I am empowered to create change in my life.',
'I release negative thoughts and attachments, embracing positivity, gratitude, and love.',
'I am kind and compassionate. I do not judge myself or others', 'I am enough.', 
'I am right where I need to be.', 'I am a magnet for love and abundance.',
'I am surrounded by love.', 'I am whole, I am healed, I am happy, I am free.', 
'I will care for myself as much as I care for others.', 
'I believe in my skills and abilities.', 'I am worthy of all the good things that happen in my life.',
'I am in the flow of my destiny.', 'I achieve all of my goals.', 
'I am calm, patient, and in control of my emotions.', 'New opportunities come easily to me.',
'I have all the power I need to create the success I desire.', 
'Everyting in my life is working out for my highest good.', 
'My heart is filled with gratitude for all that I have and all that is coming to me.',
'I fully let go and trust in divine timing.', 'I allow myself time and space for my soul to heal.',
'I release all energies that no longer serve me, all negativity that surrounds me, and all fears that limit me.',
'I prepare and welcome new changes, new lessons, and new adventures',
'I am strong, courageous, and resilient. I will surmount any challenge',
'I attract people into my life who accept me and love me for who I am.',
'I see every situation, no matter how challenging, as an opportunity to heal and grow.',
'I move beyond forgiveness to love, understanding, and compassion.',
'I trust in the Universe that all things are unfolding as they are meant to.',
'I am patient, kind, and compassionate towards others.']
console.log('No. of affirmations: ' + affirmations.length);



