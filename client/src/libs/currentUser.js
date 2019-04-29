export function getAccessToken () {
    return localStorage.getItem('accessToken');
}

export function isLoggedIn () {
    return getAccessToken() ? true : false;
}

export function getUser () {
    return JSON.parse(localStorage.getItem('user'));
}

export function logout (props) {
    localStorage.removeItem('accessToken');
    props.history.push('/');
}
