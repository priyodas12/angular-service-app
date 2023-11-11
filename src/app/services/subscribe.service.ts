export class SubscribeService {
    onSubscribeClicked = (type: string) => {
        const subscribeMessage = `Thank You for Subscription! Now you will receive prime benefit ${type}.`;
        console.log(subscribeMessage);
        alert(subscribeMessage);
    }
}