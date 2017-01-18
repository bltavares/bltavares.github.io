pub struct SessionToken(String);

pub fn authorize(auth_token: String) -> SessionToken {
    unimplemented!()
}

pub fn send_order(session_token: SessionToken,
                  amount: u8,
                  product: String) {
    unimplemented!()
}

fn main() {
    let session_token = authorize("My initial token".into());
    send_order(session_token, 10, "Bananas".into())
}
