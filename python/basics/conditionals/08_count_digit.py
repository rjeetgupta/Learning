# Count Digits in a Number

# funtion for countign no of digit
def count_digit(num):
    if num == 0:
        return 1
        
    counter = 0
    while num > 0:
        counter += 1
        num = num // 10

    return counter

number = int(input("Enter a number : "))

print(count_digit(number))