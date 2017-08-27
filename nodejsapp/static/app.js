var _hostnames = {};

function fetchText(url, outputElementId) {
    fetch(url).then(function (response) {
        if (!response.ok) {
            throw Error(response.status);
        }
        return response.text();
    }).then(function (text) {
        var dict = _hostnames[outputElementId] || {};
        dict[text] = (dict[text] || 0) + 1;
        _hostnames[outputElementId] = dict;

        var html = '';
        for (var key in dict) {
            if (dict.hasOwnProperty(key)) {
                var count = dict[key];
                if (key === text) {
                    html += '<p class="h4 text-primary font-weight-bold">' + key;
                } else {
                    html += '<p class="h4 text-muted">' + key;
                }
                html += ' <small>(' + count + ')</small></p>';
            }
        }

        document.getElementById(outputElementId).innerHTML = html;

    }).catch(function (error) {
        document.getElementById(outputElementId).innerHTML = '<span class="text-danger">' + error + '</span>';
    });
}

function fetchJson(url, outputElementId) {
    fetch(url).then(function (response) {
        if (!response.ok) {
            throw Error(response.status);
        }
        return response.json();
    }).then(function (json) {
        var text = JSON.stringify(json, undefined, 3);
        document.getElementById(outputElementId).innerHTML = text;
    }).catch(function (error) {
        document.getElementById(outputElementId).innerHTML = '<span style="color:red">' + error + '</span>';
    });
}

function updatePage() {
    fetchText('/me', 'node-me');
    fetchText('/py/me', 'python-me');
    fetchText('/api/me', 'dotnet-me');
    //fetchJson('/api/values', 'output');

    var timeoutHandle = setTimeout(function () {
        clearTimeout(timeoutHandle);
        updatePage();
    }, 1000);
}

updatePage();

// setTimeout(function () {
//     window.location.reload(false);
// }, 15000);