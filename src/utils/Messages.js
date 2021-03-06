import { store } from "react-notifications-component";

class Messages {
    _showUnauthorized() {
        store.addNotification({
            title: "Failure",
            message: "Unauthorized - check your e-mail or password.",
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 4000,
                onScreen: true,
            },
        });
    }

    _showInternalServerError() {
        store.addNotification({
            title: "Failure",
            message: "Internal server error. Contact with admin.",
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 4000,
                onScreen: true,
            },
        });
    }

    _showEmailAlreadyExists() {
        store.addNotification({
            title: "Failure",
            message: "Email already exists.",
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 4000,
                onScreen: true,
            },
        });
    }
}

export default Messages;
