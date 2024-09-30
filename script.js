document.getElementById('download-btn').addEventListener('click', function() {
    const youtubeUrl = document.getElementById('youtube-url').value;
    const videoId = extractVideoId(youtubeUrl);

    if (videoId) {
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        document.getElementById('thumbnail').src = thumbnailUrl;
        document.getElementById('thumbnail').style.display = 'block';
        document.getElementById('download-link').href = thumbnailUrl;
        document.getElementById('download-link').style.display = 'block';
    } else {
        alert('Invalid YouTube URL');
    }
});

function extractVideoId(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})|youtu\.be\/([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? (match[1] || match[2]) : null;
}
