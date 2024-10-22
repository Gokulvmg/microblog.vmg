// Add event listener to the Post button
document.getElementById('postButton').addEventListener('click', function() {
    // Get the value from the input field
    const postContent = document.getElementById('postInput').value;

    // Get the image and audio files
    const imageFile = document.getElementById('imageInput').files[0];
    const audioFile = document.getElementById('audioInput').files[0];

    // Only create a post if the content is not empty
    if (postContent.trim() !== '' || imageFile || audioFile) {
        // Create a new div element for the post
        const postDiv = document.createElement('div');
        postDiv.classList.add('feed-item');

        // Add the text content
        if (postContent.trim() !== '') {
            const textPara = document.createElement('p');
            textPara.innerText = postContent;
            postDiv.appendChild(textPara);
        }

        // Add the image if present
        if (imageFile) {
            const imageUrl = URL.createObjectURL(imageFile);
            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;
            postDiv.appendChild(imageElement);
        }

        // Add the audio if present
        if (audioFile) {
            const audioUrl = URL.createObjectURL(audioFile);
            const audioElement = document.createElement('audio');
            audioElement.controls = true;
            audioElement.src = audioUrl;
            postDiv.appendChild(audioElement);
        }

        // Add the new post to the feed
        document.getElementById('feed').appendChild(postDiv);

        // Clear the input field and file inputs after posting
        document.getElementById('postInput').value = '';
        document.getElementById('imageInput').value = '';
        document.getElementById('audioInput').value = '';
    } else {
        alert("Please write something or upload media before posting!");
    }
});
