let counterInput = 0;
const Renderer = function () {
    const renderPosts = function (posts) {
        $("#posts").empty()
        for (let post of posts) {
            $("#posts").append(`<div class=post id="${post.id}">${post.text} <button class=delete>Delete Post</button><br><br>
            <input type="text" placeholder="Add Comment" id="comment${counterInput}">
            <div class=add-comment>  Add Comment</div></div>`)
            counterInput++
            for (let comment of post.comments) {
                $(`#${post.id}`).append(`<div class=comments id=${comment.id}>${comment.text}<div class=delete-comment>X</div></div>`)
            }
        }
    }
    return { renderPosts }
}
