N = int(input())
A = list(map(int, input().split(" ")))
ans = 0

for i in range(N):
  if A[i] > 0:
    ans += 1

print(ans)
