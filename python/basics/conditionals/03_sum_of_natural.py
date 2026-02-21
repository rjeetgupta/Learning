# Sum of First N Natural Numbers

num = int(input("Enter a positive number : "))

# calculate sum
total = 0
i = 0

while i <= num:
    total += i
    i += 1
# printing sum of natural no.
print(total)