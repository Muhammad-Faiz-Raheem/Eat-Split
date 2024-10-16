# Eat & Split - Bill Splitting and Balance Tracking App

### Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

**Eat & Split** is a web application designed to help friends easily split their bills and keep track of individual balances with each other. This app allows users to add friends, split bills, and manage balances by keeping a record of who owes whom. It's perfect for tracking shared expenses like meals, events, or group trips.

## Features

- **Add Friends**: Users can add friends without requiring them to have an account.
- **Track Balances**: The app keeps track of how much each user owes or is owed by their friends.
- **Split Bills**: Easily split bills between friends and update balances accordingly.
- **Update Friend Balances**: Record payments made or received to adjust the balance.
- **Delete Friends**: Remove friends and their associated balances from your list.
- **Responsive Design**: The app works well on both mobile and desktop devices.

## Tech Stack

- **Frontend**: React.js, React Query, React Router
- **Backend**: Supabase (Database, Authentication)
- **State Management**: React Context API
- **Styling**: Custom CSS
- **Icons**: React Icons
- **Notifications**: React Hot Toast

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/eat-and-split.git
   cd eat-and-split
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Supabase**

   - Create a project in [Supabase](https://supabase.com/).
   - Create a table for `friends` with appropriate columns (e.g., `id`, `name`, `balance`, `image`, `user_id`).
   - Set up authentication and enable email login in Supabase.
   - Set the necessary environment variables in a `.env` file:
     ```bash
     REACT_APP_SUPABASE_URL=your-supabase-url
     REACT_APP_SUPABASE_KEY=your-supabase-api-key
     ```

4. **Run the App**

   ```bash
   npm start
   ```

5. **Build for Production**
   ```bash
   npm run build
   ```

## Usage

1. **Register or Log In**: Users must create an account or log in using their email.
2. **Add Friends**: Navigate to the 'Add Friend' section to add a friend. Friends can be added with their name and profile picture.

3. **Split a Bill**: Select a friend from your list, and input the amount you want to split. The app automatically calculates and updates the balance.

4. **Track Balances**: View and track the current balance with each friend, displaying whether they owe you or you owe them.

5. **Manage Payments**: Record payments made or received to update the balance accordingly.

6. **Remove Friends**: If necessary, friends can be deleted, which will remove their data and associated balance records.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and make a pull request with your changes.

1. Fork the project
2. Create a new branch for your feature or bug fix
3. Commit your changes
4. Push to your branch
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Enjoy using **Eat & Split** to make bill splitting with friends easier and more organized!
