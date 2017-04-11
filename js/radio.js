/**
 * Radio Javascript
 * @author luongnv89
 * @copyright luongnv89
 */
radio = {
    version: '1.0.1.3',
    langs: ['English', 'French', 'Instrument', 'Other'],
    cats: ['News', 'Music', 'Talk'],
    data: [],
    doFirst: function() {
        audioplayer = document.getElementById('audioplayer');
        audioplayer.volume = 0.5;
        btnPlay = document.getElementById('btnPlay');
        rsName = document.getElementById('radioName');
        rsDesc = document.getElementById('rs-description');
        rsLogo = document.getElementById('currentLogo');
        rsP = document.getElementById('previousName');
        rsN = document.getElementById('nextName');
        btnNext = document.getElementById('btnNext');
        // btnTime = document.getElementById('btnTime');
        rsVolume = document.getElementById('volume');
        rsVolume.value = audioplayer.volume * 100;
        rsVolume.addEventListener('change', radio.setVolume, false);
        volumeValue = document.getElementById('volumeValue');
        volumeValue.innerHTML = rsVolume.value / 10;

        btnNext.onclick = function() {
            var currentIndex = audioplayer.getAttribute('currentRS');
            if (currentIndex >= radio.data.length - 1) {

            } else {
                radio.selectStream(Number(currentIndex) + 1);
            }
        }
        btnPrevious = document.getElementById('btnPrevious');
        btnPrevious.onclick = function() {
            var currentIndex = audioplayer.getAttribute('currentRS');
            if (currentIndex == 0) {

            } else {
                radio.selectStream(Number(currentIndex) - 1);
            }
        }

        btnPlay.onclick = function() {
            radio.btnPlayClick();
        }
        listEnglish = document.getElementById('listEnglish');
        listFrench = document.getElementById('listFrench');
        listIns = document.getElementById('listIns');
        listOthers = document.getElementById('listOthers');
        radio.getData();

        $('#error-message').hide();

        audioplayer.addEventListener('error', function(e) {
            switch (e.target.error.code) {
                case e.target.error.MEDIA_ERR_ABORTED:
                    radio.showErrorMessage('You aborted the media playback.');
                    break;
                case e.target.error.MEDIA_ERR_NETWORK:
                    radio.showErrorMessage('A network error caused the media download to fail.');
                    break;
                case e.target.error.MEDIA_ERR_DECODE:
                    radio.showErrorMessage('The media playback was aborted due to a corruption problem or because the media used features your browser did not support.');
                    break;
                case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                    radio.showErrorMessage('The media could not be loaded, either because the server or network failed or because the format is not supported.');
                    break;
                default:
                    radio.showErrorMessage('An unknown media error occurred.');
            }
        });
    },
    btnPlayClick: function() {
        $('#error-message').hide();
        if (audioplayer.paused) {
            btnPlay.setAttribute('class', 'fa fa-pause-circle');
            audioplayer.play();
        } else {
            btnPlay.setAttribute('class', 'fa fa-play-circle');
            audioplayer.pause();
        }
    },
    selectStream: function(rsIndex) {
        $('#error-message').hide();
        var rsData = radio.data[rsIndex];
        console.debug('Selected channel: ' + rsData.name);
        rsName.innerHTML = rsData.name;
        if (rsDesc) rsDesc.innerHTML = rsData.desc;
        if (rsLogo) rsLogo.src = rsData.logo;
        if (rsIndex > 0) {
            rsP.innerHTML = radio.data[rsIndex - 1].name;
        } else {
            rsP.innerHTML = "No previous";
        }

        if (rsIndex < radio.data.length - 1) {
            var nextRS = radio.data[rsIndex + 1];
            rsN.innerHTML = nextRS.name;
        } else {
            rsN.innerHTML = "No Next";
        }

        audioplayer.setAttribute('currentRS', rsIndex);
        var listSource = audioplayer.querySelectorAll('source');
        for (var i = 0; i < listSource.length; i++) {
            listSource[i].remove();
        }
        urlStream = radio.data[rsIndex].url;
        for (var j = 0; j < urlStream.length; j++) {
            var source = document.createElement('source');
            source.src = urlStream[j];
            audioplayer.appendChild(source);
        }
        audioplayer.load();
    },
    createDOMElement: function(index, rs) {
        var col = document.createElement('div'),
            thumbnail = document.createElement('div'),
            logo = document.createElement('img'),
            caption = document.createElement('div'),
            name = document.createElement('h3'),
            other = document.createElement('div'),
            otherText = document.createElement('h4');
        col.setAttribute('class', 'col-sm-6 col-xs-12 col-md-3');
        col.setAttribute('id', 'rs-' + index);
        col.setAttribute('data-dismiss', 'modal');
        thumbnail.setAttribute('class', 'thumbnail');
        logo.setAttribute('class', 'thumb-image grow-rotate box-shadow-outset hidden-xs');
        logo.src = rs.logo;
        caption.setAttribute('class', 'caption');
        name.innerHTML = rs.name;
        other.setAttribute('class', 'otherInfo hidden-xs');
        otherText.innerHTML = '[' + radio.cats[rs.category] + ']';
        caption.appendChild(name);
        other.appendChild(otherText);
        caption.appendChild(other);
        thumbnail.appendChild(logo);
        thumbnail.appendChild(caption);
        col.appendChild(thumbnail);
        col.onclick = function() {
            radio.selectStream(index);
        };
        return col;
    },
    setVolume: function() {
        audioplayer.volume = rsVolume.value / 100;
        volumeValue.innerHTML = rsVolume.value / 10;
    },
    getData: function() {
        console.debug('Request data ... ');
        var url = 'data.json';
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                radio.data = JSON.parse(xmlHttp.responseText);
                console.debug('Number of channels: ', radio.data.length);
                for (var i = 0; i < radio.data.length; i++) {
                    var rsDOM = radio.createDOMElement(i, radio.data[i]);
                    switch (radio.data[i].language) {
                        case 0:
                            listEnglish.appendChild(rsDOM);
                            break;
                        case 1:
                            listFrench.appendChild(rsDOM);
                            break;
                        case 2:
                            listIns.appendChild(rsDOM);
                            break;
                        default:
                            listOthers.appendChild(rsDOM);
                            break;
                    }
                }
                radio.selectStream(0);
            }
        }
        xmlHttp.open("GET", url, true);
        xmlHttp.send();
    },
    showErrorMessage: function(msg) {
        console.debug(msg);
        $('#error-message').show();
        $('#error-message').text(msg);
    }
}


document.addEventListener('DOMContentLoaded', radio.doFirst, false);

console.log('[info] radio.js has been loaded! (' + radio.version + ')');
