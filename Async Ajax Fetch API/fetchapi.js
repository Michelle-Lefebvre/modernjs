document.getElementById('btn1').addEventListener('click', getText);

function getText() {
    fetch('text.txt')
        .then(function (res) {
            console.log(res);
            document.getElementById('outputs').innerHTML = `<p>${res.text()}</p>`;
            return res.text();
        });
}