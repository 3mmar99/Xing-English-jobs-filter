(function() {
    'use strict';
    const jobsListClass = 'sc-1d9waxr-3';
    const titleClass = '.fuivNx';
    const summaryClass = 'p.b2cfx4-1';
    const companyClass = 'p.clJiAB';
    const bookmarkedClass = '[data-testid="bookmark-action-button-filled"]';
    function isGerman(text) {
        const germanTrigrams = ['sch', 'eit', 'ich', 'die', 'und', 'der', 'ein', 'che', 'nde', 'gen'];
        let count = 0;

        germanTrigrams.forEach(trigram => {
            if (text.includes(trigram)) count++;
        });

        return count > 2;
    }

    setInterval(() => {
        const jobListEl = document.getElementsByClassName(jobsListClass)[0];
        const jobsList = jobListEl?.children;
        if (jobsList) {
            for (let i = 0; i < jobsList.length; i++) {
                if (jobListEl.children.length < 2) continue;
                const eachJobEl = jobsList[i];
                if (eachJobEl.style.display === 'none') continue;

                // Check for bookmarked jobs
                const isBookmarked = eachJobEl.querySelector(bookmarkedClass) !== null;

                const titleText = eachJobEl.querySelector(titleClass)?.textContent.toLowerCase();
                const companyText = eachJobEl.querySelectorAll(companyClass)[1]?.textContent.toLowerCase();
                const summaryText = eachJobEl.querySelector(summaryClass)?.textContent.toLowerCase();

                const textToCheck = titleText + ' ' + companyText + ' ' + summaryText;

                // Hide if either German or bookmarked
                if (isGerman(textToCheck) || isBookmarked) {
                    eachJobEl.style.display = 'none';
                    console.log('REMOVED: ', textToCheck, isBookmarked ? '(Bookmarked)' : '(German)');
                }
            }
        }
    }, 1000);
})();
