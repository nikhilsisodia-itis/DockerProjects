# Simple Node Calculator

This project is a simple Node.js application that allows users to perform basic arithmetic operations: addition, subtraction, multiplication, and division. The application prompts the user to select an operation, input two numbers, and then displays the result. Each operation performed is logged in a file for future reference.

## Project Structure

```
simple-node-calculator
├── src
│   ├── index.js          # Entry point of the application
│   └── operations
│       └── operations.txt # Stores history of operations
├── Dockerfile             # Instructions to build the Docker image
├── package.json           # npm configuration file
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- npm (Node Package Manager) comes with Node.js.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd simple-node-calculator
   ```

2. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To run the application, use the following command:
```
node src/index.js
```

### Using Docker

To build and run the application using Docker, follow these steps:

1. Build the Docker image:
   ```
   docker build -t simple-node-calculator .
   ```

2. Run the Docker container:
   ```
   docker run simple-node-calculator
   ```

### Logging Operations

All operations performed will be logged in the `src/operations/operations.txt` file. Each entry will include the selected operation, the inputs provided by the user, and the result of the operation.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.