
export function LoginComponent(){
    const title = "User Login";
    return(
        <>
        <div className="d-flex justify-content-center align-item-center mt-2">
            <div className="border border-2 rounded rounded-3 p-3 border-primary">
            <h2 style={{'color':'red'}}><span className="bi bi-person"></span>{title}</h2>
            <dl>
                <dt className="text-primary">User Name</dt>
                <dd><input type="text" className="form-control" /></dd>
                <dt className="text-primary">Password</dt>
                <dd><input type="password" className="form-control" /></dd>
                <button className="btn btn-danger w-100">Login</button>
            </dl>
            </div>
            </div>
        </>

    );
}

