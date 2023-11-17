## PetStorePOS

This project is a Point of Sales System Project for Pet Products and Items. It includes analyzation, inventory management, and sales history information. I used Angular as its framework, you can visit [Angular.dev](https://angular.dev) to learn more.

## Project Reference

- Sorting Function: https://www.telerik.com/blogs/sorting-filtering-grouping-aggregating-data-angular
- Chart: https://canvasjs.com/angular-charts/
- Displaying List: "https://angular.io/tutorial/tour-of-heroes/toh-pt2"
- Dialog/Modal: https://material.angular.io/components/dialog/overview
- Icons - https://boxicons.com/

## Project Dependencies

Make sure you have the following prerequisites installed on your machine:

- [Node.js](https://nodejs.org/en/) (includes npm)
- [Angular CLI](https://cli.angular.io/)

If Node.js and npm are not installed on your machine, you can download and install them from [https://nodejs.org/en/download/](https://nodejs.org/en/download/).

If Angular CLI is not installed, you can install it globally using npm:

```bash
npm install -g @angular/cli
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/marlon-caisip/PetStorePOS.git
   ```

   or download this repository and unzip it.

2. Navigate to the project directory:

   ```bash
   cd PetStorePOS
   ```

3. Install project dependencies using npm:

   ```bash
   npm install
   ```

## How to Use

To run the development server and view the application in your browser, use the following command:

```bash
ng serve
```

## Why TypeScript over JavaScript?

For the Pet Shop web-based point-of-sale system, TypeScript was chosen over pure HTML, CSS, and JavaScript for several reasons. Firstly, TypeScript is the language that Angular, the chosen framework for this project, is built upon. Secondly, Angular's component-based architecture offers a significant advantage over a traditional HTML, CSS, and JavaScript approach. As the project grows in size and complexity, it's already hard to manage code in Angular especially for beginners like me, how much more it is challenging in a pure HTML, CSS, and JavaScript environment. TypeScript shares a close resemblance to JavaScript in terms of syntax and functionality. This familiarity makes it easier for me to transition to TypeScript through its docs and few tutorials. Finally, I used TypeScript's interface feature which is very useful for creating a database-like structure for inventory and customers, without it my POS won't exist.
