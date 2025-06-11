const affirmations = [
    {
        positive: "You are capable of amazing things!",
        shade: "Like how you amazingly still haven't done your laundry for two weeks."
    },
    {
        positive: "Your potential is limitless!",
        shade: "So is your ability to procrastinate, apparently."
    },
    {
        positive: "You're glowing today!",
        shade: "Must be all that screen time from scrolling TikTok."
    },
    {
        positive: "You make the world a better place!",
        shade: "One unfinished project at a time."
    },
    {
        positive: "Your creativity knows no bounds!",
        shade: "Especially when it comes to making excuses."
    },
    {
        positive: "You're absolutely perfect just the way you are!",
        shade: "And by perfect, I mean perfectly chaotic."
    },
    {
        positive: "You're a ray of sunshine!",
        shade: "Like, the kind that gives people sunburn."
    },
    {
        positive: "Your confidence is inspiring!",
        shade: "The audacity really is breathtaking."
    },
    {
        positive: "You've got this!",
        shade: "Whatever 'this' is... because I'm not sure you know either."
    },
    {
        positive: "You're making great progress!",
        shade: "At least that's what we'll tell your therapist."
    }
];

const affirmationText = document.getElementById('affirmation');
const shadeText = document.getElementById('shade');
const generateBtn = document.getElementById('generateBtn');

function generateAffirmation() {
    // Add fade-out effect
    affirmationText.style.opacity = 0;
    shadeText.style.opacity = 0;
    
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        const { positive, shade } = affirmations[randomIndex];
        
        affirmationText.textContent = positive;
        shadeText.textContent = shade;
        
        // Add fade-in effect
        affirmationText.style.opacity = 1;
        shadeText.style.opacity = 1;
    }, 300);
}

generateBtn.addEventListener('click', generateAffirmation);