import { v4 as uuidv4 } from 'uuid';

const translations = [
    {
        id: uuidv4(),
        locale: 'en-US',
        title: 'English',
        messages: {
            theme: 'Theme',
            themeSettings: 'Theme settings',
            chooseMode: 'Choose mode',
            chooseColor: 'Choose color',
            light: 'Light',
            dark: 'Dark',
            red: 'Red',
            blue: 'Blue',
            search: 'Search courses',
            home: 'Home',
            educationProgram: 'Education program',
            news: 'News',
            paymentGuide: 'Payment Guide',
            contact: 'Contact',
            OfficeInformation: 'Office information',
            CertificateInBasicITApplications: 'Certificate in Basic IT Applications',
            AdvancedITApplicationCertificate: 'Advanced IT Application Certificate',
            BasicITapplicationCertificationExamPreparation: 'Basic IT application certification exam preparation',
            DataAnalytics: 'Data Analysic',
            DataAnalysiswithPowerBI: 'Data Analysis với PowerBI & Azure ML',
            WebProgramming: 'Web Programming',
            Pythonprogrammer: 'Python programmer',
            PHPprogrammer: 'PHP programmer',
            JavaScriptProgrammers: 'JavaScript Programmers',
            DotNetprogrammer: '.Net programmert',
            SoftwareTesting: 'Software Testing',
            SoftwareTestingSpecialist: 'Software Testing Specialist',
            Basicsoftwaretesting: 'Basic software testing',
            Automatedsoftwaretesting: 'Automated software testing',
            Internet: 'Internet',
            Introductiontonetworkadministration: 'Introduction to network administration',
            Networkinfrastructuremanagement: 'Network infrastructure management',
            NetworkAdministration: 'Network Administration',
            Networksecurity: 'Network security',
        },
    },
    {
        id: uuidv4(),
        locale: 'vn',
        title: 'Vietnamese',
        messages: {
            theme: 'Chủ đề',
            themeSettings: 'Thiết lập chủ đề',
            chooseMode: 'Chọn chủ đề',
            chooseColor: 'Chọn màu',
            light: 'Màu sáng',
            dark: 'Màu tối',
            red: 'Màu đỏ',
            blue: 'Màu xanh',
            search: 'Tìm kiếm khoá học',
            home: 'Trang chủ',
            educationProgram: 'Chương trình đào tạo',
            news: 'Tin tức',
            paymentGuide: 'Hướng dẫn thanh toán',
            contact: 'Liên hệ',
            OfficeInformation: 'Tin học văn phòng',
            CertificateInBasicITApplications: 'Chứng chỉ ứng dụng CNTT cơ bản',
            AdvancedITApplicationCertificate: 'Chứng chỉ ứng dụng CNTT nâng cao',
            BasicITapplicationCertificationExamPreparation: 'Luyện thi chứng chỉ ứng dụng CNTT cơ bản',
            DataAnalytics: 'Data Analysic',
            DataAnalysiswithPowerBI: 'Data Analysis với PowerBI & Azure ML',
            WebProgramming: 'Lập trình web',
            Pythonprogrammer: 'Lập trình viên Python',
            PHPprogrammer: 'Lập trình viên PHP',
            JavaScriptProgrammers: 'Lập trình viên JavaScript',
            DotNetprogrammer: 'Lập trình viên .Net',
            SoftwareTesting: 'Kiểm thử phần mềm',
            SoftwareTestingSpecialist: 'Chuyên viên kiểm thử phần mềm',
            Basicsoftwaretesting: 'Kiểm thử phần mềm cơ bản',
            Automatedsoftwaretesting: 'Kiểm thửu phần mềm tự động',
            Internet: 'Mạng máy tính',
            Introductiontonetworkadministration: 'Nhập môn quản trị mạng',
            Networkinfrastructuremanagement: 'Quản trị hạ tầng mạng',
            NetworkAdministration: 'Quản trị hệ thống mạng',
            Networksecurity: 'An ninh mạng',
        },
    },
    {
        id: uuidv4(),
        locale: 'jp',
        title: 'Japanese',
        messages: {
            theme: 'Topikku',
            themeSettings: 'Tēma settei',
            chooseMode: 'Mōdo o sentaku',
            chooseColor: 'Iro o sentaku',
            light: 'Raito',
            dark: 'Kurai',
            red: 'Aka',
            blue: 'Aoi',
            search: 'Kensaku kōsu',
            home: 'Hōmupēji',
            educationProgram: 'Kyōiku puroguramu',
            news: 'Nyūsu',
            paymentGuide: 'Shiharai gaido',
            contact: 'Kontakuto',
            OfficeInformation: 'Ofisu jōhō',
            CertificateInBasicITApplications: 'IT kiso no shōmei-sho',
            AdvancedITApplicationCertificate: 'Kōdona IT apurikēshon shōmei-sho',
            BasicITapplicationCertificationExamPreparation: 'Kiso IT apurikēshon nintei shiken taisaku',
            DataAnalytics: 'Dēta bunseki',
            DataAnalysiswithPowerBI: 'PowerBI to Azure ML ni yoru dēta bunseki',
            WebProgramming: 'U~ebupuroguramingu',
            Pythonprogrammer: 'Paison puroguramā',
            PHPprogrammer: 'PHP puroguramā',
            JavaScriptProgrammers: 'Jabasukuriputo puroguramā',
            DotNetprogrammer: '.Net puroguramā',
            SoftwareTesting: 'Sofutō~ea tesuto',
            SoftwareTestingSpecialist: 'Kihon-tekina sofutō~ea tesuto',
            Basicsoftwaretesting: 'Jidō sofutō~ea tesuto',
            Automatedsoftwaretesting: 'Jidō-ka sa reta sofutō~ea tesuto',
            Internet: 'Intānetto',
            Introductiontonetworkadministration: 'Nettowāku kanri no gaiyō',
            Networkinfrastructuremanagement: 'Nettowākuinfura kanri',
            NetworkAdministration: 'Nettowāku kanri',
            Networksecurity: 'Nettowākusekyuritī',
        },
    },
];

export default translations;
