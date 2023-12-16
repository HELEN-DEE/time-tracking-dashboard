'use strict'

import jsonData from './data.json' assert { type: 'json' };

const mainContent = document.getElementById('main-content')

const dailyBtn = document.getElementById('daily-btn');
const weeklyBtn = document.getElementById('weekly-btn');
const monthlyBtn = document.getElementById('monthly-btn');

const work = jsonData[0];
const play = jsonData[1];
const study = jsonData[2];
const exercise = jsonData[3];
const social = jsonData[4];
const selfCare = jsonData[5];

// Timeframes
const workTimeFrame = work.timeframes;
const playTimeFrame = play.timeframes;
const studyTimeFrame = study.timeframes;
const exerciseTimeFrame = exercise.timeframes;
const socialTimeFrame = social.timeframes;
const selfCareTimeFrame = selfCare.timeframes;

dailyBtn.addEventListener('click', () => {
    mainContent.innerHTML = `
        <div class="tile-for-each">
            <div class="flex-jc-end work-img-bg border-top">
                <img src="images/icon-work.svg" alt="work-img" />
            </div>
            <div class="content-time tile-adjust">
                <h4>
                    ${work.title} <span><img src="images/icon-ellipsis.svg" alt="" /></span>
                </h4>
                <h1>${workTimeFrame.daily.current}hrs</h1>
                <p>last week - ${workTimeFrame.daily.previous}hrs</p>
            </div>
        </div>
        <div class="tile-for-each">
            <div class="flex-jc-end play-img-bg border-top">
                <img src="images/icon-play.svg" alt="play-img" />
            </div>
            <div class="content-time tile-adjust">
                <h4>
                    ${play.title} <span><img src="images/icon-ellipsis.svg" alt="" /></span>
                </h4>
                <h1>${playTimeFrame.daily.current}hrs</h1>
                <p>last week - ${playTimeFrame.daily.previous}hrs</p>
            </div>
        </div>
        <div class="tile-for-each">
            <div class="flex-jc-end study-img-bg border-top">
                <img src="images/icon-study.svg" alt="study-img" />
            </div>
            <div class="content-time tile-adjust">
                <h4>
                    ${study.title} <span><img src="images/icon-ellipsis.svg" alt="" /></span>
                </h4>
                <h1>${studyTimeFrame.daily.current}hrs</h1>
                <p>last week - ${studyTimeFrame.daily.previous}hrs</p>
            </div>
        </div>
        <div class="tile-for-each">
            <div class="flex-jc-end exercise-img-bg border-top">
                <img src="images/icon-exercise.svg" alt="exercise-img" />
            </div>
            <div class="content-time tile-adjust">
                <h4>
                    ${exercise.title} <span><img src="images/icon-ellipsis.svg" alt="" /></span>
                </h4>
                <h1>${exerciseTimeFrame.daily.current}hrs</h1>
                <p>last week - ${exerciseTimeFrame.daily.previous}hrs</p>
            </div>
        </div>
        <div class="tile-for-each">
            <div class="flex-jc-end social-img-bg border-top">
                <img src="images/icon-social.svg" alt="study-img" />
            </div>
            <div class="content-time tile-adjust">
                <h4>
                    ${social.title} <span><img src="images/icon-ellipsis.svg" alt="" /></span>
                </h4>
                <h1>${socialTimeFrame.daily.current}hrs</h1>
                <p>last week - ${socialTimeFrame.daily.previous}hrs</p>
            </div>
        </div>
        <div class="tile-for-each">
            <div class="flex-jc-end selfCare-img-bg border-top">
                <img src="images/icon-self-care.svg" alt="selfCare-img" />
            </div>
            <div class="content-time tile-adjust">
                <h4>
                    ${selfCare.title} <span><img src="images/icon-ellipsis.svg" alt="" /></span>
                </h4>
                <h1>${selfCareTimeFrame.daily.current}hrs</h1>
                <p>last week - ${selfCareTimeFrame.daily.previous}hrs</p>
            </div>
        </div>`;

        dailyBtn.classList.add('active')

        weeklyBtn.classList.remove('active')
        monthlyBtn.classList.remove('active')
});

weeklyBtn.addEventListener('click', () => {
    mainContent.innerHTML = `
    <div class="tile-for-each">
        <div class="flex-jc-end work-img-bg border-top">
            <img src="images/icon-work.svg" alt="work-img" />
        </div>
            <div class="content-time tile-adjust">
            <h4>
                ${work.title} <span><img src="images/icon-ellipsis.svg" alt="" /></span>
            </h4>
            <h1>${workTimeFrame.weekly.current}hrs</h1>
            <p>last week - ${workTimeFrame.weekly.previous}hrs</p>
            </div>
        </div>
        <div class="tile-for-each">
            <div class="flex-jc-end play-img-bg border-top">
            <img src="images/icon-play.svg" alt="play-img" />
            </div>
            <div class="content-time tile-adjust">
            <h4>
                ${play.title} <span><img src="images/icon-ellipsis.svg" alt="" /></span>
            </h4>
            <h1>10hrs</h1>
            <p>last week - 5hrs</p>
            </div>
        </div>
        <div class="tile-for-each">
            <div class="flex-jc-end study-img-bg border-top">
            <img src="images/icon-study.svg" alt="study-img" />
            </div>
            <div class="content-time tile-adjust">
                <h4>
                    Study <span><img src="images/icon-ellipsis.svg" alt="" /></span>
                </h4>
                <h1>${playTimeFrame.weekly.current}hrs</h1>
                <p>last week - ${workTimeFrame.weekly.previous}hrs</p>
            </div>
        </div>
        <div class="tile-for-each">
            <div class="flex-jc-end exercise-img-bg border-top">
                <img src="images/icon-exercise.svg" alt="exercise-img" />
            </div>
            <div class="content-time tile-adjust">
                <h4>
                ${exercise.title}<span><img src="images/icon-ellipsis.svg" alt="" /></span>
                </h4>
                <h1>${exerciseTimeFrame.weekly.current}hrs</h1>
                <p>last week - ${exerciseTimeFrame.weekly.previous}hrs</p>
            </div>
        </div>
        <div class="tile-for-each">
            <div class="flex-jc-end social-img-bg border-top">
                <img src="images/icon-social.svg" alt="exercise-img" />
            </div>
            <div class="content-time tile-adjust">
                <h4>
                ${social.title} <span><img src="images/icon-ellipsis.svg" alt="" /></span>
                </h4>
                <h1>${socialTimeFrame.weekly.current}hrs</h1>
                <p>last week - ${socialTimeFrame.weekly.previous}hrs</p>
            </div>
            </div>
            <div class="tile-for-each">
            <div class="flex-jc-end selfCare-img-bg border-top">
                <img src="images/icon-self-care.svg" alt="exercise-img" />
            </div>
            <div class="content-time tile-adjust">
                <h4>
                ${selfCare.title}
                <span><img src="images/icon-ellipsis.svg" alt="" /></span>
                </h4>
                <h1>${selfCareTimeFrame.weekly.current}hrs</h1>
                <p>last week - ${selfCareTimeFrame.weekly.previous}hrs</p>
            </div>
        </div>
    `;
    weeklyBtn.classList.add('active')

    dailyBtn.classList.remove('active')
    monthlyBtn.classList.remove('active')
});

monthlyBtn.addEventListener('click', () => {
    mainContent.innerHTML = `
    <div class="tile-for-each">
    <div class="flex-jc-end work-img-bg border-top">
        <img src="images/icon-work.svg" alt="work-img" />
    </div>
    <div class="content-time tile-adjust">
        <h4>
        ${work.title} <span><img src="images/icon-ellipsis.svg" alt="" /></span>
        </h4>
        <h1>${workTimeFrame.monthly.current}hrs</h1>
        <p>last week - ${workTimeFrame.monthly.previous}hrs</p>
    </div>
    </div>
    <div class="tile-for-each">
    <div class="flex-jc-end play-img-bg border-top">
        <img src="images/icon-play.svg" alt="play-img" />
    </div>
    <div class="content-time tile-adjust">
        <h4>
        ${play.title} <span><img src="images/icon-ellipsis.svg" alt="" /></span>
        </h4>
        <h1>${playTimeFrame.monthly.current}hrs</h1>
        <p>last week - ${playTimeFrame.monthly.previous}hrs</p>
    </div>
    </div>
    <div class="tile-for-each">
    <div class="flex-jc-end study-img-bg border-top">
        <img src="images/icon-study.svg" alt="study-img" />
    </div>
    <div class="content-time tile-adjust">
        <h4>
        ${study.title} <span><img src="images/icon-ellipsis.svg" alt="" /></span>
        </h4>
        <h1>${studyTimeFrame.monthly.current}hrs</h1>
        <p>last week - ${studyTimeFrame.monthly.previous}hrs</p>
    </div>
    </div>
    <div class="tile-for-each">
    <div class="flex-jc-end exercise-img-bg border-top">
        <img src="images/icon-exercise.svg" alt="exercise-img" />
    </div>
    <div class="content-time tile-adjust">
        <h4>
        ${exercise.title} <span><img src="images/icon-ellipsis.svg" alt="" /></span>
        </h4>
        <h1>${exerciseTimeFrame.monthly.current}hrs</h1>
        <p>last week - ${exerciseTimeFrame.monthly.previous}hrs</p>
    </div>
    </div>
    <div class="tile-for-each">
    <div class="flex-jc-end social-img-bg border-top">
        <img src="images/icon-social.svg" alt="study-img" />
    </div>
    <div class="content-time tile-adjust">
        <h4>
        ${social.title} <span><img src="images/icon-ellipsis.svg" alt="" /></span>
        </h4>
        <h1>${socialTimeFrame.monthly.current}hrs</h1>
        <p>last week - ${socialTimeFrame.monthly.current}hrs</p>
    </div>
    </div>
    <div class="tile-for-each">
    <div class="flex-jc-end selfCare-img-bg border-top">
        <img src="images/icon-self-care.svg" alt="selfCare-img" />
    </div>
    <div class="content-time tile-adjust">
        <h4>
        ${selfCare.title} <span><img src="images/icon-ellipsis.svg" alt="" /></span>
        </h4>
        <h1>${selfCareTimeFrame.monthly.current}hrs</h1>
        <p>last week - ${selfCareTimeFrame.monthly.previous}hrs/p>
    </div>
    </div>
    `;

    monthlyBtn.classList.add('active')

    dailyBtn.classList.remove('active')
    weeklyBtn.classList.remove('active')
})
