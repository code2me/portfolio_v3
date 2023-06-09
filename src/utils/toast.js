import { Store } from 'react-notifications-component'; 

export default function toast({message, type, time}) {
    let response = type === 'success' ? "✅ Message sent successfully!" : "❌ Message not sent";
        Store.addNotification({
        title: response,
        message: message,
        type: type,
        insert: "bottom",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: time || 5000,
            onScreen: true
        }
    });
}