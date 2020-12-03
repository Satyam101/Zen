var tv = /** @class */ (function () {
    function tv(allTVchannels) {
        this.Allchannels = allTVchannels;
        this.channelNumber = 0;
        this.videoPlayer = document.createElement('video');
        this.videoPlayer.setAttribute("type", "video/mp4");
        this.videoPlayer.setAttribute('id', 'video_player');
        this.videoPlayer.volume = 0.3;
        document.querySelector('#container').append(this.videoPlayer);
    }
    tv.prototype.power = function () {
        if (!this.videoPlayer.getAttribute('src')) {
            this.videoPlayer.setAttribute('src', this.Allchannels[this.channelNumber]);
            this.videoPlayer.load();
            this.videoPlayer.play();
        }
        else {
            this.videoPlayer.setAttribute('src', "");
        }
    };
    tv.prototype.channelchange = function (change) {
        this.channelNumber += change;
        if (this.channelNumber < 0) {
            this.channelNumber = this.Allchannels.length - 1;
            this.videoPlayer.load();
            this.videoPlayer.play();
        }
        else if (this.channelNumber === this.Allchannels.length) {
            this.channelNumber = 0;
            this.videoPlayer.setAttribute('src', this.Allchannels[this.channelNumber]);
            this.videoPlayer.load();
            this.videoPlayer.play();
        }
        else {
            this.videoPlayer.setAttribute('src', this.Allchannels[this.channelNumber]);
            this.videoPlayer.load();
            this.videoPlayer.play();
        }
    };
    tv.prototype.volumeChange = function (vol) {
        if (this.videoPlayer.volume > 0 && this.videoPlayer.volume < 1.1) {
            this.videoPlayer.volume += vol;
        }
    };
    tv.prototype.pauseChannel = function () {
        if (!this.videoPlayer.paused) {
            this.videoPlayer.pause();
        }
        else {
            this.videoPlayer.play();
        }
    };
    return tv;
}()); //class
var videos = [
    "https://www.mobiles24.co/metapreview.php?id=628470&cat=106&h=13512105",
    "https://www.mobiles24.co/metapreview.php?id=630849&cat=106&h=13563254",
    "https://www.mobiles24.co/metapreview.php?id=629194&cat=106&h=13527671",
    "https://www.mobiles24.co/metapreview.php?id=629187&cat=106&h=13527521",
    "https://www.mobiles24.co/metapreview.php?id=629196&cat=106&h=13527714"
];
var tvObj = new tv(videos);
var TV = function (operation) {
    switch (operation) {
        case 'VolumeUp':
            tvObj.volumeChange(+0.20);
            break;
        case 'VolumeDown':
            tvObj.volumeChange(-0.20);
            break;
        case 'channelNext':
            tvObj.channelchange(+1);
            break;
        case 'channelPrevious':
            tvObj.channelchange(-1);
            break;
        case 'pause':
            tvObj.pauseChannel();
            break;
        case 'power':
            tvObj.power();
            break;
        default:
            break;
    }
};
