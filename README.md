
# Project Title

This project is a **React + Vite** based application built with scalability, maintainability, and performance in mind. 
 
It follows a **modular folder structure**, uses **Redux Toolkit with RTK Query** for state management and API handling, includes **authentication with private & public routes**, and ensures reusability via **common components and utility functions**.  


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## 💾 Before Push / Commit

To maintain **clean and consistent code**, make sure to run the following command **before pushing your changes**:

```bash
npm run format
```




## 🌐 Protocals

- **REST API Standards -** Follows best practices for API endpoints

- **Error Handling Protocols -** Centralized error handling for APIs

- **Code Formatting & Linting** → Prettier and ESLint are configured to maintain a **consistent and readable code style** across the project.
## 📂 Folder Structure & Explanation

This is the folder structure of the project. Each folder has a clear purpose to help maintain **scalability, reusability, and readability**.  



## 📁 `src/`
The main source folder of the project containing all the application code.  

### 📁 `assets Folder`
Holds all static files like images and global CSS.  

- **`styles/`** → Global CSS and theme-related styles.  
- **`images/`** → App-wide images, icons, and illustrations.  

### 📁`components Folder`
Reusable **UI components** that can be used across the app.  

- **`common/`** → Generic components like buttons, modals, loaders, etc.  
- **`moduleWise/`** → Components specific to a particular module or feature.  

### 📁 `config Folder`
Contains global configuration files.  

- **`apiEndpoints.js`** → Stores all backend API endpoint constants.  

### 📁 `containers Folder`
Handles **business logic** and **data preparation**.  
Containers import components and manage state/data flow.

- Example: `dashboardContainer.jsx`  

### 📁 `pages Folder`
Route-level components/pages.  
Each page imports the relevant container.  

- Example: `DashboardPage.jsx`, `LoginPage.jsx`  

### 📁 `routes Folder`
Manages **application routing**.  

- **`PrivateRoutes.jsx`** → Protected routes, accessible only to authenticated users.  
- **`PublicRoutes.jsx`** → Public routes accessible to all users.  

### 📁 `store Folder`
Redux Toolkit (RTK) store setup and state management.  

- **`apiCalls/`** → API call handling using RTK Query.  
- **`apiParser/`** → Normalizes API responses.  
- **`slices/`** → Redux slices (state management per feature).  
- **`middlewares.js`** → Custom middlewares for store.  
- **`rootReducer.js`** → Combines all reducers.  
- **`index.js`** → Entry point for the Redux store.  

### 📁 `utils Folder`
Reusable helper functions across the application.  
Examples: date formatting, calculations, or common utilities.  

### 📁 `validation Folder`
Form validation rules for the application.  

- **`validationSchemas.js`** → Contains common form validations (email, password, etc.)  

### `App.jsx File`
Root component of the application. Sets up the **routing** 

---

## 💡 Summary
- Folders are **modular** → easy to scale as the app grows.  
- Logic is separated from UI → **containers handle logic**, components handle UI.  
- **Store and API structure** ensures centralized state management and consistent data flow.  
- **Assets and utils** are reusable across modules to maintain **DRY** principles.  

## 🔄 Data Flow (React + Redux Toolkit + API)

The flow of data in this project follows **React component → Redux → API → Store → Component** cycle.  



### Step-by-Step Explanation

1. **User Interaction (Component)**  
   - The user clicks a button, submits a form, or triggers an event in the UI.

2. **Container Logic**  
   - The container handles any logic, prepares the payload, and decides which **Redux action** to dispatch or which **API call** to trigger.

3. **Slice Updates**  
   - The dispatched action updates the corresponding **Redux slice** (part of the state).

4. **API Call (RTK Query)**  
   - If needed, the container triggers an API call to the backend using endpoints from `config/apiEndpoints.js`.

5. **API Parser**  
   - The response from the backend is processed via `apiParser.js` to normalize and format the data for the store.

6. **Redux Store Update**  
   - The normalized data updates the **Redux store**, ensuring the global state stays consistent.

7. **Component Re-render**  
   - Components that depend on the updated state automatically re-render to reflect the latest data.

> 💡 **Note:** This flow ensures separation of concerns — **UI components remain dumb**, containers handle logic, and Redux manages the global state while API responses are centralized through a parser.

