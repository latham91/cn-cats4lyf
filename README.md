# Cats4Lyf

## Project Description

Cats4Lyf is a cat adoption website designed with the look and feel of an ecommerce platform. The platform offers a delightful and user-friendly experience for individuals interested in adopting cats. Users can explore a variety of cat profiles, each enriched with engaging descriptions, images, and details. The project aims to create a seamless and enjoyable adoption process, making Cats4Lyf the go-to destination for cat enthusiasts looking to welcome a new furry friend into their lives.

### Aaron Latham - Project Lead

-   **Roles:** Implementor (IMP), Co-ordinator (CO), Monitor Evaluator (ME), Completer Finisher (CF)
-   **Description:** Aaron is our versatile force, juggling roles as an Implementor, Co-ordinator, Monitor Evaluator, and Completer Finisher. Bringing efficiency and practicality, he turns ideas into actions, focuses on team objectives, makes impartial judgments, and adds the finishing touch with meticulous attention to detail.
-   **Responsibilities:** As Team Lead, Aaron guides the team through the development process. He's hands-on with the basket functionality and works on improving our card designs.
-   **Responsible for:** Basket functionality, Basket items card.

### Tofeeq Majeed

-   **Roles:** Co-ordinator (CO), Implementer (IMP), Completer Finisher (CF), Shaper (SH)
-   **Description:** Tofeeq is our multitasking maestro, taking on the roles of Co-ordinator, Implementer, Completer Finisher, and Shaper. With mature coordination, efficient implementation, meticulous finishing, and a dynamic drive, he ensures the team stays focused, tasks are completed, and momentum is maintained.
-   **Responsibilities:** Tofeeq handles the navigation and routing, and he's our go-to person for the individual cat pages. He's also exploring the faker library to add some spice to our content.
-   **Responsible for:** Navigation bar, Routing, Individual cat page, Faker library utility.

### Ethan Rose

-   **Roles:** Completer Finisher (CF), Teamworker (TW), Implementor (IMP)
-   **Description:** Ethan is our versatile powerhouse, donning the hats of Completer Finisher, Teamworker, and Implementor. Meticulously searching for errors, he adds the finishing touch with a conscientious approach. As a Teamworker, Ethan promotes cooperation and averts friction, ensuring a harmonious work environment. In his Implementor role, he efficiently turns ideas into actions, contributing to the team's reliability. While occasionally prone to worry, Ethan's commitment drives the team towards excellence.
-   **Responsibilities:** Ethan's taking care of the checkout process, designing cat cards that are simple yet charming, and contributing to our about page. We're keeping it practical and functional.
-   **Responsible for:** Checkout page, Cat cards, About page.

### Oana Lupascu

-   **Role:** Plant (PL)
-   **Description:** Oana brings a burst of creativity to the team as the Plant. Highly imaginative and free-thinking, she excels in solving problems in unconventional ways. While Oana might be preoccupied with her creative thoughts, her knack for generating ideas and solving difficult problems adds a unique flavor to the team.
-   **Responsibilities:** Oana manages the contact page, footer, and keeps our CSS clean and functional. We're focusing on the essentials to make our website presentable.
-   **Responsible for:** Contact page, Footer, and CSS.

### Sophia Whitter

-   **Roles:** Plant (PL), Specialist (SP)
-   **Description:** Sophia is our dual-role powerhouse, serving as both a Plant and Specialist. With her creative and imaginative approach, she brings freshness to problem-solving. Additionally, Sophia provides in-depth knowledge and skills in key areas, contributing to the team's depth. While she might focus on technicalities, Sophia's dedication is unmatched.
-   **Responsibilities:** Sophia's adding a touch of flair with the hero section and sliders. Her graphic design skills are evolving, and she's working on making our site look good within our current skillset.
-   **Responsible for:** Hero section, Hero Slider, and Graphic Design work.

## Features

### Cat Data Fetching

-   Utilises the Cat API to fetch cat data.
-   Combines data with descriptions from Faker.js and ChatGPT-generated content for a personalised experience.

### Basket Management

-   Manages basket items, enabling users to add, remove, and modify quantities.
-   Utilises toast notifications for real-time user feedback.

### Page Routing

-   Implements React Router for seamless navigation between pages.
-   Includes routes for homepage, individual cat pages, about, contact, and checkout.

### Basket Slider

-   Features a responsive basket slider.
-   Displays live basket content, allowing users to interact and manage their items efficiently.

### Footer

-   Integrates a simple footer for essential page information.

These features collectively enhance the user experience, making Cats4Lyf a user-friendly and engaging platform for cat adoption.

## Homepage

-   **Route:** `/`
-   **Description:** The homepage welcomes users to Cats4Lyf, showcasing a delightful display of cats available for adoption. Utilising the Cat API, each cat card is enriched with unique descriptions generated by ChatGPT and Faker.js, providing users with a personalised and engaging experience.

## Individual Cat Page

-   **Route:** `/Cats/:id`
-   **Description:** This page provides detailed information about a specific cat. Users can explore a cat's breed, temperament, origin, lifespan, and more. It's an immersive experience, combining data from the Cat API with Faker.js for additional details. Users can navigate here by selecting a cat from the homepage.

## About Us

-   **Route:** `/About`
-   **Description:** The About Us page offers insights into the Cats4Lyf team, their journey, and the passion behind the project. While currently a work in progress, it aims to give users a glimpse into the human side of the cat-loving team members.

## Contact Us

-   **Route:** `/Contact`
-   **Description:** The Contact Us page serves as a communication hub, allowing users to connect with the Cats4Lyf team. While still in development, it provides a basic form for users to reach out, share their thoughts, or ask questions about the adoption process.

## Checkout

-   **Route:** `/Checkout`
-   **Description:** The Checkout page is the final stop for users ready to adopt their chosen cats. It displays the items in the basket, allows users to modify quantities, and provides a total price calculation. The integration of a form element ensures a seamless and straightforward checkout process.

These pages collectively create a user-friendly and engaging journey through the Cats4Lyf website, from exploring cats to learning about the team and facilitating the adoption process.

## Dependencies

-   [**react-icons:** ^5.0.1](https://www.npmjs.com/package/react-icons)
-   [**react-router-dom:** ^6.21.3](https://www.npmjs.com/package/react-router-dom)
-   [**react-toastify:** ^10.0.4](https://www.npmjs.com/package/react-toastify)
-   [**swiper:** ^11.0.5](https://www.npmjs.com/package/swiper)

## Dev Dependencies

-   [**@faker-js/faker:** ^8.4.0](https://www.npmjs.com/package/@faker-js/faker)
-   [**@types/react:** ^18.2.43](https://www.npmjs.com/package/@types/react)
-   [**@types/react-dom:** ^18.2.17](https://www.npmjs.com/package/@types/react-dom)
-   [**eslint:** ^8.55.0](https://www.npmjs.com/package/eslint)
-   [**eslint-plugin-react:** ^7.33.2](https://www.npmjs.com/package/eslint-plugin-react)
-   [**eslint-plugin-react-hooks:** ^4.6.0](https://www.npmjs.com/package/eslint-plugin-react-hooks)
-   [**eslint-plugin-react-refresh:** ^0.4.5](https://www.npmjs.com/package/eslint-plugin-react-refresh)
