import Share from 'react-native-share';


export function ClickShare(Message: string, userid: string, title = 'Share Link') {
    Share.open({
        message: Message,
        title: title,
    })
        .then(res => {
            console.log('res', res);
        })
        .catch(err => {
            err && console.log(err);
        });
}
