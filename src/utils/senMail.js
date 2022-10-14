import emailjs from 'emailjs-com';
import { Loading, Report } from 'notiflix';

const sendMail = (from_name, to_mail, url, toastMessage) => {
    emailjs
        .send(
            'service_6622pea',
            'template_edymdf8',
            {
                from_name,
                to_mail,
                url,
            },
            'jmPA7FQHXu0rmbB2K',
        )
        .then(
            (response) => {
                Loading.remove(500);
                Report.success('Gửi yêu cầu thành công', toastMessage, 'Okay');
            },
            (error) => {
                Loading.remove(500);
                return Report.failure('Gửi yêu cầu thất bại', error, 'Okay');
            },
        );
};

export default sendMail;
