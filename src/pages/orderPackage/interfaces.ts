export interface Order {
    id?:                string;
    status?:            number;
    code?:              string;
    client_name:       string;
    client_address:    string;
    recipient_name:    string;
    recipient_address: string;
    order_detail:      string;
    created_at?:        string;
}