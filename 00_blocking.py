from time import sleep

# synchronization(blocking)

def sleep_3s():
    sleep(3)
    print('wake up!!!')


print('start!!!')
sleep_3s()
print('end!!!')
