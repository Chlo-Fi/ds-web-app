function User(props) {
    console.log(props);
    return (
        <h1>Name: {props.name} - Age: {props.age}</h1>
    );
}

function SecondUser() {
    return (
        <h1>Second User Data Here</h1>
    )
}

export { User, SecondUser };