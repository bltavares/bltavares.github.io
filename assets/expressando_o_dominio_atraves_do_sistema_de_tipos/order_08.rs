mod lib {
    pub struct SessionToken(String);

    pub struct Order {
        amount: u8,
        name: String,
    }

    pub fn create_order(amount: u8, name: String) -> Result<Order, String> {
        if amount <= 0 {
            unimplemented!()
        }
        unimplemented!()
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

    let first_order = create_order(10, "Bananas".into());

    if let Ok(order) = first_order {
        send_order(&session_token, &order);
    }
}
