
const tweeter = Tweeter()
const renderer = Renderer()

$("#post").on('click', function () {
    const twitValue = $("#input").val()
    let postIdCounter = tweeter.posts.length + 1;
    tweeter.posts.push({ id: "p" + postIdCounter, text: twitValue, comments: [] })
    renderer.renderPosts(tweeter.getPosts())
})
$("#posts").on('click', '.delete', function () {
    tweeter.removePost($(this).closest('div').attr('id'))
    renderer.renderPosts(tweeter.getPosts())
})
$("#posts").on('click', '.add-comment', function () {
    const commentInputId = $(this).siblings('input').prop('id')
    const inputVal = $(`#${commentInputId}`).val()
    const thisPostId = $(this).closest('.post').attr('id')
    tweeter.addComment(inputVal, thisPostId)
    renderer.renderPosts(tweeter.getPosts())
})
$("#posts").on('click', '.delete-comment', function () {
    tweeter.removeComment($(this).closest('.post').attr('id'), $(this).parent('div').prop('id'))
    renderer.renderPosts(tweeter.getPosts())
})


renderer.renderPosts(tweeter.getPosts())