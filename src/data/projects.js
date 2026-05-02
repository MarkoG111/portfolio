export const projects = [
    {
        id: 1,
        title: "Renegade Urban Winery",
        date: "February 2026",
        description: `
      <p class="mb-2">
        Custom event ticketing system built on top of <strong>WooCommerce</strong>, focused on secure ticket validation.
      </p>
      <ul class="list-disc ml-5 space-y-1">
        <li>QR-based ticket validation with HMAC protection</li>
        <li>Seat allocation with transactions (race condition solved)</li>
        <li>Automated PDF ticket generation with unique non-sequential IDs</li>
        <li>Real-time check-in tracking via REST API</li>
      </ul>`,
        details: `
      <p class="mb-3">
        Renegade Urban Winery is a custom-built event ticketing system developed on top of WooCommerce, designed to transform a standard eCommerce platform into a fully controlled event management system.
      </p>
      <p class="mb-3">
        The main challenge was that WooCommerce does not support event-specific logic such as ticket validation, seat allocation, or fraud prevention. To solve this, I implemented a custom backend layer that handles the entire ticket lifecycle.
      </p>
      <p class="mb-3">
        After a successful purchase, the system automatically generates unique tickets, assigns seats, and creates PDF documents with embedded QR codes. Each ticket contains a non-sequential ID and an <strong>HMAC hash</strong> to prevent manipulation and unauthorized access.
      </p>
      <p class="mb-3">
        The validation process is handled through a custom REST API. When a QR code is scanned, the system verifies ticket existence, hash integrity, and status. Valid tickets are atomically updated to "used", preventing duplicate entry and race conditions.
      </p>
      <p class="mb-3">
        A critical part of the system was solving <strong>concurrent seat allocation</strong>. This was implemented using database transactions and row locking (SELECT FOR UPDATE), ensuring that multiple users cannot receive the same seat during simultaneous purchases.
      </p>
      <p class="mb-3">
        The system uses custom database tables instead of WordPress postmeta to allow efficient queries, better data structure, and transactional operations required for seat management and validation logic.
      </p>
      <p class="mb-3">
        On the admin side, I built a real-time dashboard with QR scanning directly in the browser, allowing event organizers to validate tickets and monitor check-ins. The system uses polling via REST API to update check-in data in near real-time.
      </p>
      <p class="text-gray-600">
        This project focused on solving real-world problems such as ticket fraud, race conditions, and system reliability, while integrating seamlessly with an existing eCommerce platform.
      </p>
      <hr class="my-6"/>
      <h4 class="font-semibold mb-3">Key Challenges & Solutions</h4>
      <div class="space-y-4 text-sm">
        <div>
          <p class="font-medium">Preventing ticket fraud</p>
          <p class="text-gray-600">
            Users could manipulate ticket IDs in URLs and reuse tickets. 
            I solved this by implementing <strong>HMAC hashing</strong> with a server-side secret, ensuring that any modification invalidates the ticket.
          </p>
        </div>
        <div>
          <p class="font-medium">Race conditions during seat allocation</p>
          <p class="text-gray-600">
            Multiple users purchasing at the same time could receive the same seat. 
            I implemented <strong>database transactions with row locking (SELECT FOR UPDATE)</strong> to ensure atomic seat assignment without conflicts.
          </p>
        </div>
        <div>
          <p class="font-medium">Duplicate ticket usage</p>
          <p class="text-gray-600">
            A ticket could be scanned multiple times. 
            This was solved using an <strong>atomic update</strong> (update only if status = 'valid'), ensuring only the first scan succeeds.
          </p>
        </div>
        <div>
          <p class="font-medium">Limitations of WooCommerce</p>
          <p class="text-gray-600">
            WooCommerce lacks event-specific logic entirely. Solved by building a custom backend layer on top of it, keeping payment and order handling intact while adding full ticket lifecycle control
          </p>
        </div>
        <div>
          <p class="font-medium">Data structure limitations (WordPress)</p>
          <p class="text-gray-600">
            WordPress postmeta is not suitable for relational queries or transactions. 
            I introduced <strong>custom database tables</strong> for better performance and full control over ticket and check-in logic.
          </p>
        </div>
      </div>`,
        stack: ["WordPress", "WooCommerce", "PHP", "MySQL", "JavaScript"],
        image: "/images/projects/renegade-urban-winery.png",
        github: "https://github.com/MarkoG111/renegade_urban_winery",
        demo: "https://renegade-winary.infinityfreeapp.com/",
        reverse: true,
        hoverOffset: 70
    },
    {
        id: 2,
        title: "Marko's Blog",
        date: "March 2025",
        description: `
      <p class="mb-3">Full-stack blog platform with CQRS architecture, <strong>real-time notifications</strong>, and fine-grained authorization.</p>
      <ul class="list-disc ml-5 space-y-2 mb-3">
        <li>Designed a 6-layer Clean Architecture (Domain -> API) with strict separation of concerns</li>
        <li>Built real-time notification system using SignalR WebSockets (likes, comments, follows)</li>
        <li>Implemented CQRS with a centralized UseCaseExecutor handling auth, logging, and execution</li>
        <li>Engineered use-case level permissions, fine-grained access control beyond role checks</li>
      </ul>`,
        details: `
      <p class="mb-3">
        Marko's Blog is a production-oriented full-stack platform built to go well beyond a typical CRUD application - with real-time interactions, a CQRS-inspired backend, and authorization that operates at the individual action level.
      </p>
      <p class="mb-3">
        The backend is structured across six independent layers (Domain, EFDataAccess, Application, Implementation, API, Client), each with a single, well-defined responsibility. Business logic never leaks into controllers, and infrastructure details never bleed into the domain.
      </p>
      <p class="mb-3">
        All commands and queries flow through a centralized UseCaseExecutor, which handles authorization checks, audit logging, and execution in one consistent pipeline - eliminating duplicated logic and making every user action traceable.
      </p>
      <p class="mb-3">
        Real-time notifications are delivered via SignalR WebSockets. When a user receives a like, comment, or new follower, the notification appears instantly - no polling, no page refresh.
      </p>
      <p class="mb-3">
        Authentication is hybrid: standard JWT login plus Google OAuth via Firebase. Authorization goes further than roles - each user holds a list of allowed use-cases, updated automatically when their role changes.
      </p>
      <p class="mb-3">
        Authentication and authorization are implemented using <strong>JWT</strong>, with support for role-based access and use-case level permissions.
      </p>
      <p class="mb-3">
        On the frontend, Redux Toolkit manages global state (user session, notifications, theme) while React Context handles scoped UI feedback (errors, success messages). Redux Persist keeps the session alive across page refreshes.
      </p>

      <hr class="my-6"/>
      <h4 class="font-semibold mb-3">Key Challenges & Solutions</h4>
      <div class="space-y-4 text-sm">
        <div>
          <p class="font-medium">Overloaded controllers</p>
          <p class="text-gray-600">
            As features grew, controllers were accumulating authorization and logging logic. 
            I introduced UseCaseExecutor as a single execution pipeline - controllers now only 
            receive a request and delegate. All cross-cutting concerns live in one place.
          </p>
        </div>
        <div>
          <p class="font-medium">Authorization beyond roles</p>
          <p class="text-gray-600">
            Role-based access wasn't granular enough. I built a use-case permission system where 
            each user holds an explicit list of allowed actions, derived from their role and 
            automatically synchronized when that role changes.
          </p>
        </div>
        <div>
          <p class="font-medium">Real-time user interaction</p>
          <p class="text-gray-600">
            Users needed instant feedback for interactions. SignalR handles this cleanly - each 
            user joins a group identified by their ID, and the backend pushes targeted notifications 
            without broadcasting to everyone.
          </p>
        </div>
        <div>
          <p class="font-medium">State management complexity</p>
          <p class="text-gray-600">
            Mixing global and local state caused subtle inconsistencies. I separated them clearly: 
            Redux for data that lives across the app (session, notifications), Context API for 
            transient UI state (toasts, error messages).
          </p>
        </div>
        <div>
          <p class="font-medium">Nested comments with a single query</p>
          <p class="text-gray-600">
            Rendering threaded comments efficiently was tricky. I load all comments flat in one 
            query, then build the hierarchy in memory using a lookup dictionary and recursion - 
            avoiding N+1 queries entirely.
          </p>
        </div>
      </div>`,
        stack: ["React / Redux", "ASP.NET Core 8", "PostgreSQL", "Tailwind CSS"],
        image: "/images/projects/marko-blog.png",
        github: "https://github.com/MarkoG111/marko_blog",
        demo: "https://marko-blog.vercel.app/",
        reverse: false,
        hoverOffset: 55
    },
    {
        id: 3,
        title: "Gačanović Academy",
        date: "April 2021",
        description: `
      <p class="mb-2">
        Full-stack <strong>Laravel</strong> e-learning platform with Stripe payment integration, role-based access control, and dynamic course management.
      </p>
      <ul class="list-disc ml-5 space-y-1">
        <li>Implemented complete Stripe checkout flow: session creation, order tracking, and webhook fallback for failed redirects</li>
        <li>Built AJAX cart with LocalStorage, including duplicate purchase prevention and real-time updates</li>
        <li>Designed three-role system (Student, Author, Admin) with middleware-based route protection</li>
        <li>Delivered admin dashboard with full CRUD, server-side pagination, and activity logging</li>
      </ul>`,
        details: `
      <p class="mb-3">
        Gačanović Academy is a full-stack e-learning platform built with Laravel for selling and managing online courses with real payment processing.
      </p>
      <p class="mb-3">
        The platform supports three user roles. Students browse, filter, and purchase courses. Authors create and manage their own content after completing an onboarding survey. Admins have full control over courses, categories, users, orders, and system logs.
      </p>
      <p class="mb-3">
        The core technical challenge was the Stripe integration. Orders are stored as "unpaid" on session creation, then confirmed through Stripe session validation on redirect. A webhook listener handles edge cases: failed redirects, closed tabs, or dropped connections, ensuring payment consistency regardless of client behavior.
      </p>
      <p class="mb-3">
        The cart runs entirely on AJAX and LocalStorage, enabling smooth interaction without page reloads and preventing duplicate purchases across sessions. The platform also includes advanced filtering by category, topic, price, and author, alongside wishlist functionality and dynamic pagination.
      </p>
      <p class="mb-3">
        This project was my first encounter with real payment infrastructure and taught me how much complexity lives between "payment initiated" and "order confirmed." It shaped how I think about state consistency between client and server.
      </p>`,
        stack: ["Laravel", "JavaScript / jQuery", "MySQL", "AJAX", "Bootstrap 4"],
        image: "/images/projects/gacanovic-academy.png",
        github: "https://github.com/MarkoG111/gacanovic_academy",
        demo: "https://gacanovic-academy.infinityfree.me/",
        reverse: true,
        hoverOffset: 60
    },
    {
        id: 4,
        title: "Škoda Rental",
        date: "July 2020",
        description: `
      <p class="mb-2">
        Car rental web application built with <strong>OOP PHP</strong> following the <strong>MVC</strong> architectural pattern with a <strong>Front Controller</strong> entry point, focused on dynamic data handling and user interaction.
      </p>
      <ul class="list-disc ml-5 space-y-1">
        <li>AJAX filtering with pagination (no page reload)</li>
        <li>Booking system with availability validation</li>
        <li>Admin dashboard with full CRUD operations</li>
        <li>Server + client-side validation and logging</li>
      </ul>`,
        details: `
      <p class="mb-3">
        Škoda Rental is a full-stack web application built using PHP, MySQL, and JavaScript, developed as part of my early backend learning phase.
      </p>
      <p class="mb-3">
        The goal of the project was to build a complete rental system from scratch, including user authentication, booking flow, and admin management, while understanding how backend and frontend communicate in real-world scenarios.
      </p>
      <p class="mb-3">
        Users can browse available cars, filter them dynamically using AJAX, and submit booking requests. The system validates availability to prevent conflicts, ensuring that cars cannot be double-booked for the same time period.
      </p>
      <p class="mb-3">
        A review system allows users to leave feedback only after completing a booking, enforcing basic business rules and improving data integrity.
      </p>
      <p class="mb-3">
        The admin panel includes full CRUD functionality for managing cars, bookings, and reviews, along with basic analytics such as page visit tracking and system logs stored in text files.
      </p>
      <p class="mb-3">
        The application uses <strong>AJAX</strong> to dynamically load content (filtering, navigation, admin panels) without full page reloads, improving user experience and responsiveness.
      </p>
      <p class="mb-3">
        Form validation is implemented on both client and server side, while email communication is handled using PHPMailer for contact functionality.
      </p>
      <p class="text-gray-600">
        This project represents an important step in my development, where I moved from basic CRUD applications to building complete systems with business logic, validation, and dynamic user interaction.
      </p>
      <hr class="my-6"/>
      <h4 class="font-semibold mb-3">Key Challenges & Solutions</h4>
      <div class="space-y-4 text-sm">
        <div>
          <p class="font-medium">Preventing double bookings</p>
          <p class="text-gray-600">
            Multiple users could request the same car for the same period. 
            I implemented server-side validation to check availability before confirming a booking.
          </p>
        </div>
        <div>
          <p class="font-medium">Dynamic user experience without frameworks</p>
          <p class="text-gray-600">
            Without using modern frameworks, I implemented <strong>AJAX-based updates</strong> to load content dynamically and avoid full page reloads.
          </p>
        </div>
        <div>
          <p class="font-medium">Data integrity in user actions</p>
          <p class="text-gray-600">
            Users could only leave reviews for cars they had actually booked, enforcing a simple but important business rule.
          </p>
        </div>
        <div>
          <p class="font-medium">Debugging and error tracking</p>
          <p class="text-gray-600">
            I implemented logging of errors and user activity into text files, which helped with debugging and understanding system behavior.
          </p>
        </div>
      </div>`,
        stack: ["JavaScript / jQuery", "PHP", "OOP", "MVC Architecture", "MySQL", "AJAX", "Bootstrap 4"],
        image: "/images/projects/skoda.png",
        github: "https://github.com/MarkoG111/skoda_rental",
        demo: "https://skoda-rental.infinityfree.me/",
        reverse: false,
        hoverOffset: 60
    },
    {
        id: 5,
        title: "Gigatronic Shop",
        date: "March 2020",
        description: `
      <p class="mb-2">
        E-commerce web application built with <strong>PHP</strong> and <strong>MySQL</strong>, focused on dynamic content and core shopping features.
      </p>
      <ul class="list-disc ml-5 space-y-1">
        <li>AJAX-based product listing, filtering and pagination</li>
        <li>Shopping cart using LocalStorage</li>
        <li>User authentication and session management</li>
        <li>Admin dashboard with orders, polls, users and products</li>
      </ul>`,
        details: `
      <p class="mb-3">
        Gigatronic Shop is a full-stack e-commerce application built using PHP, MySQL, and JavaScript, developed as one of my first larger backend-driven projects.
      </p>
      <p class="mb-3">
        The goal of this project was to understand how a complete web shop works, including product management, user authentication, and order processing.
      </p>
      <p class="mb-3">
        Products are dynamically loaded from the database using <strong>AJAX</strong>, with support for filtering, searching, sorting, and pagination, allowing users to interact with the system without full page reloads.
      </p>
      <p class="mb-3">
        The shopping cart is implemented using <strong>LocalStorage</strong>, enabling users to manage products before creating an order. Once a purchase is made, the data is sent to the backend and stored as an order.
      </p>
      <p class="mb-3">
        The application includes a full authentication system with registration and login, along with session management and basic security checks. Failed login attempts trigger email notifications, improving account security.
      </p>
      <p class="mb-3">
        An admin dashboard provides control over products, users, orders, and polls, including CRUD operations and basic analytics such as user activity and page statistics.
      </p>
      <p class="mb-3">
        The system also includes a voting (poll) feature, where users can vote once and see aggregated results, introducing basic data integrity constraints.
      </p>
      <p class="text-gray-600">
        This project represents the foundation of my backend development, where I learned how to structure applications, handle user interactions, and build complete systems from scratch.
      </p>
      <hr class="my-6"/>
      <h4 class="font-semibold mb-3">Key Challenges & Solutions</h4>
      <div class="space-y-4 text-sm">
        <div>
          <p class="font-medium">Dynamic content without frameworks</p>
          <p class="text-gray-600">
            Without using modern frontend frameworks, I implemented <strong>AJAX-based communication</strong> to dynamically load products, filters, and pagination.
          </p>
        </div>
        <div>
          <p class="font-medium">Managing cart state on the client</p>
          <p class="text-gray-600">
            I used <strong>LocalStorage</strong> to persist cart data, allowing users to manage items before sending them to the backend as an order.
          </p>
        </div>
        <div>
          <p class="font-medium">User authentication and session handling</p>
          <p class="text-gray-600">
            Implemented login and registration with both client-side and server-side validation, including session tracking and basic security checks.
          </p>
        </div>
        <div>
          <p class="font-medium">Ensuring valid user actions</p>
          <p class="text-gray-600">
            Features like voting and ordering required constraints (e.g. one vote per user), which I enforced through backend logic.
          </p>
        </div>
      </div>`,
        stack: ["JavaScript / jQuery", "PHP", "MySQL", "AJAX", "Bootstrap 4"],
        image: "/images/projects/gigatronic-shop.png",
        github: "https://github.com/MarkoG111/gigatronic_shop",
        demo: "https://gigatronic-shop.infinityfree.me/",
        reverse: true,
        hoverOffset: 60
    },
    {
        id: 6,
        title: "Gornji Milanovac",
        date: "February 2019",
        description: `
      <p class="mb-2">
        Responsive single-page website built with <strong>JavaScript</strong> and <strong>jQuery</strong>, focused on dynamic UI and data rendering.
      </p>
      <ul class="list-disc ml-5 space-y-1">
        <li>Dynamic content loading from JSON using AJAX</li>
        <li>Filtering, search and sorting with jQuery</li>
        <li>Interactive UI (modals, accordion, animations)</li>
        <li>Form validation with regex and LocalStorage</li>
      </ul>`,
        details: `
      <p class="mb-3">
        Gornji Milanovac is a responsive single-page web application built using HTML, CSS, JavaScript, and jQuery, developed as one of my earliest projects focused on dynamic frontend behavior.
      </p>
      <p class="mb-3">
        The goal of this project was to understand how to build interactive user interfaces without modern frameworks, using pure JavaScript and jQuery to manipulate the DOM and handle user interactions.
      </p>
      <p class="mb-3">
        The application dynamically loads content from multiple <strong>JSON files</strong> (lodging, news, gallery, statistics) using AJAX, allowing the page to update without reloads.
      </p>
      <p class="mb-3">
        Users can search, filter, and sort accommodation data in real-time, with logic implemented using jQuery for efficient DOM updates.
      </p>
      <p class="mb-3">
        The UI includes interactive components such as modals, accordion (jQuery UI), animated sections, and a Lightbox gallery, improving user experience and visual presentation.
      </p>
      <p class="mb-3">
        Form validation is implemented using regular expressions, while LocalStorage is used to persist user input between page reloads.
      </p>
      <p class="text-gray-600">
        This project represents the beginning of my journey in building dynamic web applications, where I learned how to work with data, manipulate the DOM, and create interactive user interfaces without relying on modern frameworks.
      </p>
      <hr class="my-6"/>
      <h4 class="font-semibold mb-3">Key Challenges & Solutions</h4>
      <div class="space-y-4 text-sm">
        <div>
          <p class="font-medium">Dynamic content without frameworks</p>
          <p class="text-gray-600">
            Without React or similar tools, I used <strong>AJAX + JSON</strong> to dynamically load and render content on the page.
          </p>
        </div>
        <div>
          <p class="font-medium">Managing UI complexity</p>
          <p class="text-gray-600">
            Multiple interactive components (accordion, modals, animations) were handled using <strong>jQuery and jQuery UI</strong>.
          </p>
        </div>
        <div>
          <p class="font-medium">Client-side validation</p>
          <p class="text-gray-600">
            I implemented form validation using <strong>regular expressions</strong>, ensuring correct user input without backend processing.
          </p>
        </div>
        <div>
          <p class="font-medium">Persisting user data</p>
          <p class="text-gray-600">
            Used <strong>LocalStorage</strong> to store form data and restore it after page reload, improving user experience.
          </p>
        </div>
      </div>`,
        stack: ["JavaScript / jQuery", "AJAX", "JSON"],
        image: "/images/projects/township-gornji-milanovac.png",
        github: "https://github.com/MarkoG111/gornji_milanovac",
        demo: "https://gornjimilanovac.vercel.app/",
        reverse: false,
        hoverOffset: 50
    },
    {
        id: 7,
        title: "K2 Elite",
        date: "March 2018",
        description: `
      <p class="mb-2">
        Static website built using <strong>HTML</strong> and <strong>CSS</strong>, focused on learning core web fundamentals.
      </p>
      <ul class="list-disc ml-5 space-y-1">
        <li>Multi-page layout with semantic HTML structure</li>
        <li>CSS-based layout, navigation and styling</li>
        <li>Image galleries and basic UI components</li>
        <li>SEO basics (meta tags, sitemap, RSS)</li>
      </ul>`,
        details: `
      <p class="mb-3">
        K2 Elite is my first web project, built entirely using HTML and CSS, without any JavaScript or frameworks.
      </p>
      <p class="mb-3">
        The goal of this project was to understand the fundamentals of web development, including page structure, layout design, and styling.
      </p>
      <p class="mb-3">
        The website was created as a presentation site for a local club, containing multiple static pages such as home, gallery, contact, and location.
      </p>
      <p class="mb-3">
        All layouts and components were built manually using CSS, including navigation, image galleries, and simple sliders, without relying on external libraries.
      </p>
      <p class="mb-3">
        The project also includes basic SEO elements such as meta tags, sitemap, and RSS feed, as well as integration with Google Maps for location display.
      </p>
      <p class="text-gray-600">
        This project represents the foundation of my development journey, where I learned how the web works at its core before moving on to JavaScript, frameworks, and backend systems.
      </p>
      <hr class="my-6"/>
      <h4 class="font-semibold mb-3">Key Challenges & Solutions</h4>
      <div class="space-y-4 text-sm">
        <div>
          <p class="font-medium">Building layouts without frameworks</p>
          <p class="text-gray-600">
            Without any libraries, I learned how to structure pages using pure <strong>HTML and CSS</strong>, including positioning and spacing.
          </p>
        </div>
        <div>
          <p class="font-medium">Creating UI components manually</p>
          <p class="text-gray-600">
            Elements like navigation, galleries, and sliders were implemented using only CSS, helping me understand how UI is built from scratch.
          </p>
        </div>
        <div>
          <p class="font-medium">Understanding web structure</p>
          <p class="text-gray-600">
            I organized the project into multiple pages and files, learning how websites are structured and connected without using frameworks.
          </p>
        </div>
        <div>
          <p class="font-medium">Basic SEO and accessibility</p>
          <p class="text-gray-600">
            Implemented meta tags, sitemap, and RSS to understand how websites are indexed and structured for search engines.
          </p>
        </div>
      </div>`,
        stack: ["HTML", "CSS", "SEO"],
        image: "/images/projects/k2-elite.png",
        github: "https://github.com/MarkoG111/k2_elite",
        demo: "https://k2elite.vercel.app/",
        reverse: true,
        hoverOffset: 40
    }
];