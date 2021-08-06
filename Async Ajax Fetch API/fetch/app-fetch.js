document.getElementById('btn1').addEventListener('click', getText);

function getText() {
    fetch('text.txt').then(function (res) {
            return res.text();
        })
        .then(function (data) {
            console.log(data);
            document.getElementById('outputs').innerHTML = `<p>${res.text()}</p>`;
        })
        .catch(function (err) {
            console.log(err);
        });
}