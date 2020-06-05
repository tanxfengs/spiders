import random

def get_tracks(distance):
    # 构造滑动轨迹
    '''
    :param distance: (Int)缺口离滑块的距离
    :return: (List)移动轨迹
    '''
 
    # 创建存放轨迹信息的列表
    trace = []
    # 设置加速的距离
    faster_distance = distance * 3 / 5
 
    # 设置初始位置、初始速度、时间间隔
    start, v0, t = 0.0, 0.5, 0.2
    # 当尚未移动到终点时
    while start < distance:
        # 如果处于加速阶段
        if start < faster_distance:
            # 设置加速度为2
            a = round(random.uniform(0.5, 0.8), 2)
        # 如果处于减速阶段
        else:
            # 设置加速度为-3
            a = round(random.uniform(-0.7, -0.9), 2)
        # 移动的距离公式
        move = v0 * t + 1 / 2 * a * t * t
        move = int(move)
        # 此刻速度
        v = v0 + a * t
        # 重置初速度
        v0 = v
        # 重置起点
        start += move
        # 将移动的距离加入轨迹列表
        trace.append(round(move))
    # 返回轨迹信息
    return trace, sum(trace)

value = get_tracks(120)
print(value)