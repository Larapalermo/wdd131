window.onload = function () {
    let submissionCount = localStorage.getItem('submissionCount');

    if (!submissionCount) {
        submissionCount = 0;
    }

    submissionCount++;
    localStorage.setItem('submissionCount', submissionCount);

    const submissionCountDiv = document.getElementById('submissionCount');
    submissionCountDiv.textContent = `You has sent ${submissionCount} form(s).`;
};

