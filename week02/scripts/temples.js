window.addEventListener('DOMContentLoaded', (event) => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes() < 10 ? '0' + currentDate.getMinutes() : currentDate.getMinutes();
    const seconds = currentDate.getSeconds() < 10 ? '0' + currentDate.getSeconds() : currentDate.getSeconds();

    let date = document.getElementById("date");
    date.innerHTML = `Last Modification: ${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;




    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var images = document.querySelectorAll('.image-container img');

    images.forEach(img => {
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.dataset.highResSrc || this.src;
            captionText.innerHTML = this.alt || this.parentNode.nextElementSibling.textContent;
        }
    });

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
});


