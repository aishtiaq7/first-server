import { React, useRef, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const credentials = useRef({email:'defaulut email', password:'default password'})

    console.log('\n')
    console.log("re-render");
    console.log("email:", email);
    console.log("password:", password);

    console.log(credentials.current)

    const handleLogin = () => {
        console.log("email:", email);
        console.log("password:", password);

        credentials.current.email = email;
        credentials.current.password = password;
        console.log(credentials.current);

        
        setEmail('');
        setPassword('');

    };

    return (
        <Container className="mt-5">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        handleLogin();
                    }}
                    >
                    Submit
                </Button>
            </Form>
        </Container>
    );
}
