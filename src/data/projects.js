export const projects = [
    {
        id: 1,
        title: "Marko's Blog",
        date: "March 2025",
        description: `<b>Marko’s Blog</b> is a full-stack blogging platform built with <b>ASP.NET Core</b> and <b>React</b>.
                It enables users to create posts, leave comments, and receive real-time notifications powered by
                <b>SignalR</b>.
                The project follows <b>Clean Architecture</b> and <b>SOLID</b> principles, reflecting my focus on
                building scalable,
                secure, and maintainable software solutions.`,
        stack: ["React / Redux", "ASP.NET Core", "MSSQL Server", "Tailwind CSS"],
        image: "/images/projects/marko-blog.png",
        github: "https://github.com/MarkoG111/marko_blog",
        demo: "#",
        reverse: false,
        hoverOffset: 55
    },
    {
        id: 2,
        title: "Gačanović Academy",
        date: "April 2021",
        description: ` <strong>Gačanović Academy</strong> is an online learning platform built with
                <strong>Laravel</strong>, designed to offer a seamless experience for purchasing and managing
                <strong>e-courses</strong> across various categories. Users can easily browse, search, and filter
                courses dynamically.
                Once registered, users can not only enroll in courses but also become <strong>authors</strong>,
                contributing to the platform’s growing library of educational content.`,
        stack: ["JavaScript / jQuery", "Laravel", "MySQL", "AJAX", "Bootstrap 4"],
        image: "/images/projects/gacanovic-academy.png",
        github: "https://github.com/MarkoG111/gacanovic_academy",
        demo: "#",
        reverse: true,
        hoverOffset: 60
    },
    {
        id: 3,
        title: "Škoda Rental",
        date: "July 2020",
        description: `<strong>Škoda Rental</strong> is a dynamic car rental platform built with
                <strong>PHP (OOP, MVC)</strong> and <strong>MySQL</strong>, offering users a smooth and intuitive
                experience
                for renting vehicles. All data is <strong>fetched dynamically</strong> from the database, ensuring
                real-time availability.
                The platform also includes an <strong>admin panel</strong> that enables administrators to manage rental
                requests,
                approve or decline reservations, and monitor car availability efficiently.`,
        stack: ["JavaScript / jQuery", "PHP", "OOP", "MVC Architecture", "MySQL", "AJAX", "Bootstrap 4"],
        image: "/images/projects/skoda.png",
        github: "https://github.com/MarkoG111/skoda_rental",
        demo: "#",
        reverse: false,
        hoverOffset: 60
    },
    {
        id: 4,
        title: "Gigatronic Shop",
        date: "March 2020",
        description: `<strong>Gigatronic Shop</strong> is a full-featured <strong>eCommerce platform</strong> designed to
                provide
                a seamless and intuitive shopping experience. It includes <strong>user authentication</strong>,
                <strong>pagination</strong>, and a powerful <strong>admin panel</strong> for managing products,
                orders, and customers. The system also features <strong>dynamic polls</strong>, where registered users
                can participate in one active poll at a time, adding an interactive dimension to the platform.`,
        stack: ["JavaScript / jQuery", "PHP", "MySQL", "AJAX", "Bootstrap 4"],
        image: "/images/projects/gigatronic-shop.png",
        github: "https://github.com/MarkoG111/gigatronic_shop",
        demo: "#",
        reverse: true,
        hoverOffset: 60
    },
    {
        id: 5,
        title: "Gornji Milanovac",
        date: "February 2019",
        description: `The <strong>Gornji Milanovac</strong> website is a <strong>modern single-page presentation</strong>
                that seamlessly combines visual appeal and functionality.
                Built with a focus on <strong>simplicity and performance</strong>, it provides visitors with an engaging
                and informative overview of the municipality in a clean and accessible design.`,
        stack: ["JavaScript / jQuery", "AJAX", "JSON"],
        image: "/images/projects/township-gornji-milanovac.png",
        github: "https://github.com/MarkoG111/gornji_milanovac",
        demo: "#",
        reverse: false,
        hoverOffset: 50
    },
    {
        id: 6,
        title: "K2 Elite",
        date: "March 2018",
        description: `K2 Elite is my first web project, a <strong>simple presentation</strong> website built exclusively in
                <strong>HTML</strong> and <strong>CSS</strong>, without frameworks or JavaScript. The site was developed
                for the local club K2 Elite from Gornji Milanovac and includes basic pages such as the homepage,
                information about the club, gallery, and location. <br />
                This project represents my <strong>first steps</strong> in web development and the foundation on which I
                later built my knowledge.`,
        stack: ["HTML", "CSS", "SEO"],
        image: "/images/projects/k2-elite.png",
        github: "https://github.com/MarkoG111/k2_elite",
        demo: "#",
        reverse: true,
        hoverOffset: 40
    },
];
