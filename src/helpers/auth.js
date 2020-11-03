export function signUp(params) {
    const response = fetch('http://localhost:8762/auth/sign-up',
        {
            "method": 'POST',
            "body": {
                "email": params.email,
                "enabled": params.enabled,
                "id": params.id,
                "password": params.password,
                "role": params.role
            },
            "headers": {
                'Content-Type': 'application/json'
            }
        }
    );
    return response.json();
}
export function signIn(params) {
    const response = fetch('http://localhost:8762/auth/sign-up',
        {
            "method": 'POST',
            "body": {
                "email": params.email,
                "enabled": params.enabled,
                "id": params.id,
                "password": params.password,
                "role": params.role
            },
            "headers": {
                'Content-Type': 'application/json'
            }
        }
    );
    return response.json();
}