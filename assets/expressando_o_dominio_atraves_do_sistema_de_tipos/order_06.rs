mod lib {
    pub struct SessionToken(String);

    pub struct Order {
        pub amount: u8,
        pub name: String,
    }

    pub fn authorize(auth_token: String) -> SessionToken {
        unimplemented!()
    }

    pub fn send_order(session_token: &SessionToken,
                      order: &Order) {
        unimplemented!()
    }
}

pub use lib::*;

fn main() {
    let session_token = authorize("My initial token".into());

    let first_order = Order { amount: 10, name: "Bananas".into() };
    send_order(&session_token, &first_order);
}
