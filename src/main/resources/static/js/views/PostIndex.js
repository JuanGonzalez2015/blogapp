import fetchData from "../fetchData.js";
import createView from "../createView";

export default function PostIndex(props) {
    return `
        <header>
            <h1>Posts Page</h1>
        </header>
        <main>
<!--MAKE CREATE FORM HERE--> 
       <form>

    <label for="title">Title</label>
    <input id="title" name="title" type="text">
    <br>

    <label for="content">Content</label>
    <input id="content" name="content" type="content">
    <br>

    <input type="button" id="create-post-btn" value="Add-Post">
</form>
            
            <div class="post-container">
                ${props.posts.map(post =>
        `
                        <h3>${post.title}</h3> 
                        <h2>${post.content}</h2>
                        <button class="post-edit-btn" type="button" data-id="${post.id}">Edit</button>
       <!--add edit, delete buttons, add edit form-->
        
        
        `).join('')}   
            </div>
            
            
        </main>
    `;
}

export function PostsEvent() {
    createPostEvent()
    editPostEvent()

}

function createPostEvent() {
    $(`#create-post-btn`).click(function () {


            let post = {
                title: $("#title").val(),
                content: $("#content").val(),
            }
            console.log(post)

            let request = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(post)
            }
            // fetchData({
            //         posts: '/api/posts'
            //     },
            //     request)
            fetch("http://localhost:8080/api/posts/", request)
                .then(res =>{
                    console.log(res.status);
                    createView("/posts");
                }).catch(error => {
                console.log(error);
                createPostEvent("/posts")
            })
        }
    )
    ;


}

function editPostEvent() {

    $(`#post-edit-btn`).click(function () {


            let post = {
                // title: $("#title").val(),
                // content: $("#content").val(),
            }
            console.log(post)

            let request = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(post)
            }
            fetchData({
                    posts: `/api/posts/${this.attr("data-id")}`
                },
                request)

        }
    )
    ;

}

//add event listeners, get data, send fetch
//call function for edit btns listener
//call function for data
//call function for fetch