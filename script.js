// =====================================================
// ELEMENTS
// =====================================================

const envelope =
    document.getElementById("envelope");

const page1 =
    document.getElementById("page1");

const confessionPage =
    document.getElementById("confessionPage");

const storyPage =
    document.getElementById("storyPage");

const finalLetterPage =
    document.getElementById("finalLetterPage");

const messagePage =
    document.getElementById("messagePage");

const giftPage =
    document.getElementById("giftPage");

const addressPage =
    document.getElementById("addressPage");

const startStoryBtn =
    document.getElementById("startStoryBtn");

const openFinalLetterBtn =
    document.getElementById("openFinalLetterBtn");

const giftButton =
    document.getElementById("giftButton");

const openGiftBtn =
    document.getElementById("openGiftBtn");

const submitAddressBtn =
    document.getElementById("submitAddressBtn");

const addressInput =
    document.getElementById("addressInput");

const bgMusic =
    document.getElementById("bgMusic");


// =====================================================
// WHATSAPP NUMBER
// =====================================================

const whatsappNumber =
    "8801603744672";


// =====================================================
// STORY IMAGE ELEMENTS
// =====================================================

const storyEmoji =
    document.getElementById("storyEmoji");

const storyGif =
    document.getElementById("storyGif");

const storyEmojiFallback =
    document.getElementById("storyEmojiFallback");


// =====================================================
// CONFESSION SCROLL INDICATOR
// ONLY FOR CONFESSION PAGE
// =====================================================

const confessionCard =
    confessionPage
        ? confessionPage.querySelector(
            ".confession-card"
        )
        : null;


let confessionScrollIndicator = null;


// =====================================================
// CREATE CONFESSION SCROLL INDICATOR
// =====================================================

if (
    confessionPage &&
    confessionCard
) {

    confessionScrollIndicator =
        document.createElement(
            "div"
        );


    confessionScrollIndicator.innerHTML = `
        <div
            style="
                font-size:20px;
                line-height:1;
                margin-bottom:4px;
            "
        >
            ↓
        </div>

        <div>
            SCROLL DOWN
        </div>
    `;


    confessionScrollIndicator.style.position =
        "fixed";

    confessionScrollIndicator.style.left =
        "50%";

    confessionScrollIndicator.style.bottom =
        "18px";

    confessionScrollIndicator.style.transform =
        "translateX(-50%)";

    confessionScrollIndicator.style.zIndex =
        "99999";

    confessionScrollIndicator.style.padding =
        "8px 17px";

    confessionScrollIndicator.style.borderRadius =
        "25px";

    confessionScrollIndicator.style.background =
        "rgba(223, 21, 89, 0.94)";

    confessionScrollIndicator.style.color =
        "#ffffff";

    confessionScrollIndicator.style.fontFamily =
        "Arial, sans-serif";

    confessionScrollIndicator.style.fontSize =
        "10px";

    confessionScrollIndicator.style.fontWeight =
        "bold";

    confessionScrollIndicator.style.letterSpacing =
        "1.5px";

    confessionScrollIndicator.style.textAlign =
        "center";

    confessionScrollIndicator.style.boxShadow =
        "0 8px 22px rgba(223, 21, 89, 0.30)";

    confessionScrollIndicator.style.pointerEvents =
        "none";

    confessionScrollIndicator.style.opacity =
        "0";

    confessionScrollIndicator.style.visibility =
        "hidden";

    confessionScrollIndicator.style.transition =
        "opacity 0.3s ease, visibility 0.3s ease";

    document.body.appendChild(
        confessionScrollIndicator
    );


    function isKeepGoingVisible() {

        if (!startStoryBtn) {
            return false;
        }

        const buttonRect =
            startStoryBtn.getBoundingClientRect();

        const cardRect =
            confessionCard.getBoundingClientRect();

        return (
            buttonRect.top <
                cardRect.bottom - 10 &&
            buttonRect.bottom >
                cardRect.top + 10
        );
    }


    function updateConfessionScrollIndicator() {

        if (
            !confessionPage.classList.contains(
                "active"
            )
        ) {

            confessionScrollIndicator.style.opacity =
                "0";

            confessionScrollIndicator.style.visibility =
                "hidden";

            confessionScrollIndicator.style.animation =
                "none";

            return;
        }


        const hasScroll =
            confessionCard.scrollHeight >
            confessionCard.clientHeight + 5;


        if (!hasScroll) {

            confessionScrollIndicator.style.opacity =
                "0";

            confessionScrollIndicator.style.visibility =
                "hidden";

            confessionScrollIndicator.style.animation =
                "none";

            return;
        }


        if (
            isKeepGoingVisible()
        ) {

            confessionScrollIndicator.style.opacity =
                "0";

            confessionScrollIndicator.style.visibility =
                "hidden";

            confessionScrollIndicator.style.animation =
                "none";

            return;
        }


        confessionScrollIndicator.style.opacity =
            "1";

        confessionScrollIndicator.style.visibility =
            "visible";

        confessionScrollIndicator.style.animation =
            "confessionIndicatorFloat 1.4s ease-in-out infinite";
    }


    function resetConfessionScrollIndicator() {

        setTimeout(
            function () {

                updateConfessionScrollIndicator();

            },
            250
        );
    }


    function hideConfessionScrollIndicator() {

        confessionScrollIndicator.style.opacity =
            "0";

        confessionScrollIndicator.style.visibility =
            "hidden";

        confessionScrollIndicator.style.animation =
            "none";
    }


    confessionCard.addEventListener(
        "scroll",
        function () {

            updateConfessionScrollIndicator();

        }
    );


    confessionCard.addEventListener(
        "wheel",
        function () {

            setTimeout(
                function () {

                    updateConfessionScrollIndicator();

                },
                20
            );

        },
        {
            passive: true
        }
    );


    confessionCard.addEventListener(
        "touchmove",
        function () {

            setTimeout(
                function () {

                    updateConfessionScrollIndicator();

                },
                20
            );

        },
        {
            passive: true
        }
    );


    confessionCard.addEventListener(
        "touchend",
        function () {

            setTimeout(
                function () {

                    updateConfessionScrollIndicator();

                },
                50
            );

        },
        {
            passive: true
        }
    );


    if (
        typeof ResizeObserver !==
        "undefined"
    ) {

        const confessionResizeObserver =
            new ResizeObserver(
                function () {

                    updateConfessionScrollIndicator();

                }
            );


        confessionResizeObserver.observe(
            confessionCard
        );
    }


    const confessionStyle =
        document.createElement(
            "style"
        );


    confessionStyle.textContent = `

        @keyframes confessionIndicatorFloat {

            0%,
            100% {
                transform:
                    translateX(-50%)
                    translateY(0);
            }

            50% {
                transform:
                    translateX(-50%)
                    translateY(-5px);
            }

        }

    `;


    document.head.appendChild(
        confessionStyle
    );
}


// =====================================================
// STORY DATA
// =====================================================

const stories = [

    {
        number: "01",

        image:
            "https://i.pinimg.com/736x/1b/16/7f/1b167f988433d36326571372bfb0e9cc.jpg",

        emoji: "💌",

        title: "THE BEGINNING",

        english:
            "“We’ve never talked before… but somehow, you’re here.”",

        bangla:
            "“আমাদের কখনো কথা হয়নি… তবুও somehow তুমি এখানে এসে গেছো।”",

        buttons: [
            ["YES — LET'S BEGIN ✨", "next"],
            ["MAYBE LATER 🙈", "next"]
        ]
    },


    {
        number: "02",

        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPOTgwW4snpoamc0_wJpAvzV_dJxBEQ39Big1X1XsLG-44jjcG",

        emoji: "🌸",

        title: "A LITTLE BELIEF",

        english:
            "“Do you believe beautiful things can begin unexpectedly?”",

        bangla:
            "“তুমি কি বিশ্বাস করো, সুন্দর কিছু হঠাৎ করেই শুরু হতে পারে?”",

        buttons: [
            ["YES 🤍", "next"],
            ["MAYBE 🌙", "next"]
        ]
    },


    {
        number: "03",

        image:
            "https://i.pinimg.com/736x/5e/f5/66/5ef56683217ea71290522f1540655cd4.jpg",

        emoji: "🎀",

        title: "ONE LITTLE CHANCE",

        english:
            "“Would you give a complete stranger one little chance to make you smile?”",

        bangla:
            "“একজন সম্পূর্ণ stranger-কে কি তোমাকে একবার হাসানোর সুযোগ দেবে?”",

        buttons: [
            ["I'LL GIVE IT A CHANCE 🌸", "next"],
            ["LET'S SEE 👀", "next"]
        ]
    },


    {
        number: "04",

        image:
            "https://thumbs.dreamstime.com/b/elegant-anime-couple-fashionable-oufits-sitting-together-cityscape-background-449010601.jpg",

        emoji: "🪄",

        title: "THE MYSTERY",

        english:
            "“There’s a reason I made all of this for you.”",

        bangla:
            "“আমি তোমার জন্য এত কিছু বানানোর একটা কারণ আছে।”",

        buttons: [
            ["I WANT TO KNOW 👀", "next"],
            ["KEEP IT SECRET 🤫", "next"]
        ]
    },


    {
        number: "05",

        image:
            "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSyoGxibDfkVMvu_jtHRTcZ_YQiLi4c6foKeJphy5L2dW0stHw8",

        emoji: "🌙",

        title: "TRUST",

        english:
            "“Can you trust me enough to continue?”",

        bangla:
            "“আর একটু এগিয়ে যাওয়ার মতো trust কি আমাকে করবে?”",

        buttons: [
            ["YES 🤍", "next"],
            ["I'M CURIOUS", "next"]
        ]
    },


    {
        number: "06",

        image:
            "https://i.ytimg.com/vi/gVV8nxTiSmc/oardefault.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLDs6xVvZFCiBfxqIBekQmluacfAtA&usqp=CCk",

        emoji: "🎁",

        title: "THE SURPRISE",

        english:
            "“Are you sure you want to know what’s waiting at the end?”",

        bangla:
            "“শেষে কী অপেক্ষা করছে, সেটা সত্যিই জানতে চাও?”",

        buttons: [
            ["YES, I'M READY ✨", "next"],
            ["I'M A LITTLE SCARED 🙈", "next"]
        ]
    },


    {
        number: "07",

        image:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRIIdzfM11duk9Spdvn-TO5f3j3sMN8ECSBc8t52Pphn1WIaLY2",

        emoji: "🌷",

        title: "A THOUGHT",

        english:
            "“Sometimes, people enter our story before we even know them properly.”",

        bangla:
            "“কখনো কখনো কিছু মানুষকে ভালোভাবে চেনার আগেই তারা আমাদের গল্পে এসে যায়।”",

        buttons: [
            ["I AGREE 🤍", "next"],
            ["THAT'S INTERESTING", "next"]
        ]
    },


    {
        number: "08",

        image:
            "https://i.ytimg.com/vi/VDaNc7IiRbo/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLB2Ypij585DNolIwTK7dIKKxSYZgA&usqp=CCk",

        emoji: "💭",

        title: "ONE HONEST ANSWER",

        english:
            "“For the next question, don't think too much. Just be honest.”",

        bangla:
            "“পরের প্রশ্নটার জন্য বেশি ভেবো না। শুধু honest থেকো।”",

        buttons: [
            ["I PROMISE 🤍", "next"],
            ["OKAY 👀", "next"]
        ]
    },


    {
        number: "09",

        image:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSQa2Oj5lb428WxkE8_Ex4fE-Nb6Z1aSjxShuz9OiCx3cObuUj3",

        emoji: "🥹",

        title: "A LITTLE FEELING",

        english:
            "“If someone secretly made all this just to see you smile… would that make you happy?”",

        bangla:
            "“কেউ যদি শুধু তোমাকে হাসানোর জন্য এত কিছু বানাতো… সেটা কি তোমাকে খুশি করত?”",

        buttons: [
            ["YES 🥹", "next"],
            ["THAT'S SWEET", "next"]
        ]
    },


    {
        number: "10",

        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRizcjsd9wp2DiMLclwF7CGOiDcrFmTDGcwJrzDu5fCl0lX0OfM",

        emoji: "🌌",

        title: "TAKE A BREATH",

        english:
            "“Now… take a breath.”",

        bangla:
            "“এবার… একটু সময় নিয়ে ভাবো।”",

        extraEnglish:
            "“Maybe this isn't just a random surprise.”",

        extraBangla:
            "“হয়তো এটা শুধু একটা random surprise না।”",

        buttons: [
            ["I'M LISTENING 🤍", "next"]
        ]
    },


    {
        number: "11",

        image:
            "https://i.pinimg.com/236x/80/cb/d1/80cbd1fa217c162f3aba8a5d2f052dff.jpg",

        emoji: "❤️",

        title: "FIRST QUESTION",

        english:
            "“Do you love me?”",

        bangla:
            "“তুমি কি আমাকে ভালোবাসো?”",

        buttons: [
            ["YES ❤️", "next"],
            ["NO 🤍", "next"]
        ]
    },


    {
        number: "12",

        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTztFlHavup9IG-QEYs6X-d425WlCuKlLxBL9FxrYeOyZLw8gy0",

        emoji: "🥺",

        title: "THINK AGAIN",

        english:
            "“Please… একবার ভেবে দেখো।”",

        bangla:
            "“Maybe your heart already knows the answer.”",

        buttons: [
            ["YES ❤️", "next"],
            ["I'M STILL THINKING", "next"]
        ]
    },


    {
        number: "13",

        image:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR8DxIUw_DMj1-xFFj_xxvSZVRPwY9ebezpy24MCacPD4ETMMZ0",

        emoji: "🫣",

        title: "ONE MORE CHANCE",

        english:
            "“If you had to choose… would you give this unexpected connection a chance?”",

        bangla:
            "“যদি একটা chance দিতে হয়… এই unexpected connection-টাকে কি একটা সুযোগ দেবে?”",

        buttons: [
            ["YES ✨", "next"],
            ["I NEED TIME", "next"]
        ]
    },


    {
        number: "14",

        image:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSdc4kmlmZcp2fe9xCnqVpcV7t45RKHVzhmzUjQkEIpt3akkA7T",

        emoji: "💗",

        title: "BABU MOMENT",

        english:
            "“Please, বাবু… এতদূর এসে আমাকে একদম খালি হাতে ফিরিয়ে দিও না। 🥺”",

        bangla:
            "“একবার মন দিয়ে ভেবে দেখো…”",

        extraEnglish:
            "“Just think about it one more time…”",

        buttons: [
            ["OKAY… ❤️", "next"],
            ["LET ME THINK", "next"]
        ]
    },


    {
        number: "15",

        image:
            "https://i.pinimg.com/736x/f5/1e/7d/f51e7d845fc11c72a869d983aef65512.jpg",

        emoji: "🌙",

        title: "HEART CHECK",

        english:
            "“Forget the buttons for a second.”",

        bangla:
            "“এক সেকেন্ডের জন্য button দুটো ভুলে যাও।”",

        extraEnglish:
            "“What does your heart say?”",

        extraBangla:
            "“তোমার মন কী বলছে?”",

        buttons: [
            ["MY HEART SAYS YES ❤️", "next"],
            ["I'M NOT SURE 🤍", "next"]
        ]
    },


    // =================================================
    // 16 — UPDATED
    // =================================================

    {
        number: "16",

        image:
            "https://i.pinimg.com/736x/d0/69/d0/d069d0bfa202a322bfda005b906cb58c.jpg",

        emoji: "🥹",

        title: "LAST TIME",

        english:
            "“আমি শেষবারের মতো জিজ্ঞেস করছি”",

        bangla:
             "“WILL YOU BE MY GF…?”",

        extraEnglish:
            "“Would you let this little story have a chance?”",

        extraBangla:
            "“এই ছোট্ট গল্পটাকে কি একটা chance দেবে?”",

        buttons: [
            ["YES ❤️", "next"],
            ["NO 🤍", "runNo16"]
        ]
    },


    // =================================================
    // 17
    // =================================================

    {
        number: "17",

        image:
            "https://i.pinimg.com/736x/ae/95/ae/ae95ae6e5481828785d856527bd331b5.jpg",

        emoji: "💌",

        title: "THE FINAL QUESTION",

        english:
            "“One last thing…”",

        bangla:
            "“আর একটা শেষ কথা…”",

        extraEnglish:
            "“Do you love me?”",

        extraBangla:
            "“আপনি কি আমাকে ভালোবাসবেন?”",

        buttons: [
            ["YES ❤️", "finalYes"],
            ["NO 🤍", "finalNo"]
        ],

        final: true
    }

];


// =====================================================
// CURRENT STORY
// =====================================================

let currentStory = 0;


// =====================================================
// STORY IMAGE / EMOJI
// =====================================================

function setStoryVisual(
    imageUrl,
    emoji = "💌"
) {

    if (!storyGif || !storyEmoji) {
        return;
    }

    if (
        imageUrl &&
        imageUrl.trim() !== ""
    ) {

        storyGif.src = imageUrl;

        storyGif.alt = "Story Image";

        storyGif.style.display = "block";

        if (storyEmojiFallback) {

            storyEmojiFallback.textContent = "";

            storyEmojiFallback.style.display =
                "none";
        }

        storyEmoji.style.display = "flex";

        return;
    }


    storyGif.removeAttribute("src");

    storyGif.style.display = "none";


    if (storyEmojiFallback) {

        storyEmojiFallback.textContent =
            emoji;

        storyEmojiFallback.style.display =
            "block";
    }


    storyEmoji.style.display = "flex";
}


// =====================================================
// ENVELOPE
// =====================================================

if (envelope) {

    envelope.addEventListener(
        "click",
        function () {

            if (bgMusic) {

                bgMusic.currentTime = 0;

                bgMusic.play().catch(
                    function () {

                        console.log(
                            "Music was blocked."
                        );

                    }
                );
            }


            const envelopeElement =
                envelope.querySelector(
                    ".envelope"
                );

            if (envelopeElement) {

                envelopeElement.classList.add(
                    "open"
                );
            }


            setTimeout(
                function () {

                    page1.classList.remove(
                        "active"
                    );

                    confessionPage.classList.add(
                        "active"
                    );


                    if (
                        typeof resetConfessionScrollIndicator ===
                        "function"
                    ) {

                        resetConfessionScrollIndicator();

                    }

                },
                1200
            );

        }
    );

}


// =====================================================
// CONFESSION → STORY
// =====================================================

if (startStoryBtn) {

    startStoryBtn.addEventListener(
        "click",
        function () {

            if (
                typeof hideConfessionScrollIndicator ===
                "function"
            ) {

                hideConfessionScrollIndicator();

            }


            confessionPage.classList.remove(
                "active"
            );

            storyPage.classList.add(
                "active"
            );

            currentStory = 0;

            showStory(
                currentStory
            );

        }
    );

}


// =====================================================
// SHOW STORY
// =====================================================

function showStory(index) {

    const story =
        stories[index];

    if (!story) {
        return;
    }


    const card =
        storyPage.querySelector(
            ".story-card"
        );


    storyPage.classList.remove(
        "final-question",
        "wait-screen"
    );


    const oldRunaway =
        document.querySelector(
            ".runaway-no"
        );

    if (oldRunaway) {

        oldRunaway.remove();
    }


    // =================================================
    // REMOVE OLD PAGE 16 HINT
    // =================================================

    const oldPage16Hint =
        document.querySelector(
            ".page16-hint"
        );

    if (oldPage16Hint) {

        oldPage16Hint.remove();
    }


    // =================================================
    // STORY IMAGE
    // =================================================

    setStoryVisual(
        story.image,
        story.emoji
    );


    // =================================================
    // BASIC INFORMATION
    // =================================================

    document.getElementById(
        "storyNumber"
    ).textContent =
        story.number;


    document.getElementById(
        "storyTitle"
    ).textContent =
        story.title;


    document.getElementById(
        "storyEnglish"
    ).textContent =
        story.english;


    document.getElementById(
        "storyBangla"
    ).textContent =
        story.bangla;


    // =================================================
    // EXTRA TEXT
    // =================================================

    const textContainer =
        document.querySelector(
            ".story-text"
        );


    const oldExtra =
        document.getElementById(
            "extraStoryText"
        );


    if (oldExtra) {

        oldExtra.remove();
    }


    if (
        story.extraEnglish ||
        story.extraBangla
    ) {

        const extra =
            document.createElement(
                "div"
            );


        extra.id =
            "extraStoryText";


        extra.innerHTML = `

            ${
                story.extraEnglish
                    ? `
                        <p class="main-line">
                            ${story.extraEnglish}
                        </p>
                    `
                    : ""
            }

            ${
                story.extraBangla
                    ? `
                        <p class="bangla">
                            ${story.extraBangla}
                        </p>
                    `
                    : ""
            }

        `;


        textContainer.appendChild(
            extra
        );
    }


    // =================================================
    // FINAL QUESTION
    // =================================================

    if (story.final) {

        storyPage.classList.add(
            "final-question"
        );
    }


    // =================================================
    // BUTTONS
    // =================================================

    const buttonContainer =
        document.getElementById(
            "storyButtons"
        );


    buttonContainer.innerHTML = "";


    // =================================================
    // PAGE 16 SPECIAL HINT
    // =================================================

    if (index === 15) {

        const hint =
            document.createElement(
                "div"
            );


        hint.className =
            "page16-hint";


        hint.innerHTML = `
            <strong>
                NO button-এ বার বার tap করে দেখুন… একটা little magic আছে! ✨
            </strong>

            <br>

            <span>
                NO button-টা একটু দুষ্টু হবে। 😄
            </span>

            <br>

            <span>
                YES চাপলেন মানেই আপনি আমার GF হতে রাজি হয়েছেন।
                YES-এ ক্লিক করুন, তাহলেই পরের পেজে যেতে পারবেন. ❤️
            </span>
        `;


        buttonContainer.parentNode.insertBefore(
            hint,
            buttonContainer
        );
    }


    // =================================================
    // CREATE BUTTONS
    // =================================================

    story.buttons.forEach(
        function (buttonData) {

            const button =
                document.createElement(
                    "button"
                );


            button.textContent =
                buttonData[0];


            button.className =
                "story-btn";


            // =================================================
            // PAGE 16 RUNAWAY NO
            // =================================================

            if (
                buttonData[1] === "runNo16"
            ) {

                button.classList.add(
                    "no-btn",
                    "runaway-no"
                );


                // ছোট করে রাখা
                button.style.fontSize =
                    "10px";

                button.style.padding =
                    "7px 14px";

                button.style.minWidth =
                    "auto";

                button.style.width =
                    "auto";

                button.style.borderRadius =
                    "20px";


                // Green appearance
                button.style.background =
                    "#20c997";

                button.style.color =
                    "#ffffff";

                button.style.border =
                    "2px solid #0b9f72";

                button.style.boxShadow =
                    "0 7px 20px rgba(32, 201, 151, 0.45)";

                button.style.fontWeight =
                    "bold";


                makeNoRunaway(
                    button
                );

            }


            // =================================================
            // OTHER NO BUTTONS
            // =================================================

            else if (
                buttonData[1] === "no16" ||
                buttonData[1] === "finalNo"
            ) {

                button.classList.add(
                    "no-btn"
                );


                button.addEventListener(
                    "click",
                    function () {

                        handleButton(
                            buttonData[1]
                        );

                    }
                );

            }


            // =================================================
            // YES BUTTON
            // =================================================

            else {

                button.classList.add(
                    "yes-btn"
                );


                button.addEventListener(
                    "click",
                    function () {

                        handleButton(
                            buttonData[1]
                        );

                    }
                );

            }


            buttonContainer.appendChild(
                button
            );

        }
    );


    // =================================================
    // PAGE 16 POSITION
    // NO BUTTON STARTS ABOVE YES
    // =================================================

    if (index === 15) {

        setTimeout(
            function () {

                const yesButton =
                    buttonContainer.querySelector(
                        ".yes-btn"
                    );

                const noButton =
                    buttonContainer.querySelector(
                        ".runaway-no"
                    );


                if (
                    yesButton &&
                    noButton
                ) {

                    const yesRect =
                        yesButton.getBoundingClientRect();


                    noButton.style.position =
                        "absolute";


                    noButton.style.left =
                        "50%";


                    noButton.style.transform =
                        "translateX(-50%) rotate(-2deg)";


                    noButton.style.top =
                        (
                            -noButton.offsetHeight -
                            10
                        ) +
                        "px";


                    noButton.style.zIndex =
                        "50";

                }

            },
            50
        );
    }


    // =================================================
    // RESTART CARD ANIMATION
    // =================================================

    if (card) {

        card.style.animation = "none";

        void card.offsetWidth;

        card.style.animation =
            "cardIn 0.7s ease";
    }

}


// =====================================================
// RUNAWAY NO BUTTON
// =====================================================

function makeNoRunaway(button) {

    function escapeButton(event) {

        event.preventDefault();

        event.stopPropagation();

        moveNoButton(
            button
        );
    }


    button.addEventListener(
        "pointerenter",
        escapeButton
    );


    button.addEventListener(
        "pointerdown",
        escapeButton
    );


    button.addEventListener(
        "touchstart",
        escapeButton,
        {
            passive: false
        }
    );


    button.addEventListener(
        "click",
        escapeButton
    );


    button.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                moveNoButton(
                    button
                );
            }

        }
    );

}


// =====================================================
// MOVE NO BUTTON
// NEVER GO OVER YES
// =====================================================

function moveNoButton(button) {

    const yesButton =
        document.querySelector(
            ".yes-btn"
        );


    if (!yesButton) {
        return;
    }


    const yesRect =
        yesButton.getBoundingClientRect();


    const noRect =
        button.getBoundingClientRect();


    const gap = 80;

    const screenPadding = 20;


    let x = 0;

    let y = 0;


    for (
        let attempt = 0;
        attempt < 200;
        attempt++
    ) {

        const maxX =
            window.innerWidth -
            noRect.width -
            screenPadding;


        const maxY =
            window.innerHeight -
            noRect.height -
            screenPadding;


        x =
            screenPadding +
            Math.random() *
            Math.max(
                1,
                maxX -
                screenPadding
            );


        y =
            screenPadding +
            Math.random() *
            Math.max(
                1,
                maxY -
                screenPadding
            );


        const noLeft =
            x;

        const noRight =
            x +
            noRect.width;

        const noTop =
            y;

        const noBottom =
            y +
            noRect.height;


        const yesLeft =
            yesRect.left -
            gap;

        const yesRight =
            yesRect.right +
            gap;

        const yesTop =
            yesRect.top -
            gap;

        const yesBottom =
            yesRect.bottom +
            gap;


        const overlap =
            noRight > yesLeft &&
            noLeft < yesRight &&
            noBottom > yesTop &&
            noTop < yesBottom;


        if (!overlap) {

            break;
        }
    }


    button.style.position =
        "fixed";


    button.style.left =
        x + "px";


    button.style.top =
        y + "px";


    button.style.zIndex =
        "99999";


    button.style.transition =
        "left 0.22s ease, " +
        "top 0.22s ease, " +
        "transform 0.22s ease";


    button.style.transform =
        "rotate(" +
        (
            Math.random() *
            20 -
            10
        ) +
        "deg)";


    button.style.background =
        "#20c997";

    button.style.color =
        "#ffffff";

    button.style.border =
        "2px solid #0b9f72";

    button.style.boxShadow =
        "0 8px 25px rgba(32, 201, 151, 0.55)";
}


// =====================================================
// BUTTON ACTIONS
// =====================================================

function handleButton(action) {


    // =================================================
    // NORMAL NEXT
    // =================================================

    if (action === "next") {

        currentStory++;


        if (
            currentStory <
            stories.length
        ) {

            showStory(
                currentStory
            );
        }


        return;
    }


    // =================================================
    // QUESTION 16 NO
    // =================================================

    if (action === "no16") {

        showNoMessage(
            "That's okay. Some answers need time. 🤍",
            "ঠিক আছে। কিছু উত্তরের জন্য সময় লাগে।",
            "CONTINUE 🌙"
        );

        return;
    }


    // =================================================
    // FINAL YES
    // =================================================

    if (action === "finalYes") {

        showWaitScreen();

        return;
    }


    // =================================================
    // FINAL NO
    // =================================================

    if (action === "finalNo") {

        showNoMessage(
            "That's okay. Some answers need time. 🤍",
            "ঠিক আছে। কিছু উত্তরের জন্য সময় লাগে।",
            "CLOSE 🤍"
        );

        return;
    }

}


// =====================================================
// NO MESSAGE
// =====================================================

function showNoMessage(
    english,
    bangla,
    buttonText
) {

    const buttonContainer =
        document.getElementById(
            "storyButtons"
        );


    setStoryVisual(
        "",
        ""
    );


    document.getElementById(
        "storyNumber"
    ).textContent =
        "";


    document.getElementById(
        "storyTitle"
    ).textContent =
        "";


    document.getElementById(
        "storyEnglish"
    ).textContent =
        english;


    document.getElementById(
        "storyBangla"
    ).textContent =
        bangla;


    const extra =
        document.getElementById(
            "extraStoryText"
        );


    if (extra) {

        extra.remove();
    }


    const oldHint =
        document.querySelector(
            ".page16-hint"
        );


    if (oldHint) {

        oldHint.remove();
    }


    buttonContainer.innerHTML = "";


    const button =
        document.createElement(
            "button"
        );


    button.textContent =
        buttonText;


    button.className =
        "story-btn yes-btn";


    button.addEventListener(
        "click",
        function () {

            if (
                buttonText ===
                "CLOSE 🤍"
            ) {

                return;
            }


            currentStory++;


            if (
                currentStory <
                stories.length
            ) {

                showStory(
                    currentStory
                );
            }

        }
    );


    buttonContainer.appendChild(
        button
    );

}


// =====================================================
// FINAL YES → WAIT → FINAL LETTER
// =====================================================

function showWaitScreen() {

    storyPage.classList.remove(
        "final-question"
    );

    storyPage.classList.add(
        "wait-screen"
    );


    document.getElementById(
        "storyEmoji"
    ).textContent = "";


    document.getElementById(
        "storyNumber"
    ).textContent = "";


    document.getElementById(
        "storyTitle"
    ).textContent =
        "Wait…";


    document.getElementById(
        "storyEnglish"
    ).textContent = "";


    document.getElementById(
        "storyBangla"
    ).textContent = "";


    const extra =
        document.getElementById(
            "extraStoryText"
        );


    if (extra) {

        extra.remove();
    }


    const oldHint =
        document.querySelector(
            ".page16-hint"
        );


    if (oldHint) {

        oldHint.remove();
    }


    document.getElementById(
        "storyButtons"
    ).innerHTML = "";


    setTimeout(
        function () {

            storyPage.classList.remove(
                "active"
            );

            storyPage.classList.remove(
                "wait-screen"
            );


            finalLetterPage.classList.add(
                "active"
            );

        },
        2200
    );

}


// =====================================================
// FINAL LETTER → FINAL MESSAGE
// =====================================================

if (openFinalLetterBtn) {

    openFinalLetterBtn.addEventListener(
        "click",
        function () {

            finalLetterPage.classList.remove(
                "active"
            );


            messagePage.classList.add(
                "active"
            );


            createHearts(40);

        }
    );

}


// =====================================================
// FINAL MESSAGE → GIFT
// =====================================================

if (giftButton) {

    giftButton.addEventListener(
        "click",
        function () {

            messagePage.classList.remove(
                "active"
            );


            giftPage.classList.add(
                "active"
            );


            createHearts(30);

        }
    );

}


// =====================================================
// GIFT → ADDRESS
// =====================================================

if (openGiftBtn) {

    openGiftBtn.addEventListener(
        "click",
        function () {

            giftPage.classList.remove(
                "active"
            );


            addressPage.classList.add(
                "active"
            );


            createHearts(25);

        }
    );

}


// =====================================================
// ADDRESS → WHATSAPP
// =====================================================

if (submitAddressBtn) {

    submitAddressBtn.addEventListener(
        "click",
        function () {

            const address =
                addressInput
                    ? addressInput.value.trim()
                    : "";


            if (!address) {

                if (addressInput) {

                    addressInput.focus();

                    addressInput.style.border =
                        "2px solid #ff4d6d";

                    setTimeout(
                        function () {

                            addressInput.style.border =
                                "";

                        },
                        1500
                    );
                }

                return;
            }


            const message =
                "Hello ❤️\n\n" +
                "আপনার surprise-এর জন্য address:\n\n" +
                address +
                "\n\n— From your little surprise 💌";


            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(
                    message
                );


            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}


// =====================================================
// HEART ANIMATION
// =====================================================

function createHearts(amount) {

    const emojis = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "🤍",
        "✨"
    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const heart =
            document.createElement(
                "div"
            );


        heart.textContent =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];


        heart.style.position =
            "fixed";


        heart.style.left =
            Math.random() *
            100 +
            "vw";


        heart.style.bottom =
            "-40px";


        heart.style.fontSize =
            (
                15 +
                Math.random() *
                30
            ) +
            "px";


        heart.style.zIndex =
            "100";


        heart.style.pointerEvents =
            "none";


        document.body.appendChild(
            heart
        );


        const duration =
            2 +
            Math.random() *
            3;


        heart.animate(
            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1
                },

                {
                    transform:
                        "translateY(-" +
                        (
                            window.innerHeight +
                            100
                        ) +
                        "px) rotate(" +
                        (
                            Math.random() *
                            720
                        ) +
                        "deg)",

                    opacity: 0
                }
            ],

            {
                duration:
                    duration *
                    1000,

                easing:
                    "ease-out"
            }
        );


        setTimeout(
            function () {

                heart.remove();

            },
            duration *
            1000
        );

    }

}


// =====================================================
// WINDOW RESIZE
// =====================================================

window.addEventListener(
    "resize",
    function () {

        const noButton =
            document.querySelector(
                ".runaway-no"
            );


        if (noButton) {

            moveNoButton(
                noButton
            );
        }


        if (
            typeof updateConfessionScrollIndicator ===
            "function"
        ) {

            updateConfessionScrollIndicator();

        }

    }
);