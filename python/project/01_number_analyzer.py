# Number Analyzer

# Goal

# Write a program that:
# Takes a positive integer input.
# Prints:
# Number of digits
# Sum of digits
# Reversed number
# Whether it is a palindrome

def count_digit(num):
    if num == 0:
        return 1

    digit = 0
    while num > 0:
        digit += 1
        num = num // 10

    return digit

def sum_of_digit(num):
    total = 0
    while num > 0:
        rem = num % 10
        total += rem
        num = num // 10

    return total

def reverse_number(num):
    rev = 0
    while num > 0:
        rem = num % 10
        rev = (rev * 10) + rem
        num = num // 10

    return rev


number = int(input("Enter a number : "))

reversed_num = reverse_number(number)

print(f"Digit count: {count_digit(number)}")
print(f"Sum of digits: {sum_of_digit(number)}")
print(f"Reversed number: {reversed_num}")
print(f"Palindrome: {'Yes' if number == reversed_num else 'No'}")