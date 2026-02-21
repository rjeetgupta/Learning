# take a user input and check the number is even or odd

#taking user input

num = int(input("Enter a number : "));

# check the input number is even or odd

if num % 2 == 0:
    print(f"{num } is even number.");
else:
    print(f"{ num } is odd number.");