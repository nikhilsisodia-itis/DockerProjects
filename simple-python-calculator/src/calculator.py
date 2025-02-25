def append_to_operations_file(operation, num1, num2, result):
    try:
        with open('/app/src/operations/operations.txt', 'a') as f:
            f.write(f"{operation}: {num1} and {num2} = {result}\n")
        print("Successfully appended to operations.txt")
    except Exception as e:
        print(f"Failed to append to operations.txt: {e}")

def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y == 0:
        return "Error: Division by zero"
    return x / y

def main():
    print("Select operation:")
    print("1. Addition")
    print("2. Subtraction")
    print("3. Multiplication")
    print("4. Division")

    choice = input("Enter choice (1/2/3/4): ")

    num1 = float(input("Enter first number: "))
    num2 = float(input("Enter second number: "))

    if choice == '1':
        result = add(num1, num2)
        operation = "Addition"
    elif choice == '2':
        result = subtract(num1, num2)
        operation = "Subtraction"
    elif choice == '3':
        result = multiply(num1, num2)
        operation = "Multiplication"
    elif choice == '4':
        result = divide(num1, num2)
        operation = "Division"
    else:
        print("Invalid input")
        return

    print(f"The result is: {result}")
    append_to_operations_file(operation, num1, num2, result)

if __name__ == "__main__":
    main()