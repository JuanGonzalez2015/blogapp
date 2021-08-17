export default function Register(props) {
    return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>Log In</title>
</head>
<body>
<h1>Log In</h1>

<form id="login-form">
    <label for="username">Username</label>
    <input id="username" name="username" type="text"/>
    <label for="password">Password</label>
    <input id="password" name="password" type="password"/>
    <input id="login-btn" type="submit" value="Log In"/>
    <button class="post-edit-btn" type="button" data-id="${user.id}"></button>
</form>
</body>
</html>`;

}

const routes = {

    '/login': {
        returnView: Login,
        state: {},
        uri: '/login',
        title: "Login",
        viewEvent: LoginEvent
    }

}