# Reverse a Number (Loop + Math Thinking)

num = int(input("Enter a number : "))

rev = 0
# find remainder and use formula
while num > 0:
    rem = num % 10
    rev = (rev * 10) + rem
    num = num // 10

print(f"Reverse of given number is {rev}")