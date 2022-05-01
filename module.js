const Tweeter = function () {

    let _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    let postIdCounter = _posts.length + 1;
    let commentIdCounter = 7;
    const getPosts = function () {
        return _posts;
    }
    const addPosts = function (textc) {
        _posts.push({ id: "p" + postIdCounter, text: textc, comments: [] });
        postIdCounter++
    }
    const removePost = function (postID) {

        for (let p of _posts) {
            if (p.id === postID) {
                postID = postID.slice(1)
                _posts.splice(_posts.indexOf(p), 1)
            }
        }
    }
    const addComment = function (textc, postID) {
        for (let p of _posts) {
            if (p.id === postID) {
                p.comments.push({ id: "c" + commentIdCounter, text: textc })
                commentIdCounter++
            }
        }
    }
    const removeComment = function (postID, commentID) {
        let counter = 0;
        for (let p of _posts) {
            if (p.id === postID) {
                for (let c of p.comments) {
                    if (c.id == commentID) {
                        p.comments.splice(counter, 1)
                    }
                    counter++;
                }
            }
        }

    }
    return {
        addComment,
        removeComment,
        removePost,
        addPosts,
        getPosts,
        posts: _posts

    }
}
