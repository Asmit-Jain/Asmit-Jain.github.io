function toggleLike(blogId) {
    const likeCountElement = document.getElementById(`likeCount_${blogId}`);
    const currentLikes = parseInt(likeCountElement.innerText.split(' ')[0]); 
    
    if (likeCountElement.classList.contains('liked')) {
        likeCountElement.innerText = `${currentLikes - 1} Likes`;
        likeCountElement.classList.remove('liked');
    } else {
        likeCountElement.innerText = `${currentLikes + 1} Likes`;
        likeCountElement.classList.add('liked');
    }
}

function addComment(blogId) {
    const commentInput = document.getElementById(`commentInput_${blogId}`);
    const commentText = commentInput.value.trim();
    
    if (commentText !== '') {
        const commentListContainer = document.getElementById(`commentListContainer_${blogId}`);
        const newComment = document.createElement('li');
        newComment.innerText = commentText;
        commentListContainer.appendChild(newComment);
        
        const comments = JSON.parse(localStorage.getItem(`comments_${blogId}`)) || [];
        comments.push(commentText);
        localStorage.setItem(`comments_${blogId}`, JSON.stringify(comments));
        
        commentInput.value = '';
    }
}
