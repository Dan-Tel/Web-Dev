N = int(input())
A = list(map(int, input().split(" ")))
ans = False

for i in range(1, N):
  if A[i] > 0 and A[i - 1] > 0 or A[i] < 0 and A[i - 1] < 0:
    ans = True
    break

if ans:
  print("YES")
else:
  print("NO")
