# Sum of digit

def sum_of_digit(num):
    
    total = 0
    while num > 0:
        rem = num % 10
        total += rem
        num = num // 10
    
    return total

number = int(input("Enter a number : "))

print(sum_of_digit(number))