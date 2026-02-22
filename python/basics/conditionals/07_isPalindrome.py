# Check if a Number is a Palindrome

def reverse_number(num):
    rev = 0
    while num > 0:
        rem = num % 10
        rev = (rev * 10) + rem
        num = num // 10
    
    return rev

number = int(input("Enter a number : "))

if number == reverse_number(number):
    print("Palindrome")
else:
    print("Not Palindrome")