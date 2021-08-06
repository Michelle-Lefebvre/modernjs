/* Chuck Norris Generator */
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    // console.log('get jokes');
    const number = document.querySelector('input[id="number"]').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            // console.log(response);

            let output = '';
            if (response.type === 'success') {
                response.value.forEach(function (joke) {
                    output += `<li>${joke.joke}</li>`;
                });
            } else {
                output += '<li> Something went wrong</li>';
            }

            document.querySelector('.jokes').innerHTML = output;
        }
    };

    xhr.send();

    e.preventDefault();
}

/* CALLBACK FUNCTIONS */

const postings = [{
        title: 'Post One',
        body: 'This is post one.'
    },
    {
        title: 'Post Two',
        body: 'This is post Two.'
    },
];
// SYNCHONOUS WAY
// function createPost() {
//     // to mimic the server response time by using setTimeout
//     setTimeout(function () {
//         postings.push(post);
//     }, 2000);
// }

// function getPostings() {
//     setTimeout(function () {
//         let output = '';
//         postings.forEach(function (post) {
//             output += `<li>${post.title}</li>`;
//         });
//         document.querySelector(".calls").innerHTML = output;
//     }, 1000);
// }

// createPost({
//     title: 'Post Three',
//     body: 'This is post three.'
// });

// getPostings();

function createPost(post, callback) {
    // to mimic the server response time by using setTimeout
    setTimeout(function () {
        postings.push(post);
        callback();
    }, 2000);
}

function getPostings() {
    setTimeout(function () {
        let output = '';
        postings.forEach(function (post) {
            output += `<li>${post.title}: ${post.body}</li>`;
        });
        document.querySelector(".calls").innerHTML = output;
    }, 1000);
}


createPost({
    title: 'Post Three',
    body: 'This is post three.'
}, getPostings);