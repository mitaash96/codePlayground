if __name__ == '__main__':
    N= int(input())
    commands= []
    for n in range(N):
        commands.append(input())
    
    l= []
    for _ in range(N):
        if commands[_].__contains__('print'):
            print(l)
        elif commands[_].__contains__('insert'):
            l.insert(int(commands[_].split()[2]), int(commands[_].split()[1]))
        elif commands[_].__contains__('remove'):
            l.remove(int(commands[_].split()[1]))
        elif commands[_].__contains__('append'):
            l.append(int(commands[_].split()[1]))
        elif commands[_].__contains__('sort'):
            l= sorted(l)
        elif commands[_].__contains__('pop'):
            l.pop()
        elif commands[_].__contains__('reverse'):
            l= l[::-1]