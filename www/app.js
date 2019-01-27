(function app() {
    var _hostnames = {};
    var _responseTimeSums = {};

    function fetchText(url, hostElementId, timeElementId) {
        var token = document.getElementById('tokenInput').value;
        var hostElement = document.getElementById(hostElementId);
        var timeElement = document.getElementById(timeElementId);

        return fetch(url, {
            headers: { 'Authorization': 'Bearer ' + token },
            credentials: 'omit',
            mode: 'same-origin'
        }).then(function (response) {
            if (!response.ok) {
                throw Error(response.status);
            }

            var responseTime = parseFloat(response.headers.get('X-Response-Time'));
            var responseTimeSum = (_responseTimeSums[timeElementId] || 0) + responseTime;
            _responseTimeSums[timeElementId] = responseTimeSum;

            return response.text();

        }).then(function (host) {
            var hostnames = _hostnames[hostElementId] || {};
            hostnames[host] = (hostnames[host] || 0) + 1;
            _hostnames[hostElementId] = hostnames;

            var responseTimeSum = _responseTimeSums[timeElementId] || 0;

            var html = '';
            var countSum = 0;
            for (var key in hostnames) {
                if (hostnames.hasOwnProperty(key)) {
                    var count = hostnames[key];
                    countSum += count;
                    if (key === host) {
                        html += '<p class="h6 text-primary font-weight-bold">' + key;
                    } else {
                        html += '<p class="h6 text-muted">' + key;
                    }
                    html += ' <small>(' + count + ')</small></p>';
                }
            }

            hostElement.innerHTML = html;

            var responseTime = countSum > 5 ? 1000 * responseTimeSum / countSum : null;
            timeElement.innerHTML = (responseTime ? responseTime.toFixed(0) + ' ms' : '-') + ' (' + countSum + ')';

        }).catch(function (error) {
            hostElement.innerHTML = '<span class="text-danger small">' + error + '</span>';
        });
    }

    function updatePage() {

        Promise.all(
            ['node', 'python', 'dotnet']
                .filter(s => document.getElementById(s + '-enabled').checked)
                .map(s => fetchText('/api/' + s + '/', s + '-host', s + '-time'))
        );

        var timeoutHandle = setTimeout(function () {
            clearTimeout(timeoutHandle);
            updatePage();
        }, 3000);
    }

    updatePage();
})();