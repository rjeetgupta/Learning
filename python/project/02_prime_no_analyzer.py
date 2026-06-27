# Prime Number Analyzer

# Goal

# Write a program that:
# Takes a positive integer input.
# Prints:
# Whether the number is Prime or Not
# Number of factors it has
# Sum of its factors

def isPrimeNumber(num):
    counter = 0
    for n in range(2, num + 1):
        if num % n == 0:
            counter += 1
        
    if counter == 1:
        return true
    else:
        return false

number = int(input("Enter a number : "))

print(f"Prime: {"Yes" if isPrimeNumber(number) == "true" else "No"}")