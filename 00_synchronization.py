from time import sleep


def sleep_3s():
    sleep(3)
    print('Wake up!')


print('Start!')
sleep_3s()
print('End!')
