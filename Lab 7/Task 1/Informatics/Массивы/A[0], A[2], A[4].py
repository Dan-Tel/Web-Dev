N = int(input())
A = list(map(int, input().split(" ")))

for i in range(N):
  if i % 2 == 0:
    print(A[i], end=" ")
