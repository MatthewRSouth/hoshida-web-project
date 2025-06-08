// Setting up the image carousel
let myIndex = 0;
carousel();

function carousel() {
    //function cycles through the images of the carosoul
    // Replace your entire carousel function with this one

    let myIndex = 0;
    carousel();

    function carousel() {
        let i;
        let x = document.querySelectorAll('.mySlides');
        for (i = 0; i < x.length; i++) {
            // Remove 'showing' from all slides
            x[i].classList.remove('showing');
        }
        myIndex++;
        if (myIndex > x.length) {
            myIndex = 1;
        }
        // Add 'showing' to only the current slide
        x[myIndex - 1].classList.add('showing');
        setTimeout(carousel, 3000); // Change image every 3 seconds
    }
}

//objects holding Japanese and English translations.
const jpnLang = {
    heroTitle: 'お子様が主役の英語レッスン', //楽しくてアクティブな英語の授業
    heroDescription: '遊び、笑い、学ぶ姿を、まずは無料体験を',
    submit: 'ご予約される方はこちら!',
    attentionTitle: '少人数クラス',
    attentionDescription:
        '１クラスは５人から７人の少人数で、先生たちが一人一人に目を配り、それぞれに合ったサポートができます。子どもたちにとって大切な学びの時間を、最大限に活かせる環境作りをしています。',
    genuineEnglishTitle: '本物の英語にふれる',
    genuine_EnglishDescription:
        '先生たちとのやりとりはもちろん、日々のすべての活動も英語で行うことによって、子どもたちと強いつながりを作りながら、英語力を育てます。',
    subjectsTitle: '英語以外の学び',
    subjectsDescription:
        'メインは英語ですが、４歳児クラスからアート、サイエンス、算数、体育、音楽の授業を行っています。私たちは子どもたちに、様々な分野でバランスよく知識を得てほしいと思っています。',
    family: '家族のようなつながり',
    games: 'ゲームで英語を楽しく学ぶ',
    memories: '心に残る思いで作り',
};

const engLang = {
    heroTitle: 'English Lessons Your Child Will Love.',
    heroDescription:
        'Book a free trial class and watch them smile, play, and learn.',
    submit: 'Show me a trial lesson!',
    attentionTitle: 'Individual Attention',
    attentionDescription:
        'We have small classes and teachers have 5-7 kids at one time. We are able to give individual attention to each child and ensure they are getting the most of this valuable experience.',
    genuineEnglishTitle: 'Genuine English',
    genuine_EnglishDescription:
        'We speak in English, and do activities in English. As teachers we pride ourselves with making genuine connections with the kids, and fostering their English speaking skills.',
    subjectsTitle: 'Subjects',
    subjectsDescription:
        'English is the main subject we teach, but we also do art, science, math, and PE with the older children. We want them to be well rounded individuals who are able to excel in any subject.',
    family: 'Learning like Family',
    games: 'Learning English through Games',
    memories: 'Creating Lasting Memories',
};

// JS to HTML Selectors
const slider = document.querySelector('.slider');

//hero section
const hero_heading = document.querySelector('.js-hero-heading');
const heroDescription = document.querySelector('.js-hero-description');
const heroInputName = document.querySelector('.hero-form-name');
const heroEmailName = document.querySelector('.hero-form-email');

//footer
const footerInputName = document.querySelector('.footer-form-name');
const footerEmailName = document.querySelector('.footer-form-email');
const footerSubmitBtn = document.querySelector('.js-footer-submit-button');

//submit button
const submitButton = document.querySelector('.js-submit-button');

//feature cards
const individualAttentionCardHeader = document.querySelector(
    '.js-card-header-individual-attention'
);
const individualAttentionCardDescription = document.querySelector(
    '.js-card-description-individual-attention'
);
const genuineEnglishCardHeader = document.querySelector(
    '.js-genuine-english-header'
);
const genuineEnglishCardDescription = document.querySelector(
    '.js-genuine-english-description'
);
const subjectsCardHeader = document.querySelector('.js-subjects-header');
const subjectsCardDescription = document.querySelector(
    '.js-subjects-description'
);
//Values Section
const familyDescription = document.querySelector('.js-family-description');
const gamesDescription = document.querySelector('.js-games-description');
const memoriesDescription = document.querySelector('.js-family-memories');

// Handles the state b/w English and Japanese languages, and changes the textcontent based on the desired language
if (slider) {
    slider.addEventListener('click', function () {
        if (this.dataset.lang === 'EN' || !this.dataset.lang) {
            //-----Japanese----
            this.dataset.lang = '日本';
            this.style.setProperty('--slider-content', '"日本');
            //Hero Section
            hero_heading.textContent = jpnLang.heroTitle;
            heroDescription.innerHTML = jpnLang.heroDescription;
            heroInputName.placeholder = 'お名前';
            heroEmailName.placeholder = 'メールアドレス';
            //Footer section
            footerInputName.placeholder = 'お名前';
            footerEmailName.placeholder = 'メールアドレス';
            //Submit Buttons
            submitButton.textContent = jpnLang.submit;
            footerSubmitBtn.textContent = jpnLang.submit;
            //Feature Cards
            individualAttentionCardHeader.textContent = jpnLang.attentionTitle;
            individualAttentionCardDescription.textContent =
                jpnLang.attentionDescription;
            genuineEnglishCardHeader.textContent = jpnLang.genuineEnglishTitle;
            genuineEnglishCardDescription.textContent =
                jpnLang.genuine_EnglishDescription;
            subjectsCardHeader.textContent = jpnLang.subjectsTitle;
            subjectsCardDescription.textContent = jpnLang.subjectsDescription;
            //Values Section
            familyDescription.textContent = jpnLang.family;
            gamesDescription.textContent = jpnLang.games;
            memoriesDescription.textContent = jpnLang.memories;
        } else {
            //-----English----
            this.dataset.lang = 'EN';
            this.style.setProperty('--slider-content', '"EN');
            //Hero Section
            hero_heading.textContent = engLang.heroTitle;
            heroDescription.textContent = engLang.heroDescription;
            heroInputName.placeholder = 'Name';
            heroEmailName.placeholder = 'E-mail';
            //Footer section
            footerInputName.placeholder = 'Name';
            footerEmailName.placeholder = 'E-mail';
            //submit buttons
            submitButton.textContent = engLang.submit;
            footerSubmitBtn.textContent = engLang.submit;
            //Feature section
            individualAttentionCardHeader.textContent = engLang.attentionTitle;
            individualAttentionCardDescription.textContent =
                engLang.attentionDescription;
            genuineEnglishCardHeader.textContent = engLang.genuineEnglishTitle;
            genuineEnglishCardDescription.textContent =
                engLang.genuine_EnglishDescription;
            subjectsCardHeader.textContent = engLang.subjectsTitle;
            subjectsCardDescription.textContent = engLang.subjectsDescription;
            //Values Section
            familyDescription.textContent = engLang.family;
            gamesDescription.textContent = engLang.games;
            memoriesDescription.textContent = engLang.memories;
        }
    });
}
const heroForm = document.querySelector('.hero-form');
const footerForm = document.querySelector('.footer-form');
const GOOGLE_FORM_ACTION_URL = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSdm2gYgHpAhhsghcHIptLqJLC8MYGIt6A61fZ__9PqRrvZLzg/formResponse`;
const heroFormMessage = document.querySelector('.hero-form-message');
const footerFormMessage = document.querySelector('.footer-form-message');
heroForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';

    const formData = new FormData(heroForm);

    try {
        const response = await fetch(GOOGLE_FORM_ACTION_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: formData,
        });
        window.location.href = './ThankYou.html';
    } catch (error) {
        console.error('Error submitting form: ', error);
        heroFormMessage.textContent = 'An error has occured, please try again';
        heroFormMessage.style.color = 'red';
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Submit';
    }
});

footerForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    footerSubmitBtn.disabled = true;
    footerSubmitBtn.textContent = 'Submitting...';

    const formData = new FormData(footerForm);

    try {
        const response = await fetch(GOOGLE_FORM_ACTION_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: formData,
        });
        window.location.href = './ThankYou.html';
    } catch (error) {
        console.error('Error submitting form', error);
        footerFormMessage.textContent =
            'An error has occured, please try again';
        footerFormMessage.style.color = 'red';
    } finally {
        footerSubmitBtn.disabled = false;
        footerSubmitBtn.textContent = 'Submit';
    }
});
