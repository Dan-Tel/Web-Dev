if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    
    mx = max(arr)
    runner_up = -100
    
    for i in arr:
        if i == mx:
            continue
        
        runner_up = max(runner_up, i)
    
    print(runner_up)
