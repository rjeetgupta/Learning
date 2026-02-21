# Count Even and Odd Numbers (Loop + Conditions)

num = int(input("Enter a positive number : "))

even_count = 0
odd_count = 0

for i in range(1, num + 1):
    if i % 2 == 0:
        even_count += 1
    else:
        odd_count += 1

print(f"Even count : {even_count}")
print(f"Odd count : {odd_count}")