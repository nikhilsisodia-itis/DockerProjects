# Simple Python Calculator

This project is a simple command-line calculator that performs basic arithmetic operations: addition, subtraction, multiplication, and division. The calculator prompts the user to select an operation, input two numbers, and then displays the result. Additionally, it logs each operation performed into a text file for record-keeping.

## Project Structure

```
simple-python-calculator
├── src
│   ├── calculator.py        # Main logic for the calculator
│   └── operations
│       └── operations.txt   # Log of operations performed
├── Dockerfile                # Instructions to build the Docker image
├── requirements.txt          # Python dependencies
└── README.md                 # Project documentation
```

## Features

- Supports four basic operations: addition, subtraction, multiplication, and division.
- Logs each operation, including the selected option, inputs, and output, to `operations.txt`.
- Easy to run in a Docker container.

## Getting Started

### Prerequisites

- Python 3.x
- Docker (if you want to run the project in a container)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/simple-python-calculator.git
   cd simple-python-calculator
   ```

2. Install the required Python packages (if running locally):
   ```
   pip install -r requirements.txt
   ```

### Running the Calculator

To run the calculator locally, execute the following command:
```
python src/calculator.py
```

To run the calculator using Docker, build the Docker image and run the container:
```
docker build -t simple-python-calculator .
docker run -v operations:/app/src/operations simple-python-calculator
```

### Logging Operations

All operations performed by the calculator will be logged in the `src/operations/operations.txt` file. Each entry will include:
- The operation selected (e.g., addition)
- The two numbers used
- The result of the operation

## Future Enhancements

- Add a web interface using Flask.
- Implement error handling for invalid inputs.
- Extend functionality to include more complex mathematical operations.

## License

This project is licensed under the MIT License - see the LICENSE file for details.