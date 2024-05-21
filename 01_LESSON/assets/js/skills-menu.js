function showContent(divNumber) {
    // Hide all content divs
    var allContentDivs = document.querySelectorAll('.hidden-div');
    allContentDivs.forEach(function(div) {
        div.style.display = 'none';
    });

    // Show the selected content div
    var selectedContentDiv = document.getElementById('content' + divNumber);
    selectedContentDiv.style.display = 'block';
}
