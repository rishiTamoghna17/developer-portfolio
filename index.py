def numerical_diamond(n):
    result = []

    # Generate the upper part of the diamond
    for i in range(1, n + 1):
        row = ''.join(str(x) for x in range(1, i + 1)) + ''.join(str(x) for x in range(i - 1, 0, -1))
        result.append(row)

    # Generate the lower part of the diamond
    for i in range(n - 1, 0, -1):
        row = ''.join(str(x) for x in range(1, i + 1)) + ''.join(str(x) for x in range(i - 1, 0, -1))
        result.append(row)

    # Print the result
    for line in result:
        print(line)


# Input
N = int(input(3))
numerical_diamond(N)
