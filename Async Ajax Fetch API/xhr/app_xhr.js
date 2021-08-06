// add event listener
document.getElementById('button').addEventListener('click', loadData);

function loadData() {

    // Step 1: Create an XHR Object
    const xhr = new XMLHttpRequest();

    // Step 2: Open method - type of request
    xhr.open('GET', 'data.txt', true);
    console.log("READYSTATE", xhr.readyState);

    // Step 2B: Optional - Used for spinners/loader
    xhr.onprogress = function () {
        console.log("READYSTATE", xhr.readyState);
    };

    // Step 3: Check status - onload is a new method
    xhr.onload = function () {
        console.log("READYSTATE", xhr.readyState);
        if (this.status === 200) {
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<p>${this.responseText}</p>`;
        }
    };

    // Step 3: old way of checking status
    // xhr.onreadystatechange = function () {
    //     console.log("READYSTATE", xhr.readyState);
    //     if (this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // }

    // Step 4: onerror
    xhr.onerror = function () {
        console.log('Request error...');
    }

    // Step 5: send request
    xhr.send();
}