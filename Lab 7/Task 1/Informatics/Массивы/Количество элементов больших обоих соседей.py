N = int(input())
A = list(map(int, input().split(" ")))
ans = 0

for i in range(1, N - 1):
  if A[i] > A[i - 1] and A[i] > A[i + 1]:
    ans += 1

print(ans)
