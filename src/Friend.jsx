export default function Friend({ friend }) {
    console.log(friend);
    const { name, email, phone, username, website } = friend;
    return (
        <div className="card">
            <h2>Name: {name}</h2>
            <p>User-Name: {username}</p>
            <p>Email: {email}</p>
            <p>Phone Number: {phone}</p>
            <p>Website: {website}</p>
        </div>
    )
}