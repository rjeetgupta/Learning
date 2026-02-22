# Check if a Number is a Prime

number = int(input("Enter a number : "))

counter = 0

for num in range(2, number + 1):
    if(number % num == 0):
        counter += 1

if counter == 1:
    print("Palindrome")
else:
    print("Not Palindrome")