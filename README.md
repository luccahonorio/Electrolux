# AppElectrolux

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.5.

# steps to run:

first of all:
run
```bash
npm i
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Back End 

To run the back end, needs to be inside the path src/db and run:

```bash
json-server --watch db.json
```

# decisoes tomadas

For the project, it was created using the Angular CLI for the latest available LTS version.
Fix the creation of components, services, and modules using the Angular generate command:

```bash
ng generate c components/(componentName)
```

For the backend, I preferred to use json-server to avoid spending time creating a database and routes. This way, json-server saved a lot of development time.

For the requests that I would make inside the database, I created a service where I declare the "getProducts" call to fetch all products, and "createProduct" to create products in the database.

This resulted in the creation of the four components that make up the page. Inside each of their TypeScript files, they call the service to make the necessary requests at each part of the code.

The three most complex components are the table, addItemModal, and detailsModal.

The table is complex because of the usage of the Angular Material library and its styling. It also includes a product search where I filtered products based on the user’s input for the product name, and the opening of the two modals I created. For those modals, I used dialogRef to open and close them and to send error or success messages when creating products.

The addItemModal's complexity is in creating the items and sending them to the database. This is done through the service, which handles saving to the database.

The detailsModal involved injecting the product data and displaying these values.


## Conclusion

This project was developed with a focus on simplicity and efficiency. The choice of Angular CLI and json-server contributed to rapid and organized development, making the project scalable and easy to maintain.













